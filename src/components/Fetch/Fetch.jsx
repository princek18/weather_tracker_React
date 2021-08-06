import React from 'react'
import { useState } from 'react'
import './Fetch.css'
import { Form, Input, Button, Row, Col } from 'antd';


export default function Fetch({ api }) {
  const [form] = Form.useForm();
  const [city, setCity] = useState("")


  const handlesubmit = (elem) => {
    let cityName = elem.target.value;
    console.log(cityName)
    elem.preventDefault();
    console.log(cityName);
    if (cityName.length > 3) {
      api(cityName)
      // setCity("");
      // form.resetFields();
    }
  }


  const put = (e) => {
    setCity(e.target.value)
  }
  return (

<div className="alignTop">
    <Form form={form}  
      name="basic"

      initialValues={{
        remember: true,
      }}
      onChange={handlesubmit}
    >
      <Row gutter={24} >
        <Col sm={24} md={24} lg={24}>
          <Form.Item
          
            name="cityname"
            rules={[
              {
                required: true,
                message: 'Please type a city!',
              },
            ]}
          >
            <Input placeholder="Enter City Name.." allowClear={true} />
          </Form.Item>
        </Col>

        <Col sm={24} md={16} lg={8}>
          <Form.Item
            name="remember"
            valuePropName="checked"

          >
          </Form.Item>
        </Col>
      </Row>
    </Form>
    </div>
  )
}
