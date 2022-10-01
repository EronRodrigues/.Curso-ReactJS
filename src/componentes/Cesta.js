import { useState } from "react"
import './estilos.module.css'

export default function Cesta() {
    const [cesta, setCesta] = useState(['maçã','banana','uva'])
    const [fruta, setFruta] = useState()

    function add() {
        setCesta((old) => [...old, fruta])
        setFruta('')
    }

    return (
        <div>
            <h3>Cesta</h3>
            <ul>
                {cesta.map((item) => <li>{item}</li>)}
            </ul>
            <input type="text" value={fruta} onChange={(e) => setFruta(e.target.value)}/>
            <button onClick={add}>Add</button>
        </div>
    )
}