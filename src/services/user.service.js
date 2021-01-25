import ApiService from '@/services/api.service'

const resource = '/users'

const UserService = {
  create: async function (payload) {
    try {
      const response = await ApiService.post(resource, payload)

      return response.data
    } catch (error) {
      return error.data
    }
  },
  read: async function () {
    try {
      const response = await ApiService.get(resource)

      return response.data
    } catch (error) {
      return error.data
    }
  },
  update: async function (config, payload) {
    try {
      const response = await ApiService.put(resource + '/' + config.id, payload)

      return response.data
    } catch (error) {
      return error.data
    }
  },
  delete: async function (config) {
    try {
      const response = await ApiService.delete(resource + '/' + config.id)

      return response.data
    } catch (error) {
      return error.data
    }
  }
}

export default UserService
