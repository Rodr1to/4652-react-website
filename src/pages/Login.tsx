import { useEffect, useState } from "react"
import PageHeader from "../components/PageHeader"
import { API_URL } from "../utils"
import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"


const Login = () => {

    const navigate = useNavigate()
    const { isAuthenticated, login } = useAuth()

    useEffect (() => {
        if (isAuthenticated) {    
            alert("Ya has iniciado sesión")
            navigate("/perfil")
    }
    }, [isAuthenticated, navigate])

    const [correoTelefono, setCorreoTelefono] = useState("")
    const [clave, setClave] = useState("")
    const [mostrarClave, setMostrarClave] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    const iniciarSesion = async (event: React.SyntheticEvent) => {
        event.preventDefault()
        try {
            const formData = new FormData()
            formData.append("correotelefono", correoTelefono)
            formData.append("clave", clave)
            const response = await fetch(API_URL + "login.php", {
                body: formData,
                method: "POST",
            })
            const data: string = await response.text()
            console.log(data)
            switch (data) {
                case "-1":
                    setErrorMessage("Error: Correo o teléfono no encontrado")
                    break
                case "-2":
                    setErrorMessage("Error: La constraseña es incorrecta")
                    break
                default:
                    setErrorMessage("")
                    const datosUsuario = JSON.parse(data)
                    login(datosUsuario[0].nombre)
                    navigate("/perfil")
                    break
            }
        } catch (err) {
            setErrorMessage("Error de conexión al servidor:" + err)
        }
    }
    return (
        <>
            <PageHeader pageTitle="Iniciar sesion" pageSubtitle="" />
            <section id="login" className="py-20">
                <div className="max-w-7xl mx-auto px-3">
                    <div className="flex -mx-3">
                        <div className="w-full md:w-1/4 px-3">
                            <form onSubmit={(event) => iniciarSesion(event)}>
                                <div className="mb-4">
                                    <input type="text"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Correo o telefono"
                                        value={correoTelefono} onChange={event => setCorreoTelefono(event.target.value)}
                                        required minLength={4} />
                                </div>
                                <div className="mb-4">
                                    <input type={mostrarClave ? "text" : "password"}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Contraseña"
                                        value={clave} onChange={event => setClave(event.target.value)}
                                        required minLength={2} />
                                </div>
                                <div className="mb-4">
                                    <input type="checkbox" checked={mostrarClave} onChange={event => setMostrarClave(event.target.checked)} /> Mostrar clave
                                </div>
                                <div className="mt-6">
                                    <button
                                        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
                                        type="submit">
                                        Iniciar sesión
                                    </button>
                                </div>
                                {errorMessage && <div className="mt-6 p-4 rounded bg-red-100 text-red-700 border border-red-400 mb-3">
                                    {errorMessage}
                                </div>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login