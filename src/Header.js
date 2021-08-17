import React from 'react';
import Buscador from './Buscador';
import BotonHeader from './BotonHeader';
import './Header.scss';

function Header(props) {
    return (
        <div className='Header'>
            <h2>moviesAPP</h2>
            <Buscador handleClicked={(filter) => {props.changeFilter(filter, 'SEARCH')}} />
            <BotonHeader tipo='ESTRENO' handleClicked={(type) => {props.changeFilter(type, type)}}/>
            <BotonHeader tipo='SERIES' handleClicked={(type) => {props.changeFilter(type, type)}}/>
            <BotonHeader tipo='DISCOVER' handleClicked={(type) => {props.changeFilter(type, type)}}/>
        </div>
    )
}

export default Header;