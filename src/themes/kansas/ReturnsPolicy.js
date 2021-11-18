import React, { Fragment, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

export default function ReturnsPolicy(props) {
    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | Returns Policy'
    }, [])

    return(
        <Fragment>
            <Header {...props} />
            <div className='outer row' style={{
                margin: 0,
                minHeight: 'calc(100vh - 450px)'
            }}>
                <div className='inner-centered'>
                <h1>Returns Policy</h1>
                    <p>Last updated: November 18, 2021</p>
                    <h2>Delivery</h2>
                    <p>The delivery options available include, but are not limited to, Express, Standard, Economy, Click & Collect, and Free local collection from seller. Sellers offer a range of delivery options that may fit your needs. Many of the sellers on this site offer free delivery. You can find the sellers delivery costs and options in the listings provided.</p>
                    <h2>Returns and Refunds</h2>
                    <p>The options available to you regarding returns and refunds depend on what you want to return, why you would want to return it, and the sellers own policies in this regard. Postage costs for returning items may apply. If there is a problem with your item, e.g. if the item doesn't match the listing, is damaged, defective, or counterfeit, the seller will pay for postage. Customers in the European Union retain the right to cancel the purchase of an item within 14 days of receiving the last good ordered. In the event you would like to return an item and/or request a refund, please contact the seller directly to ensure a prompt response.</p>
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}