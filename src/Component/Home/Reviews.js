import React, { useEffect, useState  } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Statistic, Row, Col } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import Rating from "./Rating";



function Reviews(props) {
  const [reviews, setReviews] = useState();
  const [id , setId] = useState(props.appid)
  // const baseURL = `https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/no_of_reviews/${id}`;
  // useEffect(() => {
  //   console.log("hello")
  //   axios.get(baseURL).then((response) => {
  //     setReviews(response.data.no_of_reviews);
  //   });
  // }, [id]);

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Reviews"
            value={props.review}
            prefix={<LikeOutlined />}
          />
        </Col>
        <Col span={12}>
          <Statistic title="App ID" value={props.appid} />
        </Col>
        <Col span={12}>
          {/* <Statistic title="Rating">
            <Rating />
          </Statistic> */}
        </Col>
      </Row>
    </div>
  );
}

export default Reviews;
