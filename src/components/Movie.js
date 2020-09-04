import React from 'react';
import PropTypes from "prop-types";
import Poster from "../components/Movieposter";
import "../App.css"


const Movie = ({title, poster}) => {
    return (
        <div className={"App"}>
            <h1>{title}</h1>
            <Poster source={poster}/>
        </div>
    );
};


Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;
