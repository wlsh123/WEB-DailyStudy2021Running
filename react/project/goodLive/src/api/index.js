import base from './base'
import { httpGet } from '../utils/http'
 
const api = {
  getHomehot1(){
    return httpGet(base.homehot1);
  },
  getHomehot2() {
    return httpGet(base.homehot2);
  }
}

export default api;