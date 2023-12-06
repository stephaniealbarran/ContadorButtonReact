
import React, { useState, useEffect } from 'react';

function Contador() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count === 5) {
            alert('Has alcanzado 5 clicks!');
        }
    }, [count]);
    return (
        <div>
            <p>Ha hecho click {count}veces</p>
            <button onClick={() => setCount(count + 1)}> Haz click!
            </button>
        </div>
    )
}

export { Contador }