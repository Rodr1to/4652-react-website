import Envios from "../home/Envios"
import Eventos from "../home/Eventos"
import Historia from "../home/Historia"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Noticias from "../home/Noticias"


const Inicio = () => {
  return (
        <>
            <MainBanner/>
            <Envios/>
            <Nosotros/>
            <Noticias/>
            <Historia/>
            <Eventos/> 
        </>
    
  )
}

export default Inicio