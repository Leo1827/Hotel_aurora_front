import { httpRequest } from '../helpers/httpRequets'

export const getProductsService = () => {
    return httpRequest('product', 'get', '', false)
}

export const getProductByIdService = (id) => {
    return httpRequest(`product/${id}`, 'get', '', false)
}
