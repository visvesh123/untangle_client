import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/review_sentiments/598450";

function Games() {
  const [games, setGames] = useState();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setGames(response.data.Top_games);
    });
  }, []);

  console.log("Games  " + games);

  return (
    <div>
      <h2>Top Games {games}</h2>
    </div>
  );
}

export default Games;
