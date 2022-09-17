import './componentes.css'
export default function Calculadora() {
    function calcular() {
        var n1 = Number(document.getElementById("n1").value)
        var n2 = Number(document.getElementById("n2").value)
        var op = document.getElementById("op").value
        var resultado = 0
        switch (op) {
            case '+': resultado = n1 + n2
            break
            case '-': resultado = n1 - n2
            break
            case '*': resultado = n1 * n2
            break
            case '/': resultado = n1 / n2
            break
            default: resultado = 0
        }
        document.getElementById("resultado").value = resultado
    }
    return (
        <div className="container">
            <label className="instruction">Escolha 2 Números:</label>
            <input type="number" id="n1" placeholder="Informe o primeiro número." />
            <input type="number" id="n2" placeholder="Informe o segundo número." />
            <select id="op">
                <option value="+">Somar</option>
                <option value="-">Subtrair</option>
                <option value="*">Multiplicar</option>
                <option value="/">Dividir</option>
            </select>
            <button onClick={calcular}>Calcular</button>
            <input type="text" id="resultado" disabled></input>
        </div>
    )
}
