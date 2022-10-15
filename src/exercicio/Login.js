import { useContext } from "react";
import MyContext from "../contextos/myContext";

export default function Login() {
    const [email, senha, setEmail, setSenha] = useContext(MyContext)
    return (
        <div>
            <input
                type='text' 
                defaultValue={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder='Digite o seu e-mail.'/>
            <input 
               type='text' 
               defaultValue={senha} 
               onChange={e => setSenha(e.target.value)}
               placeholder='Digite a sua senha.'/>
            <p>{email}</p>
        </div>
    )
}