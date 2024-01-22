import { useState } from "react"


const Imagen = (props) => {
    // Variable de estado
    const [color, setColor] = useState("#FFFFFF")

    const estiloCard = {
        width : "300px",
        marginBottom : "20px",
        backgroundColor : color
    }

    const cardOnClick = () => {
        // Modifique el color del card
        if (color == "#FFFFFF") setColor("#FF10FF")
        else setColor("#FFFFFF") 
        // Modifica la variable de estado (regenera componente)
    }

    return <div 
                className="card" 
                style={ estiloCard }
                onClick={ cardOnClick }>
        <img 
            src={ props.url } className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">
                { props.titulo }
            </h5>
        </div>
    </div>
}

export default Imagen