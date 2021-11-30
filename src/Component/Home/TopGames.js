import React , {useState , useEffect} from 'react'
import axios from 'axios'
import Slider from "react-slick";
import { Timeline } from 'antd';

const TopGames = () => {
    const [top , setTop] = useState()
    const baseURL = `https://cors-everywhere.herokuapp.com/http://52.66.244.63:8000/top_games`;
  useEffect(() => {

    axios.get(baseURL).then((response) => {

     console.log(response.data)
     setTop(response.data.Top_games)

    });

  }, []);
 if(!top)return null;

    return (
        <div>
            <hr/>
            <h1> Top Games </h1>
            <Timeline>
            {top.map(item => {

                return(
                    <Timeline.Item>{item[0]}</Timeline.Item>
                )
            })}
           
   
    
  </Timeline>
            <hr/>
           
        </div>
    )
}

export default TopGames
