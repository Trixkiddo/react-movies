import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortGoodBad, setSortGoodBad] = useState(null); //De base : pas de tri effectué


  //UseEffect joue une fonction une seule fois quand le composant est monté
  //Sauf si l'on précise de rejouer dans le [callback]
  useEffect(()=> { //API
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`)
    .then((response) => setMoviesData(response.data.results));
  }, [search]) //Callback relance useEffect à chaque fois que la variable search évolue

  return (
    <div className='form-component'>
      <div className='form-container'>
        <form>
          <input type='text' placeholder='Entrez un titre'
          id='search-input' onChange={(e) => setSearch(e.target.value)} /> {/* event qui détecte changements dans input */}
          <input type='submit' value='Rechercher'/>
        </form>
        <div className='btn-sort-container'>
          <div className="bnt-sort" id="goodToBad" onClick={() => setSortGoodBad("goodToBad")}>Top<span>&#8594;</span></div> 
          <div className="bnt-sort" id="badToGood" onClick={() => setSortGoodBad("badToGood")}>Flop<span>&#8594;</span></div>
        </div>
        {/* injection du résultat */}
        <div className='result'>
          {moviesData
          .slice(0, 12)
          .sort((a, b) => { // a : plus petit, b : plus grand
            if(sortGoodBad === "goodToBad") {  // comparaison variable avec l'id du btn flèche
              return b.vote_average - a.vote_average // ordre décroissant des notes
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average
            }
          })
          .map((movie) => (
            <Card key={movie.id} props={movie}/> //La donnée (chaque fiche film) peut être passée dans un composant grâce à un props
          ))}
        </div>
      </div>

    </div>
  );
};

export default Form;
