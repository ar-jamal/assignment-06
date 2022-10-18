import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const location = useLocation();
  const routedData= location.state && location.state.title

  let toAbout = () => {
    navigate("/about", {state: routedData? location.state : "no data routed from home page"} );
  };
  console.log(location.state);
  
  let toHome= () => {
    navigate("/")
  }

  return (
    <>
      <h1>
        Contact with{" "}
        {routedData ? location.state.title : "--"}
      </h1>
      <button onClick={toAbout}>Go to About with data</button>
      <button onClick={toHome}>Go to Home</button>
    </>
  );
}
export default Contact;
