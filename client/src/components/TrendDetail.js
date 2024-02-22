import React from "react";
import result from "../FetchedDatas/tmdb_Trending_All_Request"
const TrendDatail = (props) => {
    const {name, overview, poster_path, vote_average } = props
    
    return(
        <>
            <h1> Name: {name}</h1>
            <h2>Overview :{overview}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
            <h2>Rating:{vote_average}</h2>
        </>
        
    )
}

export default TrendDatail;