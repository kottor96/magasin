import Stock from "./article";
import Panier from "./panier";

export default function Boutique(props) {
    
    return(
        <main>
            <section id="stock">
                {props.Stock.map(element=>
                    <Stock Stock = {element} key={element.nom} Ajouter={props.Ajouter}/>
                )}
            </section>
            {props.mondal?(
                <section id="mondalPanier" onClick={props.AfficherMasq}>
                    <div onClick={(e)=>e.stopPropagation()}>
                        {props.Panier.length > 0 ? (
                            props.Panier.map(el => (
                            <Panier el={el} key={el.nom} Suprimer={props.Suprimer}/>
                            ))
                        ) : (
                            <p>Le panier est vide.</p>
                        )}
                    </div>
                </section>
                )
                :null
            }
            <div id="btnPanier">
                <button onClick={props.AfficherMasq}>Panier</button>
            </div>
        </main>
    )
}