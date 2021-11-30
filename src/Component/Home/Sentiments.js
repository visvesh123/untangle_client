import React, { useEffect, useState } from "react";
import axios from "axios";
import "antd/dist/antd.css";
// import { Statistic, Row, Col } from "antd";
// import { LikeOutlined } from "@ant-design/icons";
import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

const baseURL = "https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/review_sentiments/598450";

function Sentiments() {
  const [sentiments, setSentiments] = useState();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSentiments(response.data.sentiment);
    });
  }, []);

  console.log(sentiments);
  // var p = sentiments[0];
  // var n = sentiments[1];

  return (
    <div className="site-statistic-demo-card">
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Statistic
              title="Positive"
              value={sentiments}
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
              value={sentiments}
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
