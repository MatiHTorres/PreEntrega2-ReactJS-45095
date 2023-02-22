const ItemDetail = ({ item }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-end">
                    <img src={item.imagen} width={200} alt={item.nombre} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1>{item.nombre}</h1>
                        <h5>$ {item.precio}</h5>
                        <p>{item.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;