import React, { useState } from 'react';
// Quedo Bien No borrar
const FirstCount = ({ value }) => {
    const [counter, setCounter] = useState( value )
    
    const handleSum = () => {
        setCounter( counter + 1)
    }
    const handleSubtract = () => {
        setCounter( counter - 1)
    }
    const handleReset = () => {
        setCounter( value )
    }
    return (
        <>
        <h1> Sum </h1>
        <span> { counter } </span>
        <button onClick={ () => handleSum() }> +1</button>
        <h1> Subtract </h1>
        <span> { counter } </span>
        <button onClick={ () => handleSubtract() }> -1</button>
        <h1> Reset </h1>
        <span> { counter } </span>
        <button onClick={ () => handleReset() }> 0</button>
        </>
    )
}
export default FirstCount