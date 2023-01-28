import { useState } from "react";
import Flexbox from "./Flexbox";
import Ref from "./Ref";

const Home = ({ a = 20 }) => {
  const [title, setTitle] = useState([
    {
      Username: {
        firstName: "sundar",
        lastName: "kumar",
      },
      age: 20,
      hobby: "reading",
    },
    {
      Username: {
        firstName: "ramesh",
        lastName: "kumar",
      },
      age: 20,
      hobby: "reading",
    },
    {
      Username: {
        firstName: "kumar",
        lastName: "kumar",
      },
      age: 20,
      hobby: "reading",
    },
    {
      Username: {
        firstName: "ranjit",
        lastName: "kumar",
      },
      age: 20,
      hobby: "reading",
    },
    
   
  ]);
 
  return (
    <>

      <Ref title={title} setTitle={setTitle}/>
      <p className="p-5">
        {/* {title.map((data,i)=>(
          <div>
            {data.Username.firstName}-  <button className="m-3 p-3 bg-indigo-500" onClick={()=>onChange(i)}>
          update
        </button>
          </div>
        ))} */}
       
      </p>
      {/* <Flexbox title={title}/> */}
    </>
  );
};

export default Home;
