// import { useState } from "react";

// const Ref = ({title,link}) => {
//     const [s, setS] = useState('Hello')
//     const [s1, setS1] = useState(false)
//     const [array, setArray] = useState([{name:'testing',age:'50',city:'tirchy',address:{state:'TN',country:'INDIA'}}])
//     console.log(s.length);
//     const sd=()=>{
// setS('welcome')

//     }
//     const sd1=()=>{
//         // setS1(true)
//         setS1(!s1)
//     }
//     return (
//         <>
//         {/* <Ref data={...props}/> */}
//         {/* <button onClick={()=>console.log(props.link)}>
//             {props.title}
//         {</button> */}
//        <div>
//         value
//        {s}
//        </div>

//          {/* {s.length>0 ?title.map((t,i)=><div key={i}> {t}</div>):'notilte'} */}
//          {s1&&title.map((t,i)=><div key={i}> {t}</div>)}
//         <button onClick={sd} className=''>
//             button
//         </button>
//         <button onClick={sd1} className=''>
//             buttonSrdtds
//         </button>
//         {/* {array.map((arr,i)=>{
//            return <div>
// {console.log(arr.name)}
// {arr.name}
//             </div>
// })} */}
//         {array.map((f,i)=>(
//             <div key={i}>
// {console.log(f.name)}
// {f.name}
//             </div>
//         ))}
       
//         {/* <a href={link} target={"_blank"} className='no-underline bg-gray-300 rounded-full text-sm hover:bg-gray-500 text-red-700 p-2 m-10  text-center border border-yellow-500'>{title}</a> */}
//         </>
//     );
// }

// export default Ref;