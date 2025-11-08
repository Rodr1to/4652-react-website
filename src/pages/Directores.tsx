import { useEffect, useState } from "react"
import type { Director } from "../types/Director"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"

const Directores = () => {
    // Hoook 
    const [listaDirectores, setListaDirectores] = useState<Director[]>([])
    const [mostrarInsertModal, setMostrarInsertModal] = useState(false)
    const [mostrarUpdateModal, setMostrarUpdateModal] = useState(false)
    const [mostrarDeleteModal, setMostrarDeleteModal] = useState(false)
    const [iddirector, setIddirector] = useState("")
    const [nombres, setNombres] = useState("")
    const [peliculas, setPeliculas] = useState("")

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = async () => {
        try {
            const response = await fetch(API_URL + "directores.php")
            const data: Director[] = await response.json()
            console.log(data)
            setListaDirectores(data)
        } catch (error) {
            console.log("Error consultando los datos: ", error)
        }
    }

    const dibujarTabla = () => {
        return (
            <table className='tabla-reporte'>
                <thead>
                    <tr>
                        <th className="!text-center">Codigo</th>
                        <th>Nombres</th>
                        <th>Peliculas</th>
                        <th>Cargo</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    {listaDirectores.map(item =>
                        <tr key={item.iddirector}>
                            <td className="text-center">{item.iddirector}</td>
                            <td>{item.nombres}</td>
                            <td>{item.peliculas}</td>
                            <td><i className="fa-solid fa-pencil cursor-pointer hover:text-red-400 transition-transform 
                            duration-300 ease-in-out hover:rotate-90"
                                title="Editar"
                                onClick={() => seleccionarDirector(item)}></i></td>
                            <td><i className="fa-solid fa-xmark cursor-pointer hover:text-red-400 transition-transform 
                            duration-300 ease-in-out hover:rotate-90"
                                title="Eliminar"
                                onClick={() => eliminarDirector(item)}></i></td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

   const eliminarDirector = (director: Director) => {
        console.log(director)
        setIddirector(director.iddirector.toString())
        setNombres(director.nombres)
        setPeliculas(director.peliculas)
        setMostrarDeleteModal(true)    
    }

    const dibujarDeleteModal = () => {
        return (
            <div className={`top-0 right-0 fixed ${mostrarDeleteModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute inset-0 bg-gray-600/50"></div>
                <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl p-6 transition-transform duration-300 transform ${mostrarDeleteModal ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center pb-4 border-b">
                        <h5 className="text-xl font-semibold text-gray-800">Eliminar director</h5>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-900 text-2xl"
                            onClick={() => setMostrarDeleteModal(false)}
                            aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <form onSubmit={(event) => deleteDirector(event)}>
                        <div className="mt-6">
                            <p>¿Está seguro de eliminar al director <strong>{nombres}</strong> con ID:{iddirector}?</p>
                            <button
                                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
                                type="submit">
                                Eliminar
                            </button>
                            <button
                                className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150 ml-1"
                                onClick={() => setMostrarDeleteModal(false)} 
                                type="submit">
                                Cerrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const deleteDirector = async (event: React.SyntheticEvent) => {
        event.preventDefault() // previene que se cargue la web
        console.log(iddirector, nombres, peliculas)

        const formData = new FormData()
        formData.append("iddirector", iddirector)

        const response = await fetch(API_URL + "directoresdelete.php", {
            body: formData,
            method: "POST"
        })
        const data : string = await response.text()
        alert("Se han eliminado los datos de director con ID: " + iddirector)
        setMostrarDeleteModal(false)
        leerServicio()
        setIddirector("")
        setNombres("")
        setPeliculas("")
    }
     

    const seleccionarDirector = (director: Director) => {
        console.log(director)
        setIddirector(director.iddirector.toString())
        setNombres(director.nombres)
        setPeliculas(director.peliculas)
        setMostrarUpdateModal(true)
        
    }

    const updateDirector = async (event: React.SyntheticEvent) => {
        event.preventDefault() // previene que se cargue la web
        console.log(iddirector, nombres, peliculas)

        const formData = new FormData()
        formData.append("iddirector", iddirector)
        formData.append("nombres", nombres)
        formData.append("peliculas", peliculas)

        const response = await fetch(API_URL + "directoresupdate.php", {
            body: formData,
            method: "POST"
        })
        const data : string = await response.text()
        alert("Se han actualizados los datos de director con ID: " + iddirector)
        setMostrarUpdateModal(false)
        leerServicio()
        setIddirector("")
        setNombres("")
        setPeliculas("")
    }


    const dibujarUpdateModal = () => {
        return (
            <div className={`top-0 right-0 fixed ${mostrarUpdateModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute inset-0 bg-gray-600/50"></div>
                <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl p-6 transition-transform duration-300 transform ${mostrarUpdateModal ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center pb-4 border-b">
                        <h5 className="text-xl font-semibold text-gray-800">Actualizar director</h5>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-900 text-2xl"
                            onClick={() => setMostrarUpdateModal(false)}
                            aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <form onSubmit={(event) => updateDirector(event)}>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                value={iddirector} readOnly />
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Nombre del director"
                                value={nombres} onChange={event => setNombres(event.target.value)}
                                required minLength={4} />
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Películas"
                                value={peliculas} onChange={event => setPeliculas(event.target.value)}
                                required minLength={2} />
                        </div>
                        <div className="mt-6">
                            <button
                                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
                                type="submit">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    const insertDirector = async (event: React.SyntheticEvent) => {
        event.preventDefault() // previene que se cargue la web
        console.log(nombres, peliculas)

        const formData = new FormData()
        formData.append("nombres", nombres)
        formData.append("peliculas", peliculas)
        
/*
        fetch(API_URL + "directoresinsert.php", {
            body: formData, 
            method: "POST"
        })
        .then(response => response.text())
        .then(data => {
            alert("Se ha agregado un nuevo director con ID: " + data)
            setMostrarInsertModal(false)
            leerServicio()
            setNombres("")
            setPeliculas("")
        })
*/

        const response = await fetch(API_URL + "directoresinsert.php", {
            body: formData,
            method: "POST"
        })
        const data : string = await response.text()
        alert("Se ha agregado un nuevo director con ID: " + data)
        setMostrarInsertModal(false)
        leerServicio()
        setNombres("")
        setPeliculas("")


        
    }

    const dibujarInsertModal = () => {
        return (
            <div className={`top-0 right-0 fixed ${mostrarInsertModal ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <div className="absolute inset-0 bg-gray-600/50"></div>
                <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-xl p-6 transition-transform duration-300 transform ${mostrarInsertModal ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex justify-between items-center pb-4 border-b">
                        <h5 className="text-xl font-semibold text-gray-800">Nuevo director</h5>
                        <button
                            type="button"
                            className="text-gray-400 hover:text-gray-900 text-2xl"
                            onClick={() => setMostrarInsertModal(false)}
                            aria-label="Close">
                            &times;
                        </button>
                    </div>
                    <form onSubmit={(event) => insertDirector(event)}>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Nombre del director"
                                value={nombres} onChange={event => setNombres(event.target.value)}
                                required minLength={4} />
                        </div>
                        <div className="mb-4">
                            <input type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Películas"
                                value={peliculas} onChange={event => setPeliculas(event.target.value)}
                                required minLength={2} />
                        </div>
                        <div className="mt-6">
                            <button
                                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
                                type="submit">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            <PageHeader pageTitle="Directores" pageSubtitle="" />
            <section id="directores" className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    <button onClick={() => setMostrarInsertModal(true)}
                        className="bg-amber-600 text-white py-2 px-4">Nuevo director</button>
                </div>
                {dibujarTabla()}
                {dibujarInsertModal()}
                {dibujarUpdateModal()}
                {dibujarDeleteModal()}
            </section>
        </>
    )
}

export default Directores