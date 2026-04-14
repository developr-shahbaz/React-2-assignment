import { useState } from "react";

function LoginForm(){
    const[name , setname]=useState("")
    const[pass , setpass]=useState("")

    const handleform =() =>{
        if(name === "shahbaz" && pass ==="12345"){
            alert("welecom to saylani")
        } else{
            alert("possword chek karo")
        }

    }
       return(

        <>
        <input type="text" placeholder="name " value={name} onChange={(e)=> setname(e.target.value)}/>
        <input type="text"placeholder="password" value={pass} onChange={(e)=> setpass(e.target.value)}/>
        <button onClick={handleform}>login</button>
        </>
    )

}



export default LoginForm