import { useContext } from "react"
import MyContext from "../contextos/myContext"

export default function Pedido(){
   const [email] = useContext(MyContext)
    return(
        <div>
            <h1>Pedido</h1>
            <p>Cliente: {email}</p>            
        </div>
    )
}