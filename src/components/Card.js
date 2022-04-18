import React from 'react';

//Les props sont récupérées dans les paramètres de la fonction qui définit notre composant
const Card = ({props}) => {

  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-"); //Découpe la date selon le caractère "-"
    return [dd, mm, yy].join("/"); //Ajoute un slash entre les éléments du tableau
  };

  const genreFinder = () => {
    let genreArray = [];
    //On boucle tant qu'il y a un id
    for (let i = 0; i < props.genre_ids.length; i++) {
      switch (props.genre_ids[i]) { //On prend en compte la valeur de l'id
        case 28: //Si id[i] = 28
          genreArray.push('Action'); //Ajout du genre correspondant dans le tableau
          break;
        case 12:
          genreArray.push('Aventure');
          break;
        case 16:
          genreArray.push('Animation');
          break;
        case 35:
          genreArray.push('Comédie');
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>); //Clef : chaque genre est unique. Injecte des <li> contenant un genre
  };

  const addStorage = () => {
    alert('BAM !');
  }

  return (
    <div className='card'> {/*Ternaire avec le poster des films */}
      <img src={props.poster_path ?
        "https://image.tmdb.org/t/p/w500" + props.poster_path : "./img/poster.jpg"} alt="poster de film" />
      <h2>{props.title}</h2> {/* Ternaire avec la date de sortie */}
      {props.release_date ? <h5>Sorti le : {dateFormater(props.release_date)}</h5>  : "" }
      <h4>
       {props.vote_average}/10 <span>&#9733;</span>
      </h4>

      <ul>{genreFinder()}</ul> {/* /!\ Fonction appelée dans un ul */}
      {props.overview ? <p>{props.overview}</p>  : "" } {/* Ternaire synopsis */}


      <div className='btn' onClick={() => addStorage() }>Ajouter aux favoris</div> {/* Event ajouter aux favoris */}
    </div>
  );
};

export default Card;
