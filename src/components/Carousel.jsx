import React from 'react'
import '../assets/styles/components/Carousel.scss'

const Carousel =({children})=>(
    <section className="carousel">
         <div className="carousel__container">
            {children} {/*Asi se le puede pasar los items de carousel mas facil*/}
         </div>
    </section>
    )

export default Carousel