import React from "react";

const FilmDetail = (props) => {
    const {original_title, poster_path, overviewValue, vote_average } = props
    
    return(
        <>
            <h1>{original_title}</h1>
            <h2>overview :{overviewValue}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            <h2>Rating:{vote_average}</h2>
        </>
        
    )
}

export default FilmDetail;