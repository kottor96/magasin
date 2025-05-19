
export default function Panier({Stock}) {
    return(
        <div>
            <h5>{Stock.nom}</h5>
            <p>prix : {Stock.prix} - Quantiter {Stock.quantiter}</p>
            <p></p>
        </div>
    )
}