import React from "react";
import '../../styles/contadorStyles.css'
import { useState, useEffect } from "react";


const Contador = () =>{
    
    let first = 0;
    let second = 0;
    let third = 0;
    let fourth = 0;
    let fifth = 0;
    let sixth = 0;
 
    
    const [one, setOne] = useState(first);
    const [two, setTwo] = useState(second);
    const [three, setThree] = useState(third);
    const [four, setFour] = useState(fourth);
    const [five, setFive] = useState(fifth);
    const [six, setSix] = useState(sixth);
    
    const growTimer = () =>{
        setOne(one + 1);
    }
    useEffect(()=>{
        const intervalId = setInterval(growTimer,1)
        return () => clearInterval(intervalId)
    }, [one])
    if(one === 10){
        setOne(first);
        setTwo(two + 1)
        if(two === 6){
            setTwo(second)
            setThree(three + 1)
        }
        if(three === 10){
            setThree(third)
            setFour(four + 1)
        }
        if(four === 10){
            setFour(fourth)
            setFive(five + 1)
        }
        if(five === 10){
            setFive(fifth)
            setSix(six + 1)
        }
    }
    return (
        <div className="container d-flex bg-dark">
            <div className="row">
               <div className="col-2 relojcontainer"><div className="reloj"><i className="fa-regular fa-clock"></i></div></div>
                <div className="col-1 numberContainer"><div className="number mx-2 w-auto">{six}</div></div>
                <div className="col-1 numberContainer"><div className="number mx-2 w-auto">{five}</div></div>
                <div className="col-1 numberContainer"><div className="number mx-2 w-auto">{four}</div></div>
                <div className="col-1 numberContainer"><div className="number mx-2 w-auto">{three}</div></div>
                <div className="col-1 numberContainer"><div className="number mx-2 w-auto">{two}</div></div>
                <div className="col-1 numberContainer"><div className="number mx-2 w-auto">{one}</div></div>
            </div>
        </div>
        )
}

export default Contador;