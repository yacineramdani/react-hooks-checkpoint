import React from 'react'
import styled from 'styled-components';
import RatingStars from "./RatingStars";
const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    
};
const imgStyle = {
    width: "150px",
    height: "200px"
}


const MovieCard = ({title,description, posterURL, rating}) => {

    return (
        <div style={divStyle}>
            <RatingStars />
            <img src={posterURL} alt="" style={imgStyle}/>
            <h4>{title}</h4>
            <p>{description}</p>
                        
        </div>
    )
}

export default MovieCard;
