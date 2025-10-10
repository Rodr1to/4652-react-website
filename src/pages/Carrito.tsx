import { useEffect, useState } from "react"

import type { ItemCarrito } from "../types/ItemCarrito"
import PageHeader from "../components/PageHeader"

const Carrito = () => {

    const [listaItems, setListaItems] = useState<ItemCarrito[]>([])

        useEffect(() => {
            leerServicio()
        }, [])

        const leerServicio = () => {
            const datosCarrito = JSON.parse(sessionStorage.getItem("carritocompras") || "[]")
            setListaItems(datosCarrito)

        }
        
        const vaciarCarrito = () => {
            sessionStorage.removeItem("carritocompras")
            setListaItems([])
        }

    return (
        <>
            <PageHeader pageTitle="Carrito de compras" pageSubtitle=""/>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="flex -mx-3">
                        <div className="w-full md:w-3/4 px-3">
                        <table className='tabla-reporte'>
                        <thead>
                            <tr>
                                <th className="!text-center">Codigo</th>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaItems.map(item =>
                            <tr>
                                <td className="text-center">{item.idproducto}</td>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td>{item.cantidad}</td>
                                <td>{item.precio * item.cantidad}</td>
                                <td></td>
                            </tr>
                            )}
                        </tbody>
                        </table>
                         <button className='boton-link mt-3 cursor-pointer' onClick={() => vaciarCarrito()

                         }>
                            Vaciar carrito
                        </button>
                        </div>
                        <div className="w-full md:w-1/4 px-3">
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carrito