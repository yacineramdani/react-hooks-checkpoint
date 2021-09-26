import React, { Component, useState } from 'react';
import MovieCard from './MovieCard';
import RatingStars from './RatingStars';
const divStyle = {
    backgroundColor : "#666",
    height: "100vh"
}
const inputStyle = {
    borderRadius: "20px",
    outline: "none",
    border: "none",
    margin: "30px 0 0 600px",
    height: "30px",
    width: "250px",
    padding: "0 20px 0 20px"
}
const gridStyle = {
    margin: "50px 0 0 150px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    width: "80%",
    gap: "20px",
   
}
const MovieList = () => {
    const [info, setInfo] = useState([
        {
            "title": "V for Vandetta",
            "poster": "http://i.ebayimg.com/00/s/NTAwWDMzMw==/z/VIsAAOxyaTxTWIqs/$_3.JPG?set_id=2",
            "rating": 5,
            "description": "In a futuristic, totalitarian Britain, a freedom fighter known simply as V, uses terrorist tactics to fight the oppressive society. Evey aids him in his mission to bring down the government."
        },
        {
            "title": "The Detachement",
            "poster": "https://collider.com/wp-content/uploads/detachment-poster-2.jpg",
            "rating": 4,
            "description": "Henry Barthes (Adrien Brody) is a substitute teacher who shuns emotional connections, and never stays long enough in one district to bond with his students or colleagues. "
        },
        {
            "title": "The experiment",
            "poster": "https://images-na.ssl-images-amazon.com/images/I/51UFOnvEviL.jpg",
            "rating": 5,
            "description": "Twenty-six subjects are chosen to participate in a psychological experiment. While one group plays the role of prison guards, the others play inmates. Can the guards maintain order when mutiny erupts?"
        },
        {
            "title": "Inception",
            "poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
            "rating": 4,
            "description": "Initiation or Transplant is a 2010 science fiction movie written, directed and produced by Christopher Nolan. The film stars Leonardo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Ellen Page, Cillian Murphy, Tom Hardy, Delibi Rao, Tom Bringer and Michael Kane."
        }
        ]
    );
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    return (
        <div style={divStyle}>
            <input type="text" placeholder="Search" style={inputStyle} onChange={handleSearch} />
            <div className="grid" style={gridStyle}>
                {info.filter((movie) => { if(search ==""){ return movie}else if(movie.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ){  return movie}}).map((movie) => {
                return (<MovieCard rating={movie.rating} posterURL={movie.poster} title={movie.title}></MovieCard>)
                })}
            </div>
        </div>
    )
}
export default MovieList;
    

