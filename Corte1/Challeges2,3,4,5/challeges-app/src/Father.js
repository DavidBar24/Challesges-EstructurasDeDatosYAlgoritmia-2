import React, { useState } from "react";
import { Son } from "./Son";

export const Father = () => {
    const list = [2, 4, 6, 8, 10];
    const [valor, setValor] = useState(0); // Estado para el número seleccionado

    const showNumber = (num) => {
        setValor(num); // Simplemente actualiza el número mostrado
    };

    return (
        <div>
            <h1> Father </h1>
            <p> Número seleccionado: {valor} </p> {/* Cambié la etiqueta para mayor claridad */}
            <hr />

            {list.map((n, idx) => (
                <Son
                    key={idx}
                    numero={n}
                    showNumber={showNumber} // Pasamos la nueva función
                />
            ))}
        </div>
    );
};
