import { useActionState, useState } from "react"

function Updatevalue(){
    let [text,settext]=useState("asslam o alaikum")
    
    
    return(
<>
<h1>{text}</h1>

<button onClick={()=> settext ("walaikum asslam")}>textChange</button>
</>
    )
}

export default Updatevalue