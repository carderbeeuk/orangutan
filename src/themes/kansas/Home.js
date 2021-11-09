import React, { Fragment, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function Home(props) {
    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | Online Comparison Shopping Made Simple'
    }, [props])

    return(
        <Fragment>
            <Header {...props} />
            <Footer {...props} />
        </Fragment>
    )
}