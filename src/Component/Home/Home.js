import React from "react";
import Keywords from "./Keywords";
import Rating from "./Rating";
import Recent from "./Recent";
import Reviews from "./Reviews";
import Sentiments from "./Sentiments";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, message, Button, Space } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainNav from "../Navbar";

function Home() {
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div>
      <Container fluid>
        <MainNav />
        <Row>
          <Col>
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
              style={{
                width: "250px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Form.Item name="appid" label="App ID">
                <Input placeholder="Enter app ID" />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Space>
              </Form.Item>
            </Form>
            {/* </Col>
          <Col> */}
            <h1>Home</h1>
            <Reviews />
            <Sentiments />
            <Rating />
            <Recent />
            <Keywords />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
