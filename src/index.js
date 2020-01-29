import React from 'react'
import ReactDOM from 'react-dom' /* Esta libreria sirve para empujar todo lo que se haga con react al navegador*/
//import HelloWorld from './components/HelloWorld'
//import Header from './components/Header'
import App from './containers/App' // de esta manera es mas facil manejar los componentes. 
//Se obtendria un contenedor principal donde van los componentes que se crean
import './assets/styles/App.scss'
/*Render recibe dos parametros, el componente y donde va a empujar el componente */
ReactDOM.render(<App/>,document.getElementById('app'))