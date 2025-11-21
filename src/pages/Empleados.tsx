import { use, useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import type { Empleado } from "../types/Empleado"
import { API_URL } from "../utils"
import './Employees.css'

const Empleados = () => {

    const [listaEmpleados, setListaEmpleados] = useState<Empleado[]>([]);
    const [loading, setLoading] = useState(true);
    const [imagenesCargadas, setImagenesCargadas] = useState(0);

    useEffect(() => {
        leerServicio()
    }, []);

    useEffect(() => {
        if(listaEmpleados.length > 0 && imagenesCargadas == listaEmpleados.length) {
            setLoading(false);
        }   
    })

    const leerServicio = async () => {
        try {
        const response = await fetch(API_URL + "empleados.php")
        const data = await response.json();
        console.log(data);
        setListaEmpleados(data);
    } catch (error) {
        console.error("Hubo un error al consultar los datos:", error);
    }
    }

    const dibujarCuadricula = () => {
        return(
            <div className={"grid grid-cols-1 md:grid-cols-4 gap-6 " + (loading ? "d-none" : "")}>
                
            {listaEmpleados.map(item =>
                <div key={item.idempleado} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={API_URL + item.foto} alt="Retro gaming setup" className="w-full h-48 object-cover" 
                onLoad={() => setImagenesCargadas(contar => contar + 1) } />
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

    const dibujarPrecarga = () => {
        const placeholders = Array.from({ length: 10 })
        return(
            <div className={"grid grid-cols-1 md:grid-cols-4 gap-6 " + (loading ? "" : "d-none")}>
                
            {placeholders.map((_, index) =>
                <div className="col" key={index}>
                    <div className="card">
                        <div className="skeleton-img"></div>
                            <div className="card-body">
                                <div className="skeleton-line skeleton-title"></div>
                                <div className="skeleton-line skeleton-subtitle"></div>
                            </div>
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
                    {dibujarPrecarga()}
                    {dibujarCuadricula()}
                </div>
            </section>
        </>   
    )
}


export default Empleados