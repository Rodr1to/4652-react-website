import { useEffect, useState } from "react";
import type { Producto } from "../types/Producto";

interface ProductosProps {
    codigoCategoria: number;
}


const Productos = (props: ProductosProps) => {
    console.log(props)

     const [listaProductos, setListaProductos] = useState<Producto[]>([])

    useEffect(() => {
        leerServicio(props.codigoCategoria)
    }, [props.codigoCategoria])

    const leerServicio = (codCategoria: number) => {
        fetch("https://servicios.campus.pe/productos.php?idcategoria=" + codCategoria)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setListaProductos(data)

        })
    }

  return (
    <>
    <h3>Productos</h3>
    </>
  )
}

export default Productos