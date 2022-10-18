import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate()
  const Data = [
    {
      id: 1,
      title: "Jamal karim",
      key: 123
    },
    {
      id: 2,
      title: "Salman karim",
      key: 456
    },
    {
      id: 3,
      title: "Shehroz karim",
      key: 789
    },
    {
      id: 4,
      title: "Sikander karim",
      key: 112
    },
  ]
  // useEffect(() => {
  //   let mapData = Data.map((e, i) => {
  //     {e}
  //   })
  //   mapData;

  // }, [])

  let routeData = () => {
    navigate('contact', {
      state: Data[0]
    })
  }
  
  let dashboard = () => {
    navigate('dashboard', {
      state: Data[0]
    })
  }

  return (
    <>
      <h1>Home</h1>
      <button onClick={routeData}>Move to Contact with data</button>
      <button onClick={dashboard}>Go to Dashboard</button>
    </>
  );
}
export default Home;
