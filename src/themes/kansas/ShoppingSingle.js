import React, { Fragment, useState, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { getProductSingle } from '../../modules/bluemind/bluemind'
import ProductOffers from './parts/ProductOffers'
import ProductOffersMobile from './parts/ProductOffersMobile'

export default function ShoppingSingle(props) {
    const [product, setProduct] = useState()
    const [moreShown, setMoreShown] = useState(false)

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const product = await getProductSingle(props.match.params.productCode)
        setProduct(product)
        document.title = props.siteConfig.siteName + ' | ' + product.product._source.title
    }

    if(!product) return null
    return(
        <Fragment>
            <Header {...props} />
            <div className='outer row' style={{
                margin: 0,
                minHeight: 'calc(100vh - 200px)'
            }}>
                <div className='inner-centered col-12'>
                    <div className='product-single row'>
                        <div className='col-lg-2 col-md-3'>
                            <img src={product.product._source.image_large} alt={product.product._source.title} style={{
                                maxWidth: '100%',
                                margin: '-25px 0 25px 0'
                            }} />
                        </div>
                        <div className='col-lg-9 col-md-8'>
                            <h3>{product.product._source.title}</h3>
                            <p>From <strong>{product.product._source.manufacturer}</strong></p>
                            <p style={{
                                color: 'grey'
                            }}>{product.product._source.description.length > 400 ?
                                moreShown ?
                                    <span>{product.product._source.description} <span style={{
                                        color: '#0071bc',
                                        cursor: 'pointer'
                                    }} onClick={() => setMoreShown(!moreShown)}>Less</span></span> :
                                    <span>{product.product._source.description.substring(0, 400)}... <span style={{
                                        color: '#0071bc',
                                        cursor: 'pointer'
                                    }} onClick={() => setMoreShown(!moreShown)}>More</span></span> :
                                product.product._source.description}
                            </p>
                        </div>
                    </div>
                    <div className='d-none d-md-block'>
                        <ProductOffers {...props} product={product} />
                    </div>
                    <div className='d-md-none d-lg-none d-xl-none'>
                        <ProductOffersMobile {...props} product={product} />
                    </div>
                    <div>
                        <p className='offer-disclaimer'>
                            The product information displayed on this site is updated daily. As such the stock availability and prices of some items might change in this time. Please make sure to double check prices and availability on the sellers' websites. This site shows affiliate links to products which means that we may receive a commission for any sales made.
                        </p>
                    </div>
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}