import { Component, useState } from 'react'
import Student from './componint/Student'
import Product from './componint/Product'
import LiveInput from './componint/LiveInput'
import './App.css'
import Updatevalue from './componint/Updatevalue'
import ShowMSG from './componint/ShowMSG'
import Notifiction from './componint/Notifiction'
import LoginForm from './componint/LoginForm'
import Fruit from './componint/Fruit'
 
function App(){
  return( 
  <>
  <h1>asslam o alaikum</h1>
  <p>me pakistan me raheta hon
  </p>
<Student/>
<Product/>
<Updatevalue/>
<hr />
<LiveInput/>

<ShowMSG  />
<Notifiction unreadcount ={2}/>
<LoginForm/>
<Fruit h1 = "bannana" p="Bananas contain natural sugars (glucose, fructose)
They provide quick energy
👉 That’s why athletes often eat them" img ="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0c3xlbnwwfHwwfHx8MA%3D%3D"/>
<Fruit h3 = "Good for Overall Health" p=" 
Apples are rich in vitamins and antioxidants
👉 Help keep your body healthy and strong" h1 = "apple" img ="https://plus.unsplash.com/premium_photo-1724249990837-f6dfcb7f3eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGV8ZW58MHx8MHx8fDA%3D"/>
<Fruit h3 = "Rich in Nutrients" p="
Mangoes contain vitamins A, C, and E
👉 Help keep your body healthy and boost immunity" h1 = "mango" img ="https://plus.unsplash.com/premium_photo-1724255863045-2ad716767715?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuZ298ZW58MHx8MHx8fDA%3D"/>



</>
)
}
export default App
