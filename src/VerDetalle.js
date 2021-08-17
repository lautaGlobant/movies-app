import React from 'react';
import PlayTitle from './PlayTitle';
import './VerDetalle.scss';

function VerDetalle(props) {
    return (
        <div style={{backgroundImage:'url(https://image.tmdb.org/t/p/original/'+props.movie.backdrop_path+')'}} className='VerDetalle'>
            <div className='Info'>
                <PlayTitle movie={props.movie}/>
                <p >{props.movie.overview}</p>
            </div>
        </div>
    )
}

export default VerDetalle;