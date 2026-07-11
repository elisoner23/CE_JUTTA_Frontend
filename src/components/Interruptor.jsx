import { useState } from 'react';
 
export const Interruptor = () => {
  const [encendido, setEncendido] = useState(false);
 
  return (
    <div>
      <h1>Ejemplo 1: Interruptor de luz</h1>

    <p>la luz está {encendido ? 'encendida' : 'apagada'}</p>

    <button onClick={() => setEncendido(!encendido)}>
      {encendido ? 'Apagar' : 'Encender'} luz
    </button>
    </div>
  );
};