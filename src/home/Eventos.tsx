import evento1 from '../assets/images/evento1.jpg'
import evento2 from '../assets/images/evento2.jpg'
import evento3 from '../assets/images/evento3.jpg'
import evento4 from '../assets/images/evento4.jpg'


const Eventos = () => {
  return (
    <section className="py-20">
        <div className="max-w-7xl mx-auto px">
            <h2>Eventos</h2>


  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={evento1} alt="Retro gaming setup" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
        <p className="text-gray-600">
          This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={evento2} alt="Laptop on a desk" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
        <p className="text-gray-600">
          This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={evento3} alt="Team meeting" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
        <p className="text-gray-600">
          This is a longer card with supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={evento4} alt="People working on laptops" className="w-full h-48 object-cover" />
      <div className="p-6">
        <h5 className="text-xl font-bold mb-2 text-gray-800">Card title</h5>
        <p className="text-gray-600">
          This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>

  </div>
          


        </div>
    </section>
  )
}

export default Eventos
