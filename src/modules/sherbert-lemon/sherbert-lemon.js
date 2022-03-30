import axios from './config/axios'
import queryString from 'query-string'
import typeTag from '../type-tag/type-tag'
import { isMobile } from 'react-device-detect'
import { encode as base64_encode } from 'js-base64'
import { decode as base64_decode } from 'js-base64'

const clickOutBaseUrl = process.env.REACT_APP_ENVIRONMENT === 'local' ? 'http://localhost:5090/traffic/out' : 'https://buzzwagon.carderbee.com/traffic/out'
const device = isMobile ? 'mobile' : 'desktop'
const trackId = queryString.parse(window.location.search).track_id || localStorage.getItem('trackId')

const getOffers = async (searchTerm, limit=32) => {
    const queryParams = queryString.parse(window.location.search)
    const sort = queryParams['sort'] || 'relevance'
    const min_price = queryParams['min_price'] || null
    const max_price = queryParams['max_price'] || null
    const brand = queryParams['brand'] || null
    const category = queryParams['category'] || null
    const delivery = queryParams['delivery'] || null

    const response = await axios.get(`/api/product/search/${searchTerm}?format=json&limit=${limit}&sort=${sort}&min_price=${min_price}&max_price=${max_price}&brand=${brand}&category=${category}&delivery=${delivery}`)

    const typeTagStr = await typeTag.getTypeTag(searchTerm)
    response.data.map(offer => {
        const decodedTypeTagStr = base64_decode(typeTagStr)
        const encodedTypeTagStr = base64_encode(`${decodedTypeTagStr}_${offer.product._source.merchant}`)
        const offerUrl = `${offer.product._source.click_out_url}&addedParams=true&custom1=${encodedTypeTagStr}`
        var extraParams = JSON.stringify({
            'advertiser': offer.product._source.merchant,
        })
        var clickOutUrl = `${clickOutBaseUrl}?keyword=${searchTerm}&click_out_url=${base64_encode(offerUrl)}&traffic_source=kelkoo&track_id=${trackId}&device=${device}&extra_params=${extraParams}`
        offer.product._source.click_out_url = clickOutUrl
    })

    return response.data
}

const getProductSingle = async (productUUID) => {
    const response = await axios.get(`/api/product/single/${productUUID}`).catch(err => {})
    if(!response) return {}

    const typeTagStr = await typeTag.getTypeTag(productUUID)
    response.data.offers.map(offer => {
        const decodedTypeTagStr = base64_decode(typeTagStr)
        const encodedTypeTagStr = base64_encode(`${decodedTypeTagStr}_${offer.merchant}`)
        const offerUrl = `${offer.click_out_url}&addedParams=true&custom1=${encodedTypeTagStr}`
        var extraParams = JSON.stringify({
            'advertiser': offer.merchant,
        })
        var clickOutUrl = `${clickOutBaseUrl}?keyword=${productUUID}&click_out_url=${base64_encode(offerUrl)}&traffic_source=kelkoo&track_id=${trackId}&device=${device}&extra_params=${extraParams}`
        offer.click_out_url = clickOutUrl
    })

    return response.data
}

const getOffersByCategory = async (categoryID, limit=32, market='uk') => {
    const queryParams = queryString.parse(window.location.search)
    const sort = queryParams['sort'] || 'relevance'
    const min_price = queryParams['min_price'] || null
    const max_price = queryParams['max_price'] || null
    const brand = queryParams['brand'] || null
    const category = queryParams['category'] || null
    const delivery = queryParams['delivery'] || null

    const response = await axios.get(`/api/category/offers/${categoryID}?limit=${limit}&sort=${sort}&min_price=${min_price}&max_price=${max_price}&brand=${brand}&category=${category}&delivery=${delivery}`)

    const typeTagStr = await typeTag.getTypeTag(categoryID)
    response.data.map(offer => {
        const decodedTypeTagStr = base64_decode(typeTagStr)
        const encodedTypeTagStr = base64_encode(`${decodedTypeTagStr}_${offer.product._source.merchant}`)
        const offerUrl = `${offer.product._source.click_out_url}&addedParams=true&custom1=${encodedTypeTagStr}`
        var extraParams = JSON.stringify({
            'advertiser': offer.product._source.merchant,
        })
        var clickOutUrl = `${clickOutBaseUrl}?keyword=${categoryID}&click_out_url=${base64_encode(offerUrl)}&traffic_source=kelkoo&track_id=${trackId}&device=${device}&extra_params=${extraParams}`
        offer.product._source.click_out_url = clickOutUrl
    })

    return response.data
}

export { getOffers, getProductSingle, getOffersByCategory }