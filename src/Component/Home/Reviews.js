import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Statistic, Row, Col } from "antd";
import { LikeOutlined } from "@ant-design/icons";
import Rating from "./Rating";

const baseURL = "https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/no_of_reviews/597970";

function Reviews() {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setReviews(response.data.no_of_reviews);
    });
  }, []);

  return (
    <div>
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Reviews"
            value={reviews}
            prefix={<LikeOutlined />}
          />
        </Col>
        <Col span={12}>
          <Statistic title="App ID" value="597970" />
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
