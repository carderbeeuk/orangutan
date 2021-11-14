import axios from './config/axios'
import queryString from 'query-string'

const getOffers = async (searchTerm, limit=32, market='uk') => {
    const queryParams = queryString.parse(window.location.search)
    const sort = queryParams['sort'] || 'relevance'
    const min_price = queryParams['min_price'] || null
    const max_price = queryParams['max_price'] || null
    const brand = queryParams['brand'] || null
    const category = queryParams['category'] || null
    const delivery = queryParams['delivery'] || null

    const response = await axios.get(`/product-search/${market}/${searchTerm}?limit=${limit}&sort=${sort}&min_price=${min_price}&max_price=${max_price}&brand=${brand}&category=${category}&delivery=${delivery}`)
    return response.data
}

const getProductSingle = async (productCode, market='uk') => {
    const response = await axios.get(`/product-single/${market}/${productCode}`)
    return response.data
}

const getOffersByCategory = async (categoryName, limit=32, market='uk') => {
    const queryParams = queryString.parse(window.location.search)
    const sort = queryParams['sort'] || 'relevance'
    const min_price = queryParams['min_price'] || null
    const max_price = queryParams['max_price'] || null
    const brand = queryParams['brand'] || null
    const category = queryParams['category'] || null
    const delivery = queryParams['delivery'] || null

    const response = await axios.get(`/category-search/${market}/${categoryName}?limit=${limit}&sort=${sort}&min_price=${min_price}&max_price=${max_price}&brand=${brand}&category=${category}&delivery=${delivery}`)
    return response.data
}

export { getOffers, getProductSingle, getOffersByCategory }