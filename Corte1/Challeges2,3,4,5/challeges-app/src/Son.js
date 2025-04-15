import React, { memo } from "react";

export const Son = memo(({ numero, showNumber }) => {
    console.log(`Son renderizado: ${numero}`);

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={() => showNumber(numero)} // Llama a showNumber con el número específico
        >
            {numero}
        </button>
    );
});
