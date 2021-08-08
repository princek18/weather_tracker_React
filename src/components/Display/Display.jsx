import { Col, Row } from 'antd'
import React from 'react'
import './Display.css'
export default function Display({ icon, data }) {
    return (
        <>
            <Row justify="center">
                <img src={icon.icon} alt="" />
            </Row>
            <div className="dis">
                <Row align="middle" justify="center">
                    {Object.keys(data).map((one) => {
                        return <Col sm={8} xs={16} lg={8} md={16}>{one}: {data[one]}</Col>
                    })}
                </Row>

            </div>
        </>
    )
}
