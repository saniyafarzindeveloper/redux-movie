import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';


function App() {
  return (
    <div className="App">
      {/* Project Setup */}
      <Navbar />
      <div className="main" >
        <div className="tabs">
          <div className="tabs">Movies</div>
          <div className="tabs">Favourites</div>
        </div>

        <div className="list">
            {data.map(( movie, index )=>(
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
        </div>

      </div>
    </div>
  );
}

export default App;
