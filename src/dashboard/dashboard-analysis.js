import React, { useEffect, useState } from 'react'
import DefaultLayout from '../layout/layout'
import { Row, Col } from 'antd';
import LineChart from '../chart/lineChart';
import BarChart from '../chart/barChart';
import PieChart from '../chart/pieChart';
import Loader from '../provider/loader';


export default function DashboardAnalysis() {
    const [isLoading, setLoading] = useState(true);

    // DownloadImage
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])



    return (
        <div>
            {
                isLoading &&
                <Loader />
            }
            <DefaultLayout>
                <Row>
                    <Col span={11} className="m-2 ml-4">
                        <LineChart />
                    </Col>
                    <Col span={11} className="m-2 ml-4">
                        <BarChart />
                    </Col>

                </Row>
                <Row>
                    <Col span={11} className="m-2 ml-4">
                        <PieChart />
                    </Col>
                    <Col span={11} className="m-2 ml-4">
                        <BarChart />
                    </Col>
                </Row>
            </DefaultLayout>
        </div>
    )

}
