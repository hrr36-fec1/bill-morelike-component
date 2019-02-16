import React from 'react';

const Trailer = (props) => {
  return (
     <div className="trailer">
       {props.trailer.trailer_title}
     </div>
  );
};

export default Trailer;