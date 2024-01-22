import ListaImagenes from "./ListaImagenes"

const ListaImagenesPage = () => {
    const listaImagenes = [
        {
            url : "https://www.ulima.edu.pe/sites/default/files/styles/600x300/public/news/img/escudo_600x300-01_1.jpg",
            titulo : "Logo 1"
        },
        {
            url : "https://upload.wikimedia.org/wikipedia/commons/0/0e/ULIMA_logo.png",
            titulo : "Logo 2"
        },
        {
            url : "https://www.ulima.edu.pe/sites/all/themes/ulima2/logo_nuevo.png",
            titulo : "Logo 1000"
        },
    ]

    return <div>
        <h1>Listado de Imagenes</h1>
        <ListaImagenes 
            listaImagenes={ listaImagenes }/>
    </div>
}

export default ListaImagenesPage