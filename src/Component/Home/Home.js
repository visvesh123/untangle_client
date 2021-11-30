import React , {useState , useEffect} from "react";
import Keywords from "./Keywords";
import Rating from "./Rating";
import Recent from "./Recent";
import Reviews from "./Reviews";
import Sentiments from "./Sentiments";
import Playtime from "./Playtime";
import TopGames from './TopGames'
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Input, message, Button, Space } from "antd";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainNav from "../Navbar";
import axios from "axios";

function Home() {
  const [form] = Form.useForm();

  const [Appid , setAppId] = useState('')
  const [reviews, setReviews] = useState();

  const baseURL = `https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/no_of_reviews/${Appid}`;
  useEffect(() => {
    console.log("hello")
    axios.get(baseURL).then((response) => {
      setReviews(response.data.no_of_reviews);
    });
  }, [Appid]);


  const onFinish = (values) => {
    message.success("Searching");
    console.log(values)
    setAppId(values.appid)
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div>
      <Container fluid>
        <MainNav />
        <h1>Review Analysis Engine</h1>
        <TopGames/>
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
            {Appid}
            <Reviews appid = {Appid}  review = {reviews}/>
            <Sentiments appid = {Appid} />
            <Rating appid = {Appid} />
            <Playtime appid = {Appid}/>
            <Keywords appid = {Appid} />
            <Recent appid = {Appid} />
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
