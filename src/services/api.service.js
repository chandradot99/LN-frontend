import axios from 'axios'

const ApiService = {
  init (baseURL) {
    axios.defaults.baseURL = baseURL
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
  }
}

export default ApiService
