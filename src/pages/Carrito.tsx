import { useEffect, useState } from "react"
import type { ItemCarrito } from "../types/ItemCarrito"
import PageHeader from "../components/PageHeader"

const Carrito = () => {

    const [listaItems, setListaItems] = useState<ItemCarrito[]>([])

    const [total, setTotal] = useState(0)

    useEffect(() => {
        leerServicio()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const leerServicio = () => {
        const datosCarrito = JSON.parse(sessionStorage.getItem("carritocompras") || "[]")
        setListaItems(datosCarrito)
        calcularTotal(datosCarrito)
    }

    const actualizarCantidad = (idproducto: number, nuevaCantidad: number) => {
        console.log(nuevaCantidad)
        if (nuevaCantidad<1 || isNaN(nuevaCantidad) ){
            return
        }
        
        const carritoActualizado = listaItems.map(item => {
            if(item.idproducto === idproducto){
                return {...item, cantidad: nuevaCantidad}
            }
            return item
        })
        setListaItems(carritoActualizado)
        sessionStorage.setItem("carritocompras", JSON.stringify(carritoActualizado))
        calcularTotal(carritoActualizado)
    }    

    const dibujarTabla = () => {
        return (
            <table className='tabla-reporte'>
                <thead>
                    <tr>
                        <th className="!text-center">Codigo</th>
                        <th>Producto</th>
                        <th className="!text-end">Precio</th>
                        <th className="!text-end">Cantidad</th>
                        <th className="!text-end">Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {listaItems.map(item =>
                        <tr key={item.idproducto}>
                            <td className="text-center">{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="!text-end">{item.precio.toFixed(2)}</td>
                            <td className="!text-end">
                                <input type="number" min="1"
                                    value={item.cantidad}
                                    className="w-16 text-end mx-2 border-gray-300 hover:bg-gray-300 rounded"
                                    onChange={(event) => actualizarCantidad(item.idproducto, parseInt(event.target.value))}
                                />
                            </td>
                            <td className="!text-end">{(item.precio * item.cantidad).toFixed(2)}</td>
                            <td><i className="fa-solid fa-xmark cursor-pointer hover:text-red-400 transition-transform 
                            duration-300 ease-in-out hover:rotate-90" title="Eliminar"
                            onClick={() => eliminarItem(item)}></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const eliminarItem = (item: ItemCarrito) => {
        const carritoMenos = listaItems.filter(i => i.idproducto !== item.idproducto)
        setListaItems(carritoMenos)
        sessionStorage.setItem("carritocompras", JSON.stringify(carritoMenos))
        calcularTotal(carritoMenos)
    }

    const vaciarCarrito = () => {
        sessionStorage.removeItem("carritocompras")
        setListaItems([])
        setTotal(0)
    }

    const calcularTotal = (datosCarrito: ItemCarrito[]) => {
        const sumTotal = datosCarrito.reduce((acumulador: number, item: ItemCarrito) => acumulador + (item.precio * item.cantidad), 0)
        setTotal(sumTotal)
    }


    return (
        <>
            <PageHeader pageTitle="Carrito de compras" pageSubtitle="" />

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="flex -mx-3">
                        <div className="w-full md:w-3/4 px-3">
                            {dibujarTabla()}
                            <button className='boton-link mt-3 cursor-pointer' onClick={() => vaciarCarrito()

                            }>
                                Vaciar carrito
                            </button>
                        </div>
                        <div className="w-full md:w-1/4 p-5 bg-gray-200">
                            <h3>TOTAL DEL CARRITO</h3>
                            <p>S/ {total.toFixed(2)}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Carrito