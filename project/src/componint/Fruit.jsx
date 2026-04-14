

const Fruit = (props)=>{

    return(
        <>
        <div className="fruit">
        <div className="fruit-card">
            <img src={props.img} alt="" />
            <h1>{props.h1}</h1>
            <h3>Boosts Energy</h3>
            <p>
{props.p}</p>
        </div>
        </div>
        
        </>
    )
}

export default Fruit