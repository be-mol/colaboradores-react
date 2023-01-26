import { useState } from 'react';
//import Buscador from './components/Buscador';
import { Colaboradores } from './components/Colaboradores'

function App() {
  // Arreglos y estados de los colaboradores
  const [arrColaborador, setColaborador] = useState(Colaboradores);
  const [nombreColaborador, setNombreColaborador] = useState('');
  const [correoColaborador, setCorreoColaborador] = useState('');
  
  // Función de escritura del input
  const inputNombre = (e) => {
    setNombreColaborador(e.target.value)
  }
  const inputCorreo = (e) => {
    setCorreoColaborador(e.target.value)
  }

  //Función al enviar formulario
  const enviarFormulario = (e) => {
    e.preventDefault()
    //Agregar Tarea
    setColaborador([...arrColaborador, {id : Date.now(), nombre : nombreColaborador, correo : correoColaborador}])
    //Vaciar el formulario
    setNombreColaborador('')
    setCorreoColaborador('')
  }

  //Estado de Búsqueda
  const [search, setSearch] = useState('');

  //función de búsqueda
  const busqueda = (e) => {
      setSearch(e.target.value)
  }

  //Método de filtrado
  let results = [] 
  if (!search) {
      results = arrColaborador
  } else {
    results = arrColaborador.filter ( (colaborador) =>
    colaborador.nombre.toLowerCase().includes(search.toLocaleLowerCase()) )
  }

  return (
    <div className='container'>
      <div className='header'>
        <h2>Búsqueda de Colaboradores</h2>
        <input type="text" placeholder='Busca un colaborador' value={search} onChange={busqueda} />
      </div>
      <div className='formulario'>
        <form onSubmit={enviarFormulario}>
          <p>Nombre del Colaborador:</p>
          <input type="text" name="nombre" onChange={inputNombre} />
          <p>Correo:</p>
          <input type="text" name="correo" onChange={inputCorreo} />
          <button>Agregar colaborador</button>
        </form>
        <div>
          <h3>Lista de colaboradores</h3>
          <ul>
            {results.map((colaborador, index) => (
              <li key={index}>
            {colaborador.nombre} - {colaborador.correo}
            </li>))}
          </ul>
        </div>
      </div>      
    </div>
  );
}

export default App;