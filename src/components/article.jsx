export default function Stock({Stock,Ajouter}){
    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src={Stock.image} className="card-img-top" alt={Stock.descritpion} />
            <div className="card-body">
                <h5 className="card-title">{Stock.nom}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Quantiter {Stock.stock}</li>
                    <li className="list-group-item">Prix {Stock.prix}</li>
                </ul>
                {Stock.stock>0
                ?<a className="btn btn-primary" onClick={()=>Ajouter(Stock)}>
                Ajouter au panier
                </a>
                : <a className="btn btn-danger disabled">Stock vide</a>
                }
                
            </div>
        </div>

    )
}