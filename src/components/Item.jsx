const Item = ({item}) => {
    return (
        <div className="card my-2">
            <img className="card-img-top" src={item.imagen} alt={item.nombre} />
            <div className="card-body">                   
                <p className="card-title text-center">{item.nombre}</p>
            </div>
        </div>
    )
}

export default Item;