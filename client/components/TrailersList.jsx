import React from 'react';
import Trailer from './Trailer.jsx';

const TrailersList = (props) => {
  return (
    <div className="trailers-list">
      {props.movie.trailers.map((trailer) => {
        // using the thumb_url as a key for now, but would prefer to use an actual trailer ID
        return <Trailer key={trailer.thumb_url} trailer={trailer}/>
      })}
    </div>
  );
};

// Add PropTypes here

export default TrailersList;
