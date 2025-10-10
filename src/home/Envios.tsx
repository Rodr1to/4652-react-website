import { useEffect, useState } from 'react'
import type { Envio } from "../types/Envio"
import { API_URL } from '../utils'

const Envios = () => {

        const [listaEnvios, setListaEnvios] = useState<Envio[]>([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        fetch(API_URL + "envios")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setListaEnvios(data)

        })
    }



  return (
    <>
            <section id="envios" className="py-20">
                <div className="max-w-7xl mx-auto px-3">

                    <table className='tabla-reporte'>
                        <thead>
                            <tr>
                                <th className="!text-center">Codigo</th>
                                <th>Empresa</th>
                                <th>Telefono</th>
                                <th className="!text-right">Latitud</th>
                                <th className="!text-right">Longitud</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listaEnvios.map(item =>
                            <tr>
                                <td className="text-center">{item.idempresaenvio}</td>
                                <td>{item.nombre}</td>
                                <td>{item.telefono}</td>
                                <td className="!text-right">{item.latitud}</td>
                                <td className="!text-right">{item.longitud}</td>
                            </tr>
                            )}
                        </tbody>    
                    </table>
                </div>
            </section>
        </>
    
  )
}

export default Envios