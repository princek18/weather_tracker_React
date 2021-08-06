import React from 'react'
import { useState } from 'react'
import './Fetch.css'
import { Form, Input, Button, Row, Col} from 'antd';


export default function Fetch({api}) {
  const [form] = Form.useForm();
  const[city, setCity] = useState("")

  
  const handlesubmit = ({cityname})=>{
    // e.preventDefault();
    console.log(cityname);
    api(cityname)
    // setCity("");
    form.resetFields();
  }


  const put = (e)=>{
    setCity(e.target.value)
  }
    return (
        // <div>
        //   <form action="" onSubmit={handlesubmit}>
        //   <input placeholder="Enter City" type="text" value={city} onChange={put} required />
        //   <button className="btn btn-sm btn-primary" >Search</button>
        //   </form>
        // </div>
        <Row gutter={24}>
        <Form form={form}
        name="basic"

        initialValues={{
          remember: true,
        }}
        onFinish={handlesubmit}
        // onFinishFailed={onFinishFailed}
      ><Col span={8}>
        <Form.Item
          label="Search for city"
          name="cityname"
          rules={[
            {
              required: true,
              message: 'Please type a city!',
            },
          ]}
        >
          <Input/>
        </Form.Item>
        </Col>
  
        <Col sm={24} md={16} lg={8}>
        <Form.Item
          name="remember"
          valuePropName="checked"

        >
        </Form.Item>
        </Col>
          
        <Col xs={24} md={16} xl={8}>
        <Form.Item

        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        </Col>
      </Form>
      </Row>
    )
}
