import { useState, useEffect } from 'react';
import { actualizarAlumno } from '../../services/alumnosService';
import { manejarError } from '../../utils/manejarError';
import { validarCampos } from '../../utils/validarCampos';
import styles from './FormularioEditar.module.css'; // 1. Importamos el CSS Module

const estadoInicial = {
  nombre: '',
  apellido: '',
  grado: '',
  seccion: '',
};

export const FormularioEditar = ({ alumnoEditar, onGuardado, onCancelar }) => {
  const [campos, setCampos] = useState(estadoInicial);
  const [errores, setErrores] = useState({});

  useEffect(() => {
    setCampos({
      nombre: alumnoEditar?.nombre || '',
      apellido: alumnoEditar?.apellido || '',
      grado: alumnoEditar?.grado || '',
      seccion: alumnoEditar?.seccion || '',
    });
  }, [alumnoEditar]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCampos((anterior) => ({ ...anterior, [name]: value }));

    if (errores[name]) {
      setErrores((anterior) => ({ ...anterior, [name]: null }));
    }
  };

  const handleGuardar = async () => {
    const erroresEncontrado = validarCampos(campos);

    if (Object.keys(erroresEncontrado).length > 0) {
      setErrores(erroresEncontrado);
      return;
    }

    try {
      await actualizarAlumno(alumnoEditar.id, campos);
      onGuardado();
    } catch (error) {
      console.error('Error al momento de guardar un alumno');
      manejarError(error);
    }
  };

  return (
    <div className={styles.tarjetaFormulario}>
      <h2 className={styles.titulo}>Actualizar alumno</h2>

      <div className={styles.grupoCampo}>
        <label className={styles.label}>Nombre</label>
        <input
          type='text'
          name='nombre'
          className={`${styles.input} ${errores.nombre ? styles.inputError : ''}`}
          value={campos.nombre}
          onChange={handleChange}
          placeholder='Ej: Vic'
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

      {/* 2. Envolvemos Grado y Sección en la fila grid para responsividad */}
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
            <option value='7to'>7to</option>
            <option value='8to'>8to</option>
            <option value='9to'>9to</option>
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
        <button className={styles.btnActualizar} onClick={handleGuardar}>
          Actualizar alumno
        </button>
        <button className={styles.btnCancelar} onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </div>
  );
};