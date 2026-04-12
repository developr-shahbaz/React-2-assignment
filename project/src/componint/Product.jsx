const product =[
    {id : one , name : "samsung s9 +" ,price: 14000, category :"smart phone", raking :  10, inShort:true},
    {id : tow , name : "HP laptop +" ,price: 40000, category :"smart computer", raking :  10.9, inShort:true},
    {id : three , name : "tablet" ,price: 70000,category :"big smart touch phone", raking :  9.99, inShort:true},
    {id : four , name : "iphone +" ,price: 14000,category :"iphone 15 max pro", raking :  5.99, inShort:true},
    {id : five , name : "bike" ,price: 14000,category :"moter bike", raking :  7.99, inShort:true}
]



function Product({product}){

    return(
        <>
        <div className="card">
            <div className="cd-pro">
                <h1>{product.name}</h1>
                <span className="category">{product.category}</span>
            </div>


            
            <div className="card-body">
<p className="price">Rs.{product.price.toLocaleString()}</p>
<p className="raking">⭐ { product.raking}/5</p>

<span className={product.inShort?"in-stock":"out of indhort"}>{product.inShort?"in stock" :"out of stock"}</span>
            </div>
        </div>
        </>
    )
}

export default Product