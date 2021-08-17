import Imagen from './Imagen';
import './Pelicula.scss';

function Pelicula(props) {
    return (
          <div onClick={() => props.openDetails(props.movie)} className='Pelicula'>
            <Imagen movie={props.movie.poster_path}/>

            <div className='Detalle'>
                <h2>{props.movie.title}</h2>
            </div>
            
        </div>
    )
}

export default Pelicula;