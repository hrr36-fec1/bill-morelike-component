import React from 'react';
import Trailer from './Trailer.jsx';

const TrailersList = (props) => {
  return (
    <div className="image_strip_and_arrows trailers more_right">
      <div className="slider_arrow slider_previous"> 
        <i className="fa fa-angle-left"></i>
      </div>
      <div className="slider_arrow slider_next">
        <i className="fa fa-angle-right"></i>
      </div>
      <div className="image_strip_wrapper">
        <div className="slider_gradient slider_previous light"></div>
        <div className="slider_gradient slider_next light"></div>
        <div className="image_strip">
          {props.movie.trailers.map((trailer) => {
            // using the thumb_url as a key for now, but would prefer to use an actual trailer ID
            return <Trailer key={trailer.thumb_url} trailer={trailer}/>
          })}
          <div className="clr"></div>
        </div>
      </div>
    </div>
  );
};

// Add PropTypes here

export default TrailersList;


// <div class="image_strip_and_arrows trailers more_right">
//   <div class="slider_arrow slider_previous"> 
//     <i class="fa fa-angle-left"></i>
//   </div>
//   <div class="slider_arrow slider_next">
//     <i class="fa fa-angle-right"></i>
//   </div>
//   <div class="image_strip_wrapper">
//     <div class="slider_gradient slider_previous light"></div>
//     <div class="slider_gradient slider_next light"></div>
//     <div class="image_strip">

//       <div class="clr"></div>
//     </div>
//   </div>
// </div>