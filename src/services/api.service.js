import axios from 'axios'

const ApiService = {
  init (baseURL) {
    axios.defaults.baseURL = baseURL
  },

  setTokenHeader (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  },

  get (resource, data) {
    return axios.get(resource, data)
  },

  post (resource, data) {
    return axios.post(resource, data)
  },

  put (resource, data) {
    return axios.put(resource, data)
  },

  delete (resource) {
    return axios.delete(resource)
  },

  /**
   * Perform a custom Axios request.
   *
   * data is an object containing the following properties:
   *  - method
   *  - url
   *  - data ... request payload
   *  - auth (optional)
   *    - username
   *    - password
  **/
  customRequest (data) {
    return axios(data)
  }
}

export default ApiService
