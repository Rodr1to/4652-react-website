import { useParams } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { useEffect, useState } from "react"
import type { Producto } from "../types/Producto"
import "./ProductoDetalles.css"

const ProductoDetalles = () => {
    const params = useParams()
    console.log(params) 

    const [productoSeleccionado, setProductoSeleccionado] = useState<Producto>()

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = async() => {
        const response = await fetch("https://servicios.campus.pe/productos.php?idproducto=" + params.idproducto)
        const data: Producto[] = await response.json()
        console.log(data)
        setProductoSeleccionado(data[0])
    }
    
    const precioRebajado = productoSeleccionado?.preciorebajado
 


    return (
        <>
            <PageHeader pageTitle={productoSeleccionado?.nombre || ""} pageSubtitle=""/>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="flex -mx-3">
                     <div className="w-full md:w-1/3 px-3">
                        <img src={"https://servicios.campus.pe/" + (productoSeleccionado?.imagengrande ? productoSeleccionado.imagengrande : "imagenes/nofoto.jpg")}                     
                        alt="" className="w-full object-cover px-8 pt-8 transition-transform duration-500 hover:scale-115"/>
                    </div>
                    <div className="w-full md:w-2/3 px-3">
                        <table className="tabla-detalle-producto mb-4">
                            <tbody>
                            <tr>
                                <th>Precio</th>
                                <td> S/ {productoSeleccionado?.preciorebajado === 0 ? productoSeleccionado.precio.toFixed(2): productoSeleccionado?.preciorebajado.toFixed(2)}
                            <span className="ml-1 line-through text-red-600">
                                {precioRebajado === 0 ? "" : "S/ " + productoSeleccionado?.precio.toFixed(2)}
                            </span></td>
                            </tr>
                            <tr>
                                <th>Proveedor</th>
                                <td>{productoSeleccionado?.proveedor}</td>
                            </tr>
                            <tr>
                                <th>Categoria</th>
                                <td>{productoSeleccionado?.categoria}</td>
                            </tr>
                                                        <tr>
                                <th>Stock</th>
                                <td>{productoSeleccionado?.unidadesenexistencia == 0 ? "No hay existencias.": productoSeleccionado?.unidadesenexistencia}</td>
                            </tr>
                            <tr>
                                <th>Detalle</th>
                                <td>{productoSeleccionado?.detalle}</td>
                            </tr>
                            <tr>
                                <th>Pais</th>
                                <td>{productoSeleccionado?.pais}</td>
                            </tr>
                                <tr>
                                <th>Atencion al cliente</th>
                                <td>{productoSeleccionado?.telefono}</td>
                            </tr>
                            <tr>
                                <th>Calificacion</th>
                                <td>{productoSeleccionado?.promedioestrellas} ({productoSeleccionado?.totalcalificaciones} calificaciones)</td>
                            </tr>
                            </tbody>
                    </table>
                    <h3>Descripcion</h3>
                    <div dangerouslySetInnerHTML={{__html: productoSeleccionado?.descripcion || "" }}></div>
                </div>
                </div>
                </div>
            </section>
        </>
    )
}

export default ProductoDetalles