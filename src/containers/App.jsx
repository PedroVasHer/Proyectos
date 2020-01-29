import React ,{useState ,useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState.js'
import '../assets/styles/App.scss'
//para poder utilizar useState y useEffect se debe cambiar el retorno explicito que solo era con ()
//se pone la palabra return y se ponen {}
// de esta manera se puede poner logica en el componente

const API = 'http://localhost:3000/initalState'
const App = () => {
const initialState = useInitialState(API)
//console.log(initialState)
return(
    <div className ='App'>
        <Header/>
        <Search/>
        {initialState.mylist.length > 0 && //se valida si myList de la api esta vacia o no, si no: muestre los elementos
            <Categories title = "Mi lista">
                <Carousel>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                    <CarouselItem/>
                </Carousel>
            </Categories>
        }

        <Categories title = "Tendencias">
            <Carousel>
                {initialState.trends.map(item =>
                    <CarouselItem key={item.id} {...item}/>//el key es para identifcar cada elemento en el html
                    //y se crea un CarouselItem por cada item que exista en tendencia destructurando la variable con ... 
                )}
            </Carousel>
        </Categories>

        <Categories title = "Originales de platzi video">
            <Carousel>
                {initialState.originals.map(item =>
                    <CarouselItem key={item.id} {...item}/>
                    
                )}
            </Carousel>
        </Categories>
        <Footer/>
    </div>
)}

export default App