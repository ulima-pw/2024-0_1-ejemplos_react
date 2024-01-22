const Imagen = (props) => {
    const estiloCard = {
        width : "300px",
        marginBottom : "20px"
    }
    return <div className="card" style={ estiloCard }>
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