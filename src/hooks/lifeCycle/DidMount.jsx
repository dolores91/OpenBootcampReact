//ejemplos del ciclo de vida con componente de clase y dps funcional(hook)
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log("comportamiento antes de q el componente sea añadido al DOM(renderizado");
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}



export const DidMountHook = () => {
    useEffect(() => {
        console.log("comportamiento antes de q el componente sea añadido al DOM(renderizado");

    }, []);//vacio para que no se renderuce cada vez
    return (
        <div>
        <h1>DidMount</h1>
    </div>
    );
}



