import { useEffect, useState } from "react";

export default function Timer() {
    const[cont, setCont] = useState(0)

    // useEffect(() => {setCont(cont => cont + 1)}, [cont])
    return (
        <div>Timer: {cont}</div>
    )
}