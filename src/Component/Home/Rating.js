import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Row } from "antd";

const baseURL = "http://52.66.244.63:8000/avg_rating/598450";

function Rating() {
  const [rating, setRating] = useState();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRating(response.data.Average_Rating);
    });
  }, []);

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
