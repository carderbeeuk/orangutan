import React, { Fragment, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import HomeCategories from './parts/HomeCategories'

export default function Home(props) {
    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | Online Comparison Shopping Made Simple'
    }, [props])

    return(
        <Fragment>
            <Header {...props} />
            <HomeCategories {...props} />
            <Footer {...props} />
        </Fragment>
    )
}