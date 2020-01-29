import {useEffect, useState} from 'react'

const useInitialState = (API) =>{
    const [videos,setVideos] = useState(//se deben inicializar videos con lo siguiente ya que videos al principio se crear como vacio y
        //js no ve y no puede validar la condicion de mylist.lenght ya que videos no tiene estos atributos.
        {
            mylist:[],
            trends: [],
            originals: []
        }
    ) //useState recibe string, boleanos, etc para inicializar los estados
    //useEffect va a la api y trae la informacion y esta se le pasa a la funcion setVideos y esta actualiza las variables llamadas videos
    useEffect(()=>{
        fetch(API) //fetch recibe la api
        .then(response => response.json())//transforma los datos en un json
        .then(data => setVideos(data))//los datos se los pasa a la funcion setVideos y esta se la pasa a videos
    },[])
    //useEffect recibe otro parametro que se encarga de escuchar y las variables han cambiado para cambiar el estado
    //si no se le pasa ese nuevo parametro entra en un loop infinito, para eso son [] al final de useEffect
    return videos //videos es el estado que se tiene
}

export default useInitialState