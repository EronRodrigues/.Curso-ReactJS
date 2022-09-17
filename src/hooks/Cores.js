import { useState } from "react";
import '../componentes/card.css'
export default function Cores() {
    const [cor, setCor] = useState("red")

    function troca() {
        var novacor = document.getElementById("novacor").value
        setCor(novacor)
    }
    return (
        <div class="container3" style={{backgroundColor:cor}}>
            <input type="text" id="novacor" placeholder="Informe sua cor de preferência." /> 
            <button onClick={troca}>Escolher</button>
        </div>
    )
}