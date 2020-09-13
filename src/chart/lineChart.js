import React, { createRef } from 'react'
import { Button, Card } from 'antd';
import { Line } from '@ant-design/charts';
import {
    DownloadOutlined
} from '@ant-design/icons';
import './chart.scss'

export default function LineChart() {
    const ref = createRef();

    const downloadImage = () => {
        console.log(ref.current?.downloadImage())
    };

    // Get data base64
    // const toDataURL = () => {
    //     console.log(ref.current?.toDataURL());
    // };
    const data = [
        { year: '1991', value: 3 },
        { year: '1992', value: 4 },
        { year: '1993', value: 3.5 },
        { year: '1994', value: 5 },
        { year: '1995', value: 4.9 },
        { year: '1996', value: 6 },
        { year: '1997', value: 7 },
        { year: '1998', value: 9 },
        { year: '1999', value: 13 },
    ];
    const config = {
        data,
        title: {
            visible: true,
            text: 'Line chart with data points',
        },
        xField: 'year',
        yField: 'value',
    };
    return (
        <Card className="p-0" title="Line Chart" bordered={false} extra={<Button type="link" onClick={downloadImage} style={{ marginRight: 24 }} icon={<DownloadOutlined />}></Button>} >
            <Line {...config} chartRef={ref} style={{ height: 300 }} />
        </ Card>
    )
}
