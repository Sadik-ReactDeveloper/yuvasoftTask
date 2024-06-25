import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';

const Login = () => {
 const navigate= useNavigate()



 const onFinish = (values) => {

    
  const object ={
      "header": {
        "alg": "HS256",
        "typ": "JWT"
      },
      "payload": {
        "user_id": "123456789",
        "username": "example_user",
        "exp": 1671690886  // Expiration time in Unix timestamp format
      },
      "signature": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzNDU2Nzg5IiwidXNlcm5hbWUiOiJleGFtcGxlX3VzZXIiLCJleHAiOjE2NzE2OTA4ODZ9.HNkxUGyEK-2AXgW98xPn0Qn1A4v_XwDgyAk6b2lz5_4"
    }
    localStorage.setItem("token",JSON.stringify(object.signature))
    localStorage.setItem("userDetails",JSON.stringify(values))
console.log('Success:', values);
navigate("/")
// <Navigate to="/"  />
};
const onFinishFailed = (errorInfo) => {
console.log('Failed:', errorInfo);
};
return (<>
  <>
   <ul className="d-flex" style={{margin:"15px"}}>
  <li>
    <Link to="/" style={{margin:"25px"}}>Home</Link>
  </li>
  <li>
    {/* <Link to="/nav" style={{margin:"25px"}}>Nav</Link> */}
  </li>
  <li>
    <Link to="/contact" style={{margin:"25px"}}>Contact</Link>
  </li>
  {/* <li>
    <Link to="/login" style={{margin:"25px"}}>Login</Link>
  </li> */}
</ul>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
 
  </>
</>)
};
export default Login;