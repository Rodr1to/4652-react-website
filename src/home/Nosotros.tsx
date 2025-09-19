import fundador from './../assets/images/sam-altman.jpg'

const Nosotros = () => {
    return (
        <section id='nosotros' className='py-20'>
            <div className="max-w-7xl mx-auto px-3">
                <div className="flex -mx-3">
                    <div className="w-full md:w-1/3 px-3">
                        <figure>
                            <img src={fundador} alt="" />
                        </figure>
                    </div>
                    <div className="w-full md:w-2/3 px-3">
                        <h2>Nosotros</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure molestiae voluptatum illo quaerat ex cumque distinctio architecto optio omnis, libero, ad voluptatem explicabo sint veniam quia temporibus! Id, accusantium quis nisi sequi quas perferendis, aut, assumenda asperiores dolores ipsa rem ad est! Iste enim voluptas nisi debitis impedit, sed suscipit totam consequatur sunt, aliquam veniam. Voluptates officia ex labore iure voluptatem, a quos facere deleniti maxime ipsa temporibus ea repellendus neque omnis id dicta vitae fugit vel animi eveniet quis totam itaque ducimus molestias. Debitis aliquam, odio aliquid assumenda natus velit voluptas dolor, asperiores rerum veniam quo eaque quasi, illo et cum cupiditate illum voluptate? Amet quaerat voluptatum quam ullam pariatur accusamus, natus praesentium error, fugiat dicta maiores aut iure?</p>
                        
                        <a href="" className='boton-link'>
                            Mas informacion
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nosotros