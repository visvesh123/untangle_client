import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import "./Table.css";


function Keywords(props) {
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {

const baseURL = `https://cors-everywhere.herokuapp.com/http://3.110.113.63:5000/trending_keywords/${props.appid}`;
    axios.get(baseURL).then((response) => {
      setKeywords(response.data.Trending_keywords);
    });
  }, [props.appid]);

  console.log(keywords);

  const columns = [
    {
      title: "Keyword",
      dataIndex: "Keywords",

      //   onFilter: (value, record) => record.name.indexOf(value) === 0,
      //   sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0,
    },
  ];

  // const a = keywords[0];
  // const b = keywords[0][1];
  // console.log(a);

  const data = [
    {
      key: "1",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col" colspan="2">
              Key Words
            </th>
            <th scope="col">Score of prominance</th>
          </tr>
        </thead>
        <tbody>
          {keywords.map((item, index) => (
            <tr>
              <td class="item-qty">{index}</td>
              <td>
                <strong class="book-title">{item[0]}</strong>
              </td>
              <td class="item-price">{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Keywords;
