//Alternar botón de reacción
// Proporcionamos un código de plantilla de React simple. Su objetivo es modificar el componente para que pueda alternar correctamente el botón para cambiar entre un estado ON y un estado OFF. Cuando el botón está activado y se hace clic en él, se apaga y el texto que contiene cambia de ENCENDIDO a APAGADO y viceversa. Utilice el estado del componente para este desafío.
//
// Eres libre de agregar clases y estilos, pero asegúrate de dejar los ID de los componentes componentes y las clases proporcionadas como están. Envíe su código una vez que esté completo y nuestro sistema validará su resultado.

import React, { useState } from 'react';

export const MyComponent = () => {
    const [isOn, setIsOn] = useState(true);

    return (
        <div>
            <button id="toggle" onClick={() => setIsOn(!isOn)}>
                {isOn ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

