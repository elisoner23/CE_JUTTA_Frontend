import { useState, useEffect } from 'react';
 
export const MensajeBienvenida = () => {
  const [mensaje, setMensaje] = useState('Cargando...');
 
  useEffect(() => {
    console.log('useEffect se ejecuto al montar el componente');

    //setTimeout(() => {
    //   setMensaje('¡Bienvenido a la aplicación!');
    //  }, 2000);

  setMensaje('¡Bienvenido a la aplicación!');
  }, []);
 
  return (
    <div>
      <p>{mensaje}</p>
    </div>
  );
};