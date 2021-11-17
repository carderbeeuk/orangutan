import React, { Fragment, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import HomeImage from './parts/HomeImage'
import HomeCategories from './parts/HomeCategories'

export default function Home(props) {
    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | Shop and Compare Online'
    }, [props])

    return(
        <Fragment>
            <Header {...props} />
            <HomeImage {...props} />
            <HomeCategories {...props} />
            <Footer {...props} />
        </Fragment>
    )
}