import { useEffect, useState } from "react";
import type { Producto } from "../types/Producto";
import './Productos.css';
import { Link } from "react-router-dom";

interface ProductosProps {
    codigoCategoria: number;
}


const Productos = (props: ProductosProps) => {
    console.log(props)

     const [listaProductos, setListaProductos] = useState<Producto[]>([])

    useEffect(() => {
        leerServicio(props.codigoCategoria)
    }, [props.codigoCategoria])

    const leerServicio = async(codCategoria: number) => {
        /*
        fetch("https://servicios.campus.pe/productos.php?idcategoria=" + codCategoria)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setListaProductos(data)

        })
            */

        const response = await fetch("https://servicios.campus.pe/productos.php?idcategoria=" + codCategoria)
        const data: Producto[] = await response.json()
        console.log(data)
        setListaProductos(data)
    }

  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
            {listaProductos.map(item =>{
                const precioRebajado = item.preciorebajado
                const precio = item.precio
                return(
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border-1 border-gray-200 text-center relative card-producto">
                
                <Link to={"/productodetalles/" + item.idproducto}>
                    <img src={"https://servicios.campus.pe/" + (item.imagenchica ? item.imagenchica : "imagenes/nofoto.jpg")}                     
                    alt="" className="w-full h-48 object-cover px-8 pt-8 transition-transform duration-500 hover:scale-115"/>
                </Link>
                
                <i className="fa-regular fa-eye bg-gray-200 absolute p-4 !inline-table rounded-full icono-vista-rapida"
                    title="Vista rapida"></i>
                {precioRebajado !== 0 
                    ? <div className="absolute top-0 right-0 bg-gray-800 text-white px-1 py-2">-{Math.round((1-precioRebajado/precio)*100)+"%"}</div>: ""}
                
                    <div className="p-3">
                        <p className="mb-2 text-gray-800">{item.nombre}</p>
                        <p className="text-gray-600">
                            S/ {item.preciorebajado === 0 ? item.precio.toFixed(2): item.preciorebajado.toFixed(2)}
                            <span className="ml-1 line-through text-red-600">
                                {precioRebajado === 0 ? "" : "S/ " + precio.toFixed(2)}
                            </span> <i className="fa-solid fa-basket-shopping cursor-pointer hover:text-red-600"
                            title="Agregar al carrito"></i>
                        </p>
                    </div>
                </div>
                )
            }
            )}
            </div>
    </>
  )
}

export default Productos