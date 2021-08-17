import React from 'react';
import Buscador from './Buscador';
import BotonHeader from './BotonHeader';
import './Header.scss';

function Header(props) {
    return (
        <div className='Header'>
            <h2>moviesAPP</h2>
            <Buscador tipo='SEARCH' handleClicked={(filter) => {props.changeFilter(filter, 'SEARCH')}} />
            <BotonHeader tipo='NEW RELEASES' handleClicked={(type) => {props.changeFilter(type, type)}}/>
            <BotonHeader tipo='TV SHOWS' handleClicked={(type) => {props.changeFilter(type, type)}}/>
            <BotonHeader tipo='DISCOVER' handleClicked={(type) => {props.changeFilter(type, type)}}/>
        </div>
    )
}

export default Header;