

const products = [
  { id: 1, name: "Samsung S9+",      price: 14000, category: "Smart Phone",       rating: 4.8, inStock: true  },
  { id: 2, name: "HP Laptop",        price: 40000, category: "Smart Computer",     rating: 4.5, inStock: true  },
  { id: 3, name: "iPad Tablet",      price: 70000, category: "Big Smart Tablet",   rating: 4.9, inStock: true  },
  { id: 4, name: "iPhone 15 Pro Max",price: 14000, category: "iPhone",             rating: 4.6, inStock: false },
  { id: 5, name: "Motor Bike",       price: 14000, category: "Motor Bike",         rating: 3.9, inStock: true  },
];
function Product(){
  return(
    <div>
      <h1>product list</h1>
      {products.map((Product)=>(
        <div key={products}> 
          <li>name ={Product.name} price ={Product.price} category ={Product.category} raking={Product.rating}</li>
        </div>
      ))}
    </div>
  )}
export default Product;