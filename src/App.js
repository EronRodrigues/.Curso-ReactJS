import logo from './logo.svg';
import './App.css';
import MeuComponente from './componentes/MeuComponente';
import Calculadora from './componentes/Calculadora';
import Car from './componentes/Car';
import carro1 from './imagens/carro1.jpg';
import Cores from './hooks/Cores';

function App() {
  var carros = [
    {placa: "abc-1234", modelo: "Fiesta", marca: "Ford", foto: "carro1.jpg"},
    {placa: "lzz-1234", modelo: "Fusca", marca: "Wolks", foto: "carro1.jpg"},
    {placa: "lxm-1234", modelo: "Kombi", marca: "Wolks", foto: "carro1.jpg"}]
  return (
    <div className="App">
      <Cores />
      {carros.map((carro) => <Car placa={carro.placa} modelo={carro.modelo} marca={carro.marca} foto={carro.foto}/>)}
      <hr />
    </div>
  )
}

export default App;
