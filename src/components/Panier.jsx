
export default function Panier({el}) {
    console.log(el);
    
    return(
        <div>
            <h5>{el.nom}</h5>
            <p>prix : {el.prix} - Quantiter {el.quantite}</p>
            <p>prix total = {el.prix*el.quantite}</p>
            <a className="btn btn-warning">Suprimer</a>
        </div>
    )
}