import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import type { Empleado } from "../types/Empleado"
import { API_URL } from "../utils"

const Empleados = () => {

    const [listaEmpleados, setListaEmpleados] = useState<Empleado[]>([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        fetch(API_URL + "empleados")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setListaEmpleados(data)

        })
    }

    const dibujarCuadricula = () => {
        return(
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                
            {listaEmpleados.map(item =>
                <div key={item.idempleado} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={API_URL + item.foto} alt="Retro gaming setup" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h5 className="text-xl font-bold mb-2 text-gray-800">{item.nombres + ' ' + item.apellidos}</h5>
                        <p className="text-gray-600">
                        {item.cargo}
                        </p>
                    </div>
                </div>
            )}
            </div>
        )
    }



    return(
        <>
        <PageHeader pageTitle="Empleados" pageSubtitle="Nuestro equipo, nuestro mayor valor"/>
            <section className='py-20'>
                <div className='max-w-7xl mx-auto px-3'>
                    {dibujarCuadricula()}
                </div>
            </section>
        </>   
    )
}


export default Empleados