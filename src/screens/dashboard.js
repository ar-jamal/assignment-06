import { Route, Routes } from "react-router-dom";
import ResponsiveDrawer from "../components/drawer";
import Feedback from "./dashboard_screens/feedback";
import Message from "./dashboard_screens/messages";
import Notification from "./dashboard_screens/notification";
import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [data, setData] = useState([])
  const apiAdress = 'https://newsapi.org/v2/everything?q=Apple&from=2022-10-17&sortBy=popularity&apiKey=518e7077e66043ee905ad2319d7d3422';

  // const consoleFunc= () => {
  //     return console.log(axios.get(apiAdress).then(res => res.data).catch(err => console.log(err))
  // }

  const fetchApi = () => {
    axios
      .get(apiAdress)
      .then(res => res.data)
      .then(({ articles }) => {
        console.log(articles)
        // let fetchedData = success.data.articles
        const newsData = []
        for (const key in articles.slice(0, 20)) {
          newsData.push({
            id: key,
            image: articles[key].urlToImage,
            url: articles[key].url,
            author: articles[key].author,
            title: articles[key].title,
            content: articles[key].content,
            description: articles[key].description,
            publishedAt: articles[key].publishedAt
          });
        }
        // return newsData;
        setData(newsData)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchApi()
  }, [])
  console.log(data)
  return (
    <>
      <ResponsiveDrawer data={data} />

    </>
  );
}
export default Dashboard;




