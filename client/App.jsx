import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import TrailersList from './components/TrailersList.jsx';

import movie1 from '../sampleData/sampleMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: movie1
    };

    // fetch default movie info and trailers and setState
    this.getMovieData = this.getMovieData.bind(this);
  }

  componentDidMount() {
    this.getMovieData()
      .then((res) => {
        let newMovie = res.data[0];
        this.setState({ movie : newMovie });
      });
  }

  getMovieData(movie_slug = 'jurassic-park') {
    return axios.get(`/api/movies/${movie_slug}/trailers`)
  }

  render () {
    return (
      <div className="gu4">
        <div className="fxdcol gu12 pad_top1" style={{width: "100%"}}>
          <div className="trailers_strip pad_top1 pad_btm2 bump_section">
            <div className="title_bump pad_btm1">
              <div className="section_title bold">
                <div className="fl oswald">More From {this.state.movie.title}</div>
                <div className="see_all fwnorm fr"></div>
                <div className="clr"></div>
              </div>
            </div>
            <TrailersList movie={this.state.movie}/> 
            <div className="marg_top1">
              <a className="see_all boxed oswald" href={`https://www.imdb.com/title/tt${this.state.movie.imdb_id}/videogallery`}>SEE ALL TRAILERS</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
