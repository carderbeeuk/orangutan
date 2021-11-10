import React, { useState, useEffect, Suspense } from 'react'

const site = process.env.REACT_APP_SITE ?
    process.env.REACT_APP_SITE :
    window.location.host.split('www').join('').split('.').join('')

function App() {
    const [siteConfig, setSiteConfig] = useState([])
    const Router = React.lazy(() => import(`./sites/${site}/Router`))

    const handleInit = () => {
        const config = require(`./sites/${site}/config/config`)
        setSiteConfig(config.default)
    }

    useEffect(() => {
        handleInit()
    }, [])

    return (
        <div>
            <Suspense fallback={null}>
                <Router siteConfig={siteConfig} site={site} />
            </Suspense>
        </div>
    )
}

export default App
