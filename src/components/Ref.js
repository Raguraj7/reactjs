const Ref = ({title,setTitle}) => {
    console.log(title);
    // const changeName=()=>{
    //    setTitle([{
    //     ...title,Username:{
    //         firstName:'testing',
    //         ...title.lastname
    //     }
    //    }])

    // }
    
    return (
        <>
        {/* <button className="m-2 p-3 bg-indigo-500 text-center" onClick={()=>setTitle([{
        ...title,Username:{...title.Username,
            firstName:'testing',
            lastname:'idfdklhfgkdf'
        }
       }])}>update</button>
       onClick={()=>setTitle(...title[{Username:{firstName:'testing',}}])}
       */}
       {/* <button className="m-2 p-3 bg-indigo-500 text-center" onClick={()=>setTitle([title[0].={userfirstName:'testing',lastName:'testing2'}])}>update</button> */}
        {title.map((user,i)=>(
            <div key={i}>
                <p> {user.Username.firstName}</p>
                <button className="bg-zinc-500 p-1 m-3" onClick={()=>setTitle([...title],title[i].Username.firstName='trichyyyyyy')}>Update</button>
                
            </div>
            
        ))}
        {JSON.stringify(title)}
        {console.log('************************',title)}
        
        </>
    );
}

export default Ref;