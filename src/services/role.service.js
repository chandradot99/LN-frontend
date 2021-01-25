import ApiService from '@/services/api.service'

const resource = '/roles'

const RoleService = {
  read: async function () {
    try {
      const response = await ApiService.get(resource)

      return response.data
    } catch (error) {
      return error.data
    }
  }
}

export default RoleService
