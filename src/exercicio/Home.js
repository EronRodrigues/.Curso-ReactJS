import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import MyContext from "../contextos/myContext";
export default function Home() {
  const [email] = useContext(MyContext)
  return (
    <div>
      <nav>
        <Link to='/login'>Logar </Link>
        {email != '' ? <Link to='/pedido'>| Pedido |</Link> : null}
        {email != '' ? <Link to='/pagamento'> Pagamento</Link> : null}
      </nav>
      <Outlet />
    </div>
  )
}