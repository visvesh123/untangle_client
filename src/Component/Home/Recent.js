import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://52.66.244.63:8000/recent_reviews/598450";

function Recent() {
  const [recent, setRecent] = useState();
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRecent(response.data.Recent_reviws);
    });
  }, []);

  console.log(recent);

  if (!recent) return null;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col" colspan="2">
              Time of review
            </th>
            <th scope="col"> User ID</th>
            <th scope="col"> Review</th>
          </tr>
        </thead>
        <tbody>
          {recent.map((item, index) => (
            <tr>
              <td class="item-qty">
                {new Date(item[11] * 1000).toLocaleDateString("en-US")}
              </td>
              <td>
                <strong class="book-title">{item[0]}</strong>
              </td>
              <td class="item-price">{item[10]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Recent;
