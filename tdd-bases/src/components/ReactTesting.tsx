import React, {useState} from "react";

export const ReactTesting = () => {
    const [counter, setCounter] = useState<number>(0);
    const sumar = (value: number) => {
        setCounter(counter+value);
    }

    return (<>
        <h1>Buenos días</h1>
        <p>clicks: {counter}</p>
        <button onClick={()=> sumar(1)}>CLIQUEADOR</button>
    </>);
};
