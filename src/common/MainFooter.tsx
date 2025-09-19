import './MainFooter.css'
const MainFooter = () => {
  return (
    <footer id="main-footer">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex -mx-3">
          <div className="w-full md:w-1/2 px-3"></div>
          2025 Todos los derechos reservados.
        </div>
        <div className="w-full md:w-1/2 px-3" id="redes-sociales">
          <a href=""><i className="fa-brands fa-facebook-f"></i></a>
          <a href=""><i className="fa-brands fa-x-twitter"></i></a>
          <a href=""><i className="fa-brands fa-instagram"></i></a>
          <a href=""><i className="fa-brands fa-tiktok"></i></a>
          <a href=""><i className="fa-brands fa-linkedin-in"></i></a>

        </div>
      </div>

    </footer>
  )
}

export default MainFooter