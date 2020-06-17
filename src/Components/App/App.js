import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{name: 'Maroon 5', artist: 'Memories', album: 'Memories', id: 1},
                      {name: 'Maroon 5', artist: 'Girls Like You', album: 'Red Pill Blues ', id: 2},
                      {name: 'Maroon 5', artist: 'Sunday Morning', album: 'Songs About Jane', id: 3},
                      {name: 'Maroon 5', artist: 'She Will Be Loved', album: 'Songs About Jane', id: 4},
                      {name: 'Maroon 5', artist: 'Moves Like Jagger', album: 'Hands All Over', id: 5},
                      {name: 'Maroon 5', artist: 'One More Night', album: 'One More Night', id: 6}],
      playlistName: 'My Playlist',
      playlistTracks: [{name: 'The Scientist', artist: 'Coldplay', album: 'A Rush of Blood to the Head', id: 4},
                      {name: 'Harder to Breathe', artist: 'Maroon 5', album: 'Songs About Jane', id: 5},
                      {name: 'Pyramid Song', artist: 'Radiohead', album: 'Amnesiac', id: 6}]
    }
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Music </span>Timing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
