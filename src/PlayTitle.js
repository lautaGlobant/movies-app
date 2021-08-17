import React from 'react'
import './PlayTitle.scss';

function PlayTitle(props) {
    return (
        <div className='PlayTitle'>
            <h1>{props.movie.original_title}</h1>
            <span>PLAY</span>
        </div>
    )
}

export default PlayTitle;