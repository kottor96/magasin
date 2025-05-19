import { useState } from 'react'
import Stock from '../stock.json'
import Boutique from './components/boutique'


export default function App() {
  const [stock,setStock] = useState(Stock)
  console.log(stock);
  
  return (
    <>
      <Boutique Stock={stock}/>
    </>
  )
}
