import axios from 'axios'

switch (process.env.REACT_APP_ENVIRONMENT) {
    case 'production':
        axios.defaults.baseURL = 'https://sherbert-lemon.carderbee.com'
        break
    case 'development':
        axios.defaults.baseURL = 'http://localhost:8000'
        break
    case 'local':
        axios.defaults.baseURL = 'http://localhost:8000'
        break
    default:
        axios.defaults.baseURL = 'https://sherbert-lemon.carderbee.com'
        break
}

// global configuration
axios.interceptors.request.use(config => {
    const accessToken = process.env.REACT_APP_BEARER_TOKEN
    config.headers.Authorization = `Bearer ${accessToken}`

    return config
})

export default axios