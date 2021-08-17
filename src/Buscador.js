import React from 'react';
import { useState } from 'react';
import './Buscador.scss';

function Buscador(props) {
    const [filter, setFilter] = useState();

    return (
        <>
            <input type='text' onChange={(e) => setFilter(e.target.value)}/>
            <button value={props.tipo} onClick={() => props.handleClicked(filter)}>{props.tipo}</button> 
        </>
    )
}

export default Buscador;