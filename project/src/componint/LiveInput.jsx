import { useState } from "react"

function LiveInput(){
    
    const [text,settext] = useState("")
    
    return(
        <>
        <input type="text" 
        value={text} onChange={(e)=> settext(e.target.value)}/>
        <h1>{text}</h1>
        </>
    )
}
export default LiveInput