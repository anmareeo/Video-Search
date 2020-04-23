import axios from "axios";

const KEY = 'AIzaSyB-_x54tzQ4bbG0B2Bm7MLu2hoNX0speQQ' 
 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})