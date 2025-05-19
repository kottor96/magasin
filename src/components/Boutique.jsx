import Stock from "./article";
import Panier from "./panier";

export default function Boutique(props) {

    return(
        <>
            <section id="stock">
                {props.Stock.map(element=>
                    <Stock Stock = {element} key={element.nom}/>
                )}
            </section>
            <section id="panier">
                <Panier {...props}/>
            </section>
        </>
    )
}