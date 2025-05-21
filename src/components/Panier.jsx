
export default function Panier({el,Suprimer}) {
    
    return(
        <div className="card cardPanier">
            <h5>{el.nom}</h5>
            <p>prix : {el.prix} - Quantiter {el.quantite}</p>
            <p>prix total = {(el.prix*el.quantite).toFixed(2)}</p>
            <a className="btn btn-warning" onClick={()=>Suprimer(el)}>Suprimer</a>
        </div>
    )
}