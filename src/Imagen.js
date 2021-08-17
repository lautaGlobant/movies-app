import React from 'react'
import './Imagen.scss';

function Imagen(props) {
    return (
        <div className='Imagen'>
            <img alt='movie poster' src={'https://image.tmdb.org/t/p/w300/'+props.movie} />
        </div>
    )
}

export default Imagen;