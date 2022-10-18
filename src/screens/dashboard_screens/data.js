import axios from "axios";
import { useEffect } from "react";

function AllData() {
  // https://jsonplaceholder.typicode.com/posts

  let getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let postData = () => {
    let obj = {
      body: "abc",
      title: "ABC Title",
      userId: 3,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", obj)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>All Data</h1>
      <button onClick={postData}>Send Data</button>
    </>
  );
}
export default AllData;
