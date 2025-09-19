import noticia1 from '../assets/images/noticia1.jpg'
import noticia2 from '../assets/images/noticia2.jpg'
import noticia3 from '../assets/images/noticia3.jpg'

const Noticias = () => {
    return (
        <section id='noticias' className='py-20'>
            <div className="max-w-7xl mx-auto px-3">
                <h2>Noticias</h2>
                <div className="flex -mx-3">
                    <article className="w-full md:w-1/3 px-3">
                        <figure className='mb-3'>
                            <img src={noticia1} alt="" />
                        </figure>
                        <h3>Noticia 1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quae, ipsa, ratione magnam iusto natus commodi, architecto quis numquam incidunt possimus inventore eligendi molestias ad debitis odio assumenda aliquid placeat optio error!</p>
                        <p>Debitis impedit, eos non nemo vel maiores consectetur necessitatibus, exercitationem veritatis doloremque et ea quia recusandae. Accusamus mollitia asperiores labore delectus porro eaque, cupiditate sed consectetur quia soluta sapiente adipisci harum id.</p>
                    </article>
                    <div className="w-full md:w-1/3 px-3">
                        <figure className='mb-3'>
                            <img src={noticia2} alt="" />
                        </figure>
                        <h3>Noticia 2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quis itaque quidem id nostrum. Dolore eveniet nesciunt, ducimus reiciendis repellat commodi blanditiis delectus consequuntur esse harum expedita tempora architecto in assumenda veniam?</p>
                        <p>Incidunt, officiis placeat facilis tempore aspernatur accusamus minima quos fugiat perspiciatis delectus deleniti at modi unde dolore commodi quibusdam animi odio? Veritatis fugit consequuntur non nobis ut quod voluptate alias quas dignissimos.</p>
                    </div>
                    <div className="w-full md:w-1/3 px-3">
                        <figure className='mb-3'>
                            <img src={noticia3} alt="" />
                        </figure>
                        <h3>Noticia 3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam illum optio perferendis eligendi, earum dolor deserunt praesentium rem non quam, consequuntur minima harum beatae quisquam a inventore culpa. Voluptates, sequi qui!</p>
                        <p>Nobis sint est, placeat, amet aspernatur quisquam debitis dolorem ex ratione, officiis atque at sit? Aliquid, quos ea. Sapiente, distinctio! Veniam delectus quidem aspernatur cum optio laborum hic deserunt officia distinctio veritatis.</p>
                    </div>
                </div>
            </div>
        </section>  
    )
}

export default Noticias