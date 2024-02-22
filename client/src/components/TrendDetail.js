import React from "react";

const TrendDatail = (props) => {
    const {name, overview, poster_path, vote_average, profession } = props
    
    return(
        <>
 <h1> Name: {name}</h1>
            {overview !== null && <h2>Overview: {overview}</h2>}
            {profession && <h2>Profession: {profession}</h2>}
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name} />
            <h2>Rating: {vote_average}</h2>
        </>
        
    )
}

export default TrendDatail;