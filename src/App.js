import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componentes/Home';
import Cadastro from './componentes/Cadastro';
import Consulta from './componentes/Consulta';
import Edicao from './componentes/Edicao';
import Sobre from './componentes/Sobre';
import Layout from './componentes/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/consulta' element={<Consulta />} />
        <Route path='/edicao' element={<Edicao />} />
        <Route path='/sobre' element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
