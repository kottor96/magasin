import { useState } from 'react'
import Stock from '../stock.json'
import Boutique from './components/boutique'


export default function App() {
  const [stock,setStock] = useState(Stock)
  const [panier,setPanier] = useState([])
  function Ajouter(props) {
    const trouver = panier.find(el => el.nom === props.nom)
    
    
    setStock(
            
      stock.map(el =>
        el.nom === props.nom && el.stock > 0
        ? { ...el, stock: el.stock - 1 }
        : el
      )
    )

    trouver
      ? setPanier(
          panier.map(el =>
            el.nom === props.nom
              ? { ...el, quantite: el.quantite + 1 }
              : el
          )
        )
      : setPanier([...panier, { ...props, quantite: 1 }])
  }
  
  return (
    <>
      <Boutique Stock={stock} Ajouter={Ajouter} Panier={panier}/>
    </>
  )
}
