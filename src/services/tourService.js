import { httpRequest } from '../helpers/httpRequets'

export const getAllToursService = () => {
    return httpRequest('tour', 'get', '', false)
}
