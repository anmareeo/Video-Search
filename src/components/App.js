//the app will be a class based component because it it going to hold all of the different state for our application.

//Here is a summary of the process. Our react app makes use of the axios library, axios will make a request over to the YouTube API, essentially saying that we are looking for videos related to this search term, can you please send us a list? The YouTube API will respond to us with a list of videos to show on the screen. That list will be an array of objects where every object represents a different video. To make use of the api, we need to get an api key.
import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'

const KEY = 'AIzaSyB-_x54tzQ4bbG0B2Bm7MLu2hoNX0speQQ' 
//putting KEY in all caps emphasizes that this really is a constant variable that should not be changed.

class App extends React.Component {
    onTermSubmit = term => {
        youtube.get("/search", {
          params: {
            q: term,
            part: "snippet",
            type: 'video',
            maxResults: 5,
            key: `${KEY}`
          }
        });

    }
    render() {
        return(
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/> 
            </div>
        )
    }
}


export default App;