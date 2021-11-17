import axios from 'axios'
import queryString from 'query-string'
import { encode as base64_encode } from 'js-base64'
import { isMobile } from 'react-device-detect'

const typeTag = {
    getTypeTag: async (keyword) => {
        const mmBaseUrl = process.env.REACT_APP_ENVIRONMENT === 'local' ? 'http://localhost:5095' : 'https://mean-machine.carderbee.com'

        const domain = window.location.host.split('www').join('').split('.').join('')

        const systemName = queryString.parse(window.location.search).utm_source || null
        let systemObj = null
        let systemId = 0
        if(systemName) {
            systemObj = await axios.get(`${mmBaseUrl}/systems/by-name/${systemName}`).catch(err => null)
            systemId = systemObj.data['id'] || 0
        }

        const device = isMobile ? 'mobile' : 'desktop'

        const keywordObj = await axios.get(`${mmBaseUrl}/keywords/by-keyword/${keyword}`)
        const keywordId = keywordObj.data['id'] || `X_${base64_encode(keyword)}`

        const trackId = queryString.parse(window.location.search).track_id || localStorage.getItem('trackId') || 0

        const pbid = queryString.parse(window.location.search).pbid || null

        const typeTag = base64_encode(`${domain}_${systemId}_${device}_${keywordId}_${trackId}_${pbid}`)

        // console.log(typeTag)
        return typeTag
    }
}

export default typeTag