import './App.css';
import Rotas from './exercicio/Rotas'
import myContext from './contextos/myContext';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState()
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <myContext.Provider value={[email,senha, setEmail, setSenha]}>
        <Rotas />
      </myContext.Provider>
    </div>
  );
}

export default App;