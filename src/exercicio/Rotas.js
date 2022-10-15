import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Pedido from "./Pedido";
import Pagamento from "./Pagamento";

export default function Rotas() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>            
            <Route path="login" element={<Login />} />
            <Route path="pedido" element={<Pedido />} />
            <Route path="pagamento" element={<Pagamento />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }