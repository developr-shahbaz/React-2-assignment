import { Component, useState } from 'react'
import Student from './componint/Student'
import Product from './componint/Product'
import LiveInput from './componint/LiveInput'
import './App.css'
import Updatevalue from './componint/Updatevalue'
import ShowMSG from './componint/ShowMSG'
import Notifiction from './componint/Notifiction'
import LoginForm from './componint/LoginForm'
 
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



</>
)
}
export default App
