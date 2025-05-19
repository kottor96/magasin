export default function Stock({Stock}){
    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src={Stock.image} className="card-img-top" alt={Stock.descritpion} />
            <div className="card-body">
                <h5 className="card-title">{Stock.nom}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Quantiter {Stock.stock}</li>
                    <li className="list-group-item">Prix {Stock.prix}</li>
                </ul>
                <a className="btn btn-primary">
                Ajouter au panier
                </a>
            </div>
            </div>

    )
}