import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"
import type { Cliente } from "../types/Cliente"

const Clientes = () => {
    // Hoook 
    const [listaClientes, setListaClientes] = useState<Cliente[]>([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        fetch(API_URL + "clientes.php?filas_pagina=10&numero_pagina=2")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setListaClientes(data)

        })
    }

    const dibujarTabla = () => {
        return(
                    <table className='tabla-reporte'>
                        <thead>
                            <tr>
                                <th className="!text-center">Codigo</th>
                                <th>Empresa</th>
                                <th>Contacto</th>
                                <th>Cargo</th>
                                <th>Ciudad</th>
                                <th className="!text-right">Pais</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaClientes.map(item =>
                            <tr key = {item.idcliente}>
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

    return (
        <>
        <PageHeader pageTitle="Clientes" pageSubtitle=""/>
            <section id="clientes" className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    {dibujarTabla()} 
                </div>
            </section>
        </>
    )
}

export default Clientes