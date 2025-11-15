import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"
const Perfil = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()
    return (
        <section id='perfil' className='py-20'>
            <div className="max-w-7xl mx-auto px-3">
                <h1>Perfil</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                    necessitatibus veniam nam ut atque, amet magnam cumque inventore
                    libero fugit facilis provident nisi perspiciatis soluta. Ipsa, maiores
                    sit dolor amet mollitia esse commodi delectus corrupti nesciunt
                    obcaecati similique excepturi libero doloremque officia
                    necessitatibus, ab natus? Similique consectetur impedit vero itaque
                    porro eius facere cum ipsa minima perspiciatis nisi, placeat sapiente
                    deserunt earum ab numquam quod corporis necessitatibus provident eaque
                    aspernatur dignissimos? Architecto qui repellat quibusdam eveniet.
                    Aliquam corporis laboriosam dolor rerum tempore numquam fugit sed
                    eveniet magni. Voluptatem soluta fugit reiciendis ad, laboriosam iste
                    accusamus, amet beatae alias error maiores.
                </p>
                <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-150"
                    onClick={() => {
                        logout()
                        navigate("/login")    
                    }}
                    >Cerrar sesión</button>
            </div>
        </section>
    )
}
export default Perfil
