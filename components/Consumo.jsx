export default function Consumo({product, deleteItem, sumarConsumo ,restarConsumo}){

    return(
        <>
                <tr className="tabla">
                    <th>{product.name}</th>
                    <th>{product.price}€</th>
                    <th>{product.quantity}</th>
                    <th className="thClass">
<img className="button" onClick={() => sumarConsumo(product.id)} src="https://img.icons8.com/?size=100&id=xBu1fTdF24BF&format=png&color=000000" alt="" />
<img className="button" onClick={() => restarConsumo(product.id)} src="https://img.icons8.com/?size=100&id=gzeZVqbrQKDg&format=png&color=000000" alt="" />
<img className="button" onClick={() => deleteItem(product.id)} src="https://img.icons8.com/?size=100&id=Gr9Hk0UxLDFn&format=png&color=000000" alt="" />

                    </th>
                </tr>

        </>
    )
}