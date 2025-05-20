import { useState } from 'react'
import Stock from '../stock.json'
import Boutique from './components/boutique'


export default function App() {
  const [stock,setStock] = useState(Stock)
  const [panier,setPanier] = useState([])
  function Ajouter(props) {
    const trouver = stock.find(el => el.nom === props)
    stock.map(uni=>{
      
    }
    )
    console.log(...stock);
    
    
    // trouver ? 
  }
  Ajouter('Pizza Margherita')
  return (
    <>
      <Boutique Stock={stock}/>
    </>
  )
}
