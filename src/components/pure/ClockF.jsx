import React,{useState, useEffect} from 'react';

const ClockF = (props) => {
    const [fecha, setFecha] = useState(new Date());
    const [edad, setEdad] = useState(0);
    const nombre = "dolo";
    const apellido = "aleman";
    useEffect(() => {
        setInterval(() => setFecha(new Date()), 1000);
 }, []);
    const hora=()=>{
        setFecha.toLocaleTimeString()
        
    }
    const tick=()=> {
        setEdad(edad+1)
    }
   setInterval(tick,1000)
    return (
        <div>
                <h2>
                    Hora Actual:
                    {fecha.toLocaleTimeString()}
                </h2>
                <h3>{nombre} {apellido}</h3>
                <h1>Edad: {edad}</h1>
            </div>
    );
   
}

export default ClockF;
