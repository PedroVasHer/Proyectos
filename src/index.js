import React from 'react'
import ReactDOM from 'react-dom' /* Esta libreria sirve para empujar todo lo que se haga con react al navegador*/
import HelloWorld from './components/HelloWorld'


/*Render recibe dos parametros, el componente y donde va a empujar el componente */
ReactDOM.render(<HelloWorld/>,document.getElementById('app'))