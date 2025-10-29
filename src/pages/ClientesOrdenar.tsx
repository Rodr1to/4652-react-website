import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"
import type { Cliente } from "../types/Cliente"
import "./Clientes.css"

const ClientesOrdenar = () => {
    // Hook 
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])

    const [columna, setColumna] = useState("empresa")
    const [tipoOrden, setTipoOrden] = useState("ASC")
    const [ordenVisible, serOrdenVisibile] = useState(false)

    useEffect(() => {
        leerServicio()
    }, [columna, tipoOrden])

    const leerServicio = async () => {
        const ruta = `${API_URL}/clientes_ordenar.php?columna=${columna}&orden=${tipoOrden}`
        const response = await fetch(ruta)
        const data = await response.json()
        console.log(data)
        setListaClientes(data)
    }

    const dibujarTabla = () => {
        return (
            <table className='tabla-reporte'>
                <thead>
                    <tr>
                        <th className="!text-center">Codigo</th>
                        <th onClick={(event) => seleccionarColumna(event)} data-columna = "empresa" >Empresa <i className="fa-solid fa-caret-up"></i></th>
                        <th onClick={(event) => seleccionarColumna(event)} data-columna = "nombres">Contacto</th>
                        <th onClick={(event) => seleccionarColumna(event)} data-columna = "cargo">Cargo</th>
                        <th onClick={(event) => seleccionarColumna(event)} data-columna = "ciudad">Ciudad</th>
                        <th onClick={(event) => seleccionarColumna(event)} data-columna = "pais">Pais</th>
                    </tr>
                </thead>
                <tbody>
                    {listaClientes.map(item =>
                        <tr key={item.idcliente}>
                            <td className="text-center">{item.idcliente}</td>
                            <td>{item.empresa}</td>
                            <td>{item.nombres}</td>
                            <td>{item.cargo}</td>
                            <td>{item.ciudad}</td>
                            <td className="text-right">{item.pais}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    const seleccionarColumna = (event: React.MouseEvent<HTMLTableCellElement>) => {
        const columnaSeleccionada = event.currentTarget.dataset.columna?.toString() || ""
        console.log(columnaSeleccionada) 
        if(columnaSeleccionada === columna) {
            const orden = tipoOrden === "DESC" ? "ASC" : "DESC"
            setTipoOrden(orden)           
        }
        else {
            setTipoOrden("ASC")
        }
        setColumna(columnaSeleccionada)
    }

    return (
        <>
            <PageHeader pageTitle="Clientes" pageSubtitle="" />
            <section id="clientes" className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    {dibujarTabla()}
                </div>
            </section>
        </>
    )
}

export default ClientesOrdenar