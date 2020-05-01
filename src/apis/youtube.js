import axios from "axios";
 
const KEY = 'AIzaSyB-_x54tzQ4bbG0B2Bm7MLu2hoNX0speQQ'
//putting KEY in all caps emphasizes that this really is a constant variable that should not be changed.


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});