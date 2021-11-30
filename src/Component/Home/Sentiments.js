import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
// import { Statistic, Row, Col } from "antd";
// import { LikeOutlined } from "@ant-design/icons";
import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";



function Sentiments(props) {
  const [sentiments, setSentiments] = useState();
  const baseURL = `https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/review_sentiments/${props.appid}`;
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSentiments(response.data.sentiment);
    });
  }, [props.appid]);

  console.log(sentiments);
  // var p = sentiments[0];
  // var n = sentiments[1];
if(!sentiments)return null;
  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Positive"
              value={sentiments[0]}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
              prefix={<ArrowUpOutlined />}
              //   suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <Statistic
              title="Negative"
              value={sentiments[1]}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              //   suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Sentiments;
