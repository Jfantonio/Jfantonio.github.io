import './App.css';
import Encabezado from './componentes/Encabezado';
import Teclados from './componentes/Teclados';
import './css/estilos.css'


function App() {
  return (
    <div className="App">
      <Encabezado titulo='mi calculadora' />
      <Teclados/>
    </div>
  );
}

export default App;
