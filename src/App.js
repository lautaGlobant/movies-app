import Header from './Header';
import Catalogo from './Catalogo';
import './App.scss';
import creds from './CONFIG.js';
import { useEffect, useState } from 'react';

const fetchMovies = async(filter, type) => {
  let URL = 'https://api.themoviedb.org/3/';

  if(type === 'ESTRENO'){
    URL = URL + 'movie/upcoming?api_key='+ creds.api_key +'&language=en-US&page=1'; 
  }else if(type === 'SEARCH'){
    URL = URL + 'search/movie?api_key='+ creds.api_key +'&language=en-US&query='+filter+'&page=1&include_adult=false';
  }else if(type === 'SERIES') {
    URL = URL + 'tv/popular?api_key='+ creds.api_key +'&language=en-US&page=1';
  }else if(type === 'DISCOVER'){
    URL = URL + 'discover/movie?api_key='+ creds.api_key +'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
  }

  const movies = await fetch(URL);
  const res = await movies.json();
  return res.results;
}

function App() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState();
  const [type, setType] = useState('ESTRENO');

  console.log(creds);

  useEffect(() => {
      fetchMovies(filter, type)
          .then((res) => {console.log(res); setMovies(res)})
  }, [filter])

  return (
      <>
        <Header changeFilter={(filter, type) => { setFilter(filter); setType(type) }} />
        <Catalogo movieList={movies}/>
      </>
    );
}

export default App;
