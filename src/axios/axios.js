import axios from 'axios';

const instance = axios.create({
  baseURL: ' https://us-central1-clone-60d22.cloudfunctions.net/api' // the API (cloud function) URL
});

export default instance;

// local api: http://localhost:5001/clone-60d22/us-central1/api
