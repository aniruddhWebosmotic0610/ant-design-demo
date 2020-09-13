import React, { createRef } from 'react'
import { Button, Card } from 'antd';
import { Bar } from '@ant-design/charts';
import {
    DownloadOutlined
} from '@ant-design/icons';
import './chart.scss'



export default function BarChart() {
    const ref = createRef();

    const downloadImage = () => {
        console.log(ref.current?.downloadImage())
    };

    // Get data base64
    // const toDataURL = () => {
    //     console.log(ref.current?.toDataURL());
    // };
    const data = [
        { Area: 'Delhi', Sales: 4684506.442 },
        { Area: 'Mumbai', Sales: 4137415.0929999948 },
        { Area: 'Surat', Sales: 2681567.469000001 },
        { Area: 'Baroda', Sales: 2447301.017000004 },
        { Area: 'Banglore', Sales: 1303124.508000002 },
        { Area: 'Chennai', Sales: 815039.5959999998 }
    ];
    const config = {
        data,
        title: { visible: true, text: 'Basic bar chart' },
        forceFit: true,
        xField: 'Sales',
        yField: 'Area',
        xAxis: { formatter: (v) => Math.round(v / 10000) + 10000 },
    };
    return (
        <Card className="p-0" title="Bar Chart" bordered={false}
            extra={<Button type="link" onClick={downloadImage} style={{ marginRight: 24 }} icon={<DownloadOutlined/>}></Button>}>
            <Bar {...config} chartRef={ref} style={{ height: 300 }} />
        </Card>
    )
}
