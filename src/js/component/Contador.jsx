import React from "react";
import '../../styles/contadorStyles.css'
import { useState, useEffect } from "react";


const Contador = () =>{
    
    const [one, setOne] = useState(0);
    const [two, setTwo] = useState(0);
    const [three, setThree] = useState(0);
    const [four, setFour] = useState(0);
    const [five, setFive] = useState(0);
    const [six, setSix] = useState(0);
    
    const growTimer = () =>{
        setOne(one + 1);
    }
    useEffect(()=>{
        const intervalId = setInterval(growTimer,1000)
        return () => clearInterval(intervalId)
    }, [one])
    if(one === 10){
        setOne(0);
        setTwo(two + 1)
    }
        if(two === 10){
            setTwo(0)
            setThree(three + 1)
        }
        if(three === 10){
            setThree(0)
            setFour(four + 1)
        }
        if(four === 10){
            setFour(0)
            setFive(five + 1)
        }
        if(five === 10){
            setFive(0)
            setSix(six + 1)
        }
    // }
    return (
        <div className="container">
            <div className="clock bg-dark text-light">
               <div className="card"><div className="reloj"><i className="fa-regular fa-clock"></i></div></div>
                <div className="card"><div className="number">{six}</div></div>
                <div className="card"><div className="number">{five}</div></div>
                <div className="card"><div className="number">{four}</div></div>
                <div className="card"><div className="number">{three}</div></div>
                <div className="card"><div className="number">{two}</div></div>
                <div className="card"><div className="number">{one}</div></div>
            </div>
            <div className="button">
                <button className="btn btn-danger">Restart</button>
            </div>
        </div>
        )
}

export default Contador;