import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";



function Rating(props) {
  const [rating, setRating] = useState();
  useEffect(() => {
    const baseURL = `https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/avg_rating/${props.appid}`;
    axios.get(baseURL).then((response) => {
      setRating(response.data.Average_Rating);
    });
  }, [props.appid]);

  console.log("Avg Rating  " + rating);

  // var rate = Math.round(rating);

  return (
    <div className="site-card-wrapper">
      <Card style={{ width: 300 }}>
        <p>Avg Rating</p>
        <h2>{rating}</h2>
      </Card>
    </div>
  );
}

export default Rating;
