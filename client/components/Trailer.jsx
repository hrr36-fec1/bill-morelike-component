import React from 'react';

const Trailer = (props) => {
  return (
    <div className="product">
      <a href={props.trailer.trailer_url}>
        <div className="img_wrapper">
          <img src={props.trailer.thumb_url} alt={props.trailer.trailer_title} />
          <div className="stats_wrapper">
            <span className="duration">{props.trailer.duration}</span>
            <span className="count">
              <i className="fa fa-eye" aria-hidden="true"></i>
               {props.trailer.watch_count}
            </span>
          </div>
          <div className="play_button">
            <i className="fa fa-play"></i>
          </div>
        </div>
      </a>
      <div className="title_wrapper">
        <a href={props.trailer.trailer_url}>
          <span className="title">{props.trailer.trailer_title}</span>
        </a>
      </div>
    </div>
  );
};

export default Trailer;

// <div className="trailer">
// {props.trailer.trailer_title}
// </div>

// <div id="mctid_1081776" class="product">
//   <a href="/movie/the-godfather/trailers/1081776">
//     <div class="img_wrapper">
//       <img src="https://content.internetvideoarchive.com/content/photos/7634/586_064.jpg" alt="The Godfather" />
//       <div class="stats_wrapper">
//         <span class="duration">3:44</span>
//         <span class="count">
//           <i class="fa fa-eye" aria-hidden="true"></i>
//            771
//         </span>
//       </div>
//       <div class="play_button">
//         <i class="fa fa-play"></i>
//       </div>
//     </div>
//   </a>
//   <div class="title_wrapper">
//     <a href="/movie/the-godfather/trailers/1081776">
//       <span class="title">The Godfather</span>
//     </a>
//   </div>
// </div>
