import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import type { Categoria } from "../types/Categoria"
import Productos from "../components/Productos"
import { API_URL } from "../utils"


const Tienda = () => {

    const [listaCategorias, setListaCategorias] = useState<Categoria[]>([])
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<Categoria | null>(null)

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = async() => {
        
        /*
        fetch("https://servicios.campus.pe/categorias.php")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setListaCategorias(data)

        })
        */    

        const response = await fetch(API_URL + "categorias.php")
        const data: Categoria[] = await response.json()
        console.log(data)
        setListaCategorias(data)
        setCategoriaSeleccionada(data[0])

    }

    const seleccionarCategoria = (itemSeleccionado: Categoria) => {
        console.log(itemSeleccionado)
        setCategoriaSeleccionada(itemSeleccionado)
    }        


  return (
   <>
            <PageHeader pageTitle="Tienda" pageSubtitle="Los mejores productos a tu alcance"/>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="flex -mx-3">
                        <div className="w-full md:w-1/4 px-3">
                            <h3>Categorias</h3>
                            <ul>
                                {listaCategorias.map(item =>
                                <li className={"border-1 border-gray-300 px-4 py-2" 
                                    + (item.idcategoria === categoriaSeleccionada?.idcategoria ? " bg-violet-100" : "")} 
                                    title={item.descripcion}
                                    onClick={() => seleccionarCategoria(item)}
                                    key={item.idcategoria}>
                                    {item.nombre} ({item.total})</li>
                                )}
                            </ul>
                        </div>
                        <div className="w-full md:w-3/4 px-3">
                            <h2>{categoriaSeleccionada?.nombre}</h2>
                            <p>Hay {categoriaSeleccionada?.total} productos disponibles.</p>
                            <Productos codigoCategoria={categoriaSeleccionada?.idcategoria || 0} />

                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}

export default Tienda

