import React, { useEffect, useState } from "react";

import axios from "axios";

import "antd/dist/antd.css";

import { Statistic, Row, Col  , Card} from "antd";

import { LikeOutlined } from "@ant-design/icons";

 



 

function Playtime(props) {

  const [playtime, setPlaytime] = useState();
  const baseURL = `https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/avg_playtime/${props.appid}`;
  useEffect(() => {

    axios.get(baseURL).then((response) => {

      setPlaytime(response.data.avg_playtime);

    });

  }, [props.appid]);

 

  console.log(playtime);

 

  return (

    <div>

<div className="site-card-wrapper">
      <Card style={{ width: 300 }}>
        <p>Avg Playtime</p>
        <h2>{playtime} hrs</h2>
      </Card>
    </div>
    </div>

  );

}

 

export default Playtime;