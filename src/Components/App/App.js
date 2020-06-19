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
      playlistTracks: [{name: 'The Scientist', artist: 'Coldplay', album: 'A Rush of Blood to the Head', id: 7},
                      {name: 'Harder to Breathe', artist: 'Maroon 5', album: 'Songs About Jane', id: 8},
                      {name: 'Pyramid Song', artist: 'Radiohead', album: 'Amnesiac', id: 9}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if(tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    tracks.push(track);
    this.setState({ playlistTracks: tracks })
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks = tracks.filter(currentTrack => currentTrack.id !== track.id);

    this.setState({playlistTracks: tracks})
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    // alert('this method is button correctly!')
    const trackUris = this.state.playlistTracks.map(track => track.uri);
  }

  search(term) {
    console.log(term);
    
  }

  render() {
    return (
      <div>
        <h1><span className="highlight">Music </span>Timing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks}
                      onRemove={this.removeTrack}
                      onNameChange={this.updatePlaylistName}
                      onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
