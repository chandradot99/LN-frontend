import ApiService from '@/services/api.service'

const AuthService = {
  signup: async function (payload) {
    const requestData = {
      method: 'post',
      url: '/signup',
      data: payload
    }

    try {
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (error) {
    }
  },
  login: async function (payload) {
    const requestData = {
      method: 'post',
      url: '/login',
      data: payload
    }

    try {
      const response = await ApiService.customRequest(requestData)
      return response.data
    } catch (error) {
    }
  }
}

export default AuthService
