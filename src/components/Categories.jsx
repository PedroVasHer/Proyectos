import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({children, title}) => (
    <div className ='categories'>
        <h3 className="categories__title">{title}</h3>
        {/*Hacer el uso de props como children se le pueden pasar otros elementos para eso se encapsula dentro
        de un div*/}
        {children} 
    </div>
)

export default Categories