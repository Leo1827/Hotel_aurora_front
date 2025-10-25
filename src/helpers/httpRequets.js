import axios from 'axios'

// global axios defaults
const baseURL =
    import.meta.env.VITE_NODE_ENVIRONMENT === 'dev'
        ? import.meta.env.VITE_BACKEND_URL_DEV
        : import.meta.env.VITE_BACKEND_URL_PROD

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.patch['Content-Type'] = 'application/json'

export const httpRequest = async (url, method, data, auth) => {
    const config = {
        method,
        data,
        url: baseURL + url,
    }
    if (auth) {
        const token = localStorage.getItem('token')
        config.headers = {
            Authorization: 'Bearer ' + token,
        }
    }
    try {
        const response = await axios(config)
        const resp = JSON.stringify(response.data)
        return resp
    } catch (e) {
        const errorMsg = JSON.stringify(e?.response?.data?.message)
        if (errorMsg === '"Unauthorized"') {
            localStorage.removeItem('token')
            location.reload()
        }
        throw new Error(errorMsg)
    }
}
