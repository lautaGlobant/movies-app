import Pelicula from './Pelicula';
import VerDetalle from './VerDetalle';
import './Catalogo.scss';
import { useState, useEffect } from 'react';

function Catalogo(props){
    const [mostrar, setMostrar] = useState(false);
    const [detalle, setDetalle] = useState({});
    const [movies, setMovies] = useState(props.movieList);

    useEffect(() => {
        setMovies(props.movieList);

        function handleOutsideModal(e) {
            if(e.target.className === 'Catalogo' || e.target.className === 'Header'){
                setMostrar(false);
            }
        }
    
        document.addEventListener('click', handleOutsideModal)
    
    }, [props.movieList])

    const mostrarModal = (movie) => {
        setMostrar(!mostrar);
        setDetalle(movie); 
    }

    return (
        <div className='Catalogo' >
            {movies.map((m, index) => {
                return <Pelicula openDetails={(movie) => mostrarModal(movie)} movie={m} key={index} />
            })}

            {mostrar && <VerDetalle movie={detalle} />}
            
        </div>
    )

}

export default Catalogo;