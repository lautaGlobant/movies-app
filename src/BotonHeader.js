import React from 'react'
import './BotonHeader.scss'

function BotonHeader(props) {
    return (
        <div className='BotonHeader'>
            <button value={props.tipo} onClick={(e) => {props.handleClicked(e.target.value)}}>{props.tipo}</button>
        </div>
    )
}

export default BotonHeader;