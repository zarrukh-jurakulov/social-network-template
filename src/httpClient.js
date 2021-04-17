import axios from 'axios'
import { BASE_URL} from './constants'

const myClient = () => {
    const instance = axios.create ({
        baseURL : BASE_URL,
        headers:  { 'API-KEY':'nFXKFbG4%2Bnbw%2B4%2FWoILB0Q%3D%3D' }
      })

      instance.interceptors.response.use( 
          (response) => {
                return response;
        }, (error) => {
                return Promise.reject(error);
      });
    return  instance
}
