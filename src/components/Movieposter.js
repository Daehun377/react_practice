import React from 'react';
import PropTypes from 'prop-types';

const Movieposter = ({source}) => {
    return (
        <img src = {source} alt = "movieposter" />
    );
};

Movieposter.propTypes = {
    source : PropTypes.string.isRequired
};

export default Movieposter;
