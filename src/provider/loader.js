import React from 'react'
import { Space, Spin } from 'antd'

export default function Loader() {
    return (
        <div style={{ minHeight: '100vh', width: '100vw', position: "fixed", zIndex: 999, background: "rgba(0, 0, 0, 0.2)" }}>
            <Space size="middle" style={{ position: "absolute", top: '50%', left: '50%' }}>
                <Spin size="large" />
            </Space>,
        </div>
    )
}
