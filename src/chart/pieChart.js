import React, { createRef } from 'react'
import { Button, Card } from 'antd';
import {
    DownloadOutlined
} from '@ant-design/icons';
import { Pie } from '@ant-design/charts';
import './chart.scss'


export default function PieChart() {
    const ref = createRef();

    const downloadImage = () => {
        console.log(ref.current?.downloadImage())
    };
    const data = [{ "type": "One", "value": 27 },
    { "type": "Two", "value": 25 },
    { "type": "Three", "value": 18 },
    { "type": "Four", "value": 15 },
    { "type": "Five", "value": 10 },
    { "type": "Six", "value": 5 }];
    const config = {
        data,
        "forceFit": true,
        "title": { "visible": true, "text": "Pie Chart-Graphic Tab Spider Layout" },
        "radius": 0.8,
        "angleField": "value",
        "colorField": "type",
        "label": { "visible": true, "type": "spider" }
    };
    return (
        <Card className="p-0" title="Line Chart" bordered={false} extra={<Button type="link" onClick={downloadImage} style={{ marginRight: 24 }} icon={<DownloadOutlined />}></Button>} >
            <Pie {...config} chartRef={ref} style={{ height: 300 }} />
        </ Card>
    )
}
