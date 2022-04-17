import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("land");


  //useEffect joue une fonction une seule fois quand le composant est monté
  //sauf si on précise de rejouer dans le [callback]
  useEffect(()=> { //API
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`)
    .then((response) => setMoviesData(response.data.results));
  }, [search])

  return (
    <div className='form-component'>
      <div className='form-container'>
        <form>
          <input type='text' placeholder='Entrez un titre'
          id='search-input'/>
          <input type='submit' value='Rechercher' />
        </form>
        <div className='btn-sort-container'>
          <div className="bnt-sort" id="goodToBad">Top<span>&#8594;</span></div>
          <div className="bnt-sort" id="badToGood">Flop<span>&#8594;</span></div>
        </div>
        {/* injection du résultat */}
        <div className='result'>
          {moviesData.slice(0, 12).map((movie) => (
            <Card key={movie.id} props={movie}/> //La donnée (chaque fiche film) peut être passée dans un composant grâce à un props
          ))}
        </div>
      </div>

    </div>
  );
};

export default Form;
