import { useContext } from "react"
import MyContext from "../contextos/myContext"
export default function Pagamento() {
    const [email] = useContext(MyContext)
    return(
        <div>
            <h1>Pagamento</h1>
            <p>Cliente: {email}</p>            
        </div>
    )
}