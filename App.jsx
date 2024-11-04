import { useState, useEffect } from "react"
import { hola } from "./data/db.js"
import Menu from "./components/Menu"
import Consumo from "./components/Consumo.jsx"

export default function App() {

    const [db, setDb] = useState(hola)
    const [consumo, setConsumo] = useState([])
    

    function addItem(item){
        const nuevo = consumo.findIndex(product => product.id===item.id)

        if (nuevo >= 0){
            alert("¡Producto ya añadido!")
            
        } else {
            item.quantity = 1
            setConsumo([...consumo, item])
        }
    }

    function deleteItem(item){
        setConsumo(prevConsumo => prevConsumo.filter(newItem => newItem.id != item))
    }

    function sumarConsumo(id){

        const actualizarConsumo = consumo.map(pr => {
            if(pr.id === id){
                return {
                    ...pr,
                    quantity: pr.quantity +1
                }
            }
            return pr
        })
        setConsumo(actualizarConsumo)

    }

    function restarConsumo(id){

        const actualizarConsumo = consumo.map(pr => {
            if(pr.id === id){
                if(pr.quantity > 1){
                    return {
                        ...pr,
                        quantity: pr.quantity - 1
                    } 
                } 
            }
            return pr
        })
        setConsumo(actualizarConsumo)

    }

    const totalConsumo = consumo.reduce((total, producto) => total +(producto.quantity * producto.price), 0)
    
    return(
        <>
            <header>
                <h2>Facturación</h2>
            </header>

            <main className="seccionPrincipal">

                <div className="seccion">
                    <h1>Menu</h1>
                    {db.map(item => (
                        <Menu 
                            key={item.id}
                            item={item}
                            addItem={addItem}
                        />
                    ))}
                </div>
                <div className="seccion2">
                    <h1>Consumo</h1>

                    <table>
                        <tr className="tabla">
                            <th><h2>Producto</h2></th>
                            <th><h2>Precio</h2></th>
                            <th><h2>Cantidad</h2></th>
                            <th className="thClass"></th>
                            
                        </tr>
                        {consumo.length === 0 ? 
                        (<h2>No hay productos</h2>) : (
                            consumo.map(product => {
                                return(
                                    <Consumo 
                                        key={product}
                                        product={product}
                                        deleteItem={deleteItem}
                                        sumarConsumo={sumarConsumo}
                                        restarConsumo={restarConsumo}
                                    />
                                )
                            })
                        )    
                    } 
                    </table>
                    

                </div>

                <h2>Total Cuenta: {totalConsumo}€</h2>
                
                
            </main>
            
        </>
    )
}