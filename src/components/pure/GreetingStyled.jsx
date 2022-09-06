import React,{useState} from 'react';
 //estilo para usuario logueado
    const loggedStyle = {
        color: 'blue'
    }
    //estilo para usuario no logueado´
    const unloggerStyle = {
        color: 'tomato',
        fontWheight: 'bold'
    }
const GreetingStyled = (props) => {
   //generamos un estado para controlar si el usuario esta o no logueado
const [logged, setLogged] = useState(false);
    return (
        <div style={logged ? loggedStyle : unloggerStyle}>
<p>hola, {props.name}</p>
<button onClick={()=>{
    console.log("boton pulsado")
    setLogged(!logged)
}}>
    {logged ? 'logguot' : 'login'}
</button>
        </div>
    );
}

export default GreetingStyled;
