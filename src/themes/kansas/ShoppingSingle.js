import React, { Fragment, useState, useEffect } from 'react'
import Header from './common/Header'
import Footer from './common/Footer'
import { getProductSingle } from '../../modules/sherbert-lemon/sherbert-lemon'
import ProductOffers from './parts/ProductOffers'
import ProductOffersMobile from './parts/ProductOffersMobile'
import OfferDisclaimer from './parts/OfferDisclaimer'

export default function ShoppingSingle(props) {
    const [product, setProduct] = useState()
    const [moreShown, setMoreShown] = useState(false)

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const product = await getProductSingle(props.match.params.productCode)
        setProduct(product)
        if(!product) {
            document.title = ''
        } else {
            document.title = product // 👈 null and undefined check
                && Object.keys(product).length === 0
                && Object.getPrototypeOf(product) === Object.prototype ?
                    '' :
                    props.siteConfig.siteName + ' | ' + product.product._source.title
        }
    }

    const renderProduct = () => {
        if(!product) {
            return null
        } else if(product // 👈 null and undefined check
            && Object.keys(product).length === 0
            && Object.getPrototypeOf(product) === Object.prototype) {
            return (
                <div className='inner-centered' style={{
                    maxWidth: '600px',
                    paddingTop: 0,
                }}>
                    <img
                        src={`/images/${props.siteConfig.site}/not_found_magnifying_glass.png`}
                        alt={`${props.siteConfig.siteName}`}
                        className='col-12'
                        style={{
                            display: 'block',
                            margin: '0 auto'
                        }} />
                    <h2 style={{
                        textAlign: 'center'
                    }}>Product Not Found</h2>
                    <p style={{
                        textAlign: 'center'
                    }}>This product doesn't seem to be available right now, feel free to try again later, or try another search.</p>
                </div>
            )
        } else {
            return (
                <div className='inner-centered col-12'>
                    <div className='product-single row'>
                        <div className='col-lg-2 col-md-3'>
                            <img src={product.product._source.image_large} alt={product.product._source.title} style={{
                                maxWidth: '100%',
                                margin: '-25px 0 25px 0'
                            }} />
                        </div>
                        <div className='col-lg-10 col-md-8'>
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
                    <OfferDisclaimer />
                </div>
            )
        }
    }

    return(
        <Fragment>
            <Header {...props} />
            <div className='outer row' style={{
                margin: '0 auto',
                maxWidth: '1450px',
                minHeight: 'calc(100vh - 450px)'
            }}>
                {renderProduct()}
            </div>
            <Footer {...props} />
        </Fragment>
    )
}