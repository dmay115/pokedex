import React from 'react';
import './pokemon.css';

const Poke_img = 'https://raw.githubusercontent.com/' +
  'PokeAPI/sprites/master/sprites/pokemon/';

const Pokemon = (props) => {
    let imgSrc = `${Poke_img}${props.id}.png`;
    return (
        <div className = "Pokemon">
            <div className='Pokemon-name'>{ props.name}</div>
            <img className='Pokemon-img' src={imgSrc} />
            <div className='Pokemon-data'>Type: {props.type}</div>
            <div className='Pokemon-data'>EXP: {props.exp}</div>
        </div>
    );
};

export default Pokemon;