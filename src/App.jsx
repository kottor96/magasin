import { useState } from 'react'
import Stock from '../stock.json'
import Boutique from './components/boutique'


export default function App() {
  const [stock,setStock] = useState(Stock)
  const [panier,setPanier] = useState([])
  const [mondal,setMondal] = useState (true)

  
  function Suprimer(props) {
    const newPanier = panier.map(el=> 
      el.nom === props.nom && el.quantite > 1
        ?{...el,quantite: el.quantite-1}
        : el.nom === props.nom && el.quantite <= 1
          ? null
          : el
    ).filter(el=>el != null)
    setPanier(newPanier)

    setStock(
      stock.map(el =>
        el.nom === props.nom
          ? { ...el, stock: el.stock + 1 }
          : el
      )
    )
  }
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
      <Boutique Stock={stock} Ajouter={Ajouter} Suprimer={Suprimer} Panier={panier}/>
    </>
  )
}
