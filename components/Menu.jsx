export default function Menu({item, addItem}){

    const {name, price} = item

    return(
        <>
            <button className="container"
            onClick={() => addItem(item)}>
                <h3>{name}</h3>
                <h3>{price}€</h3>
            </button>
        </>
    )
}