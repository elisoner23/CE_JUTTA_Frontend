import { useState } from 'react';
import { crearAlumno } from '../../services/alumnosService';
import styles from './FormularioCrear.module.css';

const estadoInicial = {
  nombre: '',
  apellido: '',
  grado: '',
  seccion: '',
};

const validarCampos = (campos) => {
  const errores = {};

  if (campos.nombre.trim().length < 2) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres';
  }

  if (campos.apellido.trim().length < 2) {
    errores.apellido = 'El apellido debe tener al menos 2 caracteres';
  }

  if (campos.grado === '') {
    errores.grado = 'Debes seleccionar un grado';
  }

  if (campos.seccion === '') {
    errores.seccion = 'Debes seleccionar una sección';
  }

  return errores;
};

export const FormularioCrear = ({ onGuardado, onCancelar }) => {
  const [campos, setCampos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCampos((anterior) => ({ ...anterior, [name]: value }));

    if (errores[name]) {
      setErrores((anterior) => ({ ...anterior, [name]: null }));
    }
  };

  const handleGuardar = async () => {
    const erroresEncontrados = validarCampos(campos);

    if (Object.keys(erroresEncontrados).length > 0) {
      setErrores(erroresEncontrados);
      return;
    }

    try {
      await crearAlumno(campos);
      onGuardado();
    } catch (error) {
      console.error('Error al momento de guardar un alumno:', error);
    }
  };

  return (
    <div className={styles.tarjetaFormulario}>
      <h2 className={styles.titulo}>Registrar nuevo alumno</h2>

      <div className={styles.grupoCampo}>
        <label className={styles.label}>Nombre</label>
        <input
          type='text'
          name='nombre'
          className={`${styles.input} ${errores.nombre ? styles.inputError : ''}`}
          value={campos.nombre}
          onChange={handleChange}
          placeholder='Ej: Juan'
        />
        {errores.nombre && <p className={styles.textoError}>{errores.nombre}</p>}
      </div>

      <div className={styles.grupoCampo}>
        <label className={styles.label}>Apellido</label>
        <input
          type='text'
          name='apellido'
          className={`${styles.input} ${errores.apellido ? styles.inputError : ''}`}
          value={campos.apellido}
          onChange={handleChange}
          placeholder='Ej: Flores'
        />
        {errores.apellido && <p className={styles.textoError}>{errores.apellido}</p>}
      </div>

      <div className={styles.filaGrid}>
        <div className={styles.grupoCampo}>
          <label className={styles.label}>Grado</label>
          <select 
            name='grado' 
            className={`${styles.select} ${errores.grado ? styles.inputError : ''}`}
            value={campos.grado} 
            onChange={handleChange}
          >
            <option value=''>Selecciona un grado</option>
            <option value='7mo'>7mo</option>
            <option value='8vo'>8vo</option>
            <option value='9no'>9no</option>
          </select>
          {errores.grado && <p className={styles.textoError}>{errores.grado}</p>}
        </div>

        <div className={styles.grupoCampo}>
          <label className={styles.label}>Sección</label>
          <select 
            name='seccion' 
            className={`${styles.select} ${errores.seccion ? styles.inputError : ''}`}
            value={campos.seccion} 
            onChange={handleChange}
          >
            <option value=''>Selecciona una sección</option>
            <option value='A'>A</option>
            <option value='B'>B</option>
          </select>
          {errores.seccion && <p className={styles.textoError}>{errores.seccion}</p>}
        </div>
      </div>

      <div className={styles.grupoAcciones}>
        <button className={styles.btnGuardar} onClick={handleGuardar}>
          Registrar alumno
        </button>
        <button className={styles.btnCancelar} onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};