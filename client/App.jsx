import React from 'react';
import ReactDOM from 'react-dom';
import TrailersList from './components/TrailersList.jsx';

import movie1 from '../sampleData/sampleMovie.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: movie1
    };

    // fetch default movie info and trailers and setState
  }

  render () {
    return (
      <div className="trailers">
        <div className="moreLikeTitle">More Like {this.state.movie.title}</div>
        <TrailersList movie={this.state.movie}/> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));