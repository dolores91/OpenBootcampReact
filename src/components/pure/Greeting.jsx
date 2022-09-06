//componente de clase

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {
constructor(props){
    //props es info que le pasas tipo atributos
    super(props)
    //state es info privada, no es puro. por eso lo pasamos aca y al props en app.js
    this.state = {
        age: 31
    }
}

    render() {
        return (
            <div>
                <h1>Hola {this.props.name}desde greetings!</h1>
                <h2>Tu edad es de: {this.state.age}</h2>
                <div><button onClick={this.birthday}>Cumplir años</button></div>
            </div>
        );
    }

//para cambiar un estado usamos setState
birthday = ()=>{
    this.setState((prevState)=>(
        {age: prevState.age +1}
    ))
}
}
//recien aca cierra la llave de la clase
//esto es para indicar cel tipo de dado del prop:
Greeting.propTypes = {
    name: PropTypes.string,

};




export default Greeting;
