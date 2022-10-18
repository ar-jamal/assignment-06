import { useLocation, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  const location = useLocation();
  const routedData = location.state && location.state.title
  const toHome= () => {
    navigate("/")
  }
  // console.log(location.state)
    return (
      <>
        <h1>About {routedData? location.state.title : '"no data routed from contacts page"'}</h1>
        <button onClick={()=>{
          navigate('/contact',{
            state:{
              id:1,
              name:'abc'
            }
          })
        }}>Move</button>
        <button onClick={toHome}>Go to Home</button>
      </>
    );
  }
  export default About;
  