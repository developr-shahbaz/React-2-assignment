import { useState } from "react"

function ShowMSG(){

const[msg , setmsg] = useState("")
    return(
        <>
        <button onClick={()=> setmsg("message show hone wala hai")}>showmsg</button>
        <p>{msg}</p>
        </>
    )


}

export default ShowMSG