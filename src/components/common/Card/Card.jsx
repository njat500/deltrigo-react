import "./card.css"

export const Card = (props) =>{
    return(
        <div className="producto">
        <h2>Titulo: {props.title}</h2>
        <h3>Precio: {props.price}</h3>
        </div>
    )
}