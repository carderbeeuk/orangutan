import React, { Fragment, useEffect, useState } from 'react'
import { getOffers } from '../../modules/sherbert-lemon/sherbert-lemon'
import Header from './common/Header'
import Footer from './common/Footer'
import ProductBasicVariableWidth from './parts/ProductBasicVariableWidth'
import ShoppingFilters from './parts/ShoppingFilters'
import ShoppingFiltersMobile from './parts/ShoppingFiltersMobile'

export default function ShoppingSearch(props) {
    const [offers, setOffers] = useState()

    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | ' + props.match.params.searchTerm
        initOffers()
    }, [props])

    const initOffers = async () => {
        const offers = await getOffers(props.match.params.searchTerm)
        setOffers(offers)
    }

    const renderShoppingFiltersMobile = () => {
        return offers.length > 0 ?
            <div className='col-12 d-lg-none d-xl-none'>
                <ShoppingFiltersMobile {...props} offers={offers} searchTerm={props.match.params.searchTerm} />
            </div> :
            null
    }

    const renderProducts = () => {
        if(!offers) {
            return null
        } else if(offers // 👈 null and undefined check
            && offers.length === 0) {
            return(
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
                    }}>No Results Found for '{props.match.params.searchTerm}'</h2>
                    <p style={{
                        textAlign: 'center'
                    }}>We couldn't find any results for that query. Please try to refine your search or try searching different terms.</p>
                </div>
            )
        } else {
            return(
                <Fragment>
                    <div className='col-md-2 d-none d-lg-block' style={{
                        paddingRight: 0
                    }}>
                        <ShoppingFilters {...props} offers={offers} searchTerm={props.match.params.searchTerm} />
                    </div>
                    {renderShoppingFiltersMobile()}
                    <div className='col-md-12 col-lg-10 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2' style={{
                        paddingTop: 0,
                        maxWidth: '1200px'
                    }}>
                        <div style={{
                            padding: '25px 10px'
                        }}>
                            <h3>'{props.match.params.searchTerm}'</h3>
                        </div>
                        <div className='clearfixx'></div>
                        {offers.map((offer, idx) => {
                            return(
                                <ProductBasicVariableWidth {...props} offer={offer} idx={idx} key={idx} />
                            )
                        })}
                    </div>
                </Fragment>
            )
        }
    }

    if(!offers) return null
    return(
        <Fragment>
            <Header {...props} />
            <div className='outer row' style={{
                margin: 0,
                minHeight: 'calc(100vh - 450px)'
            }}>
                {renderProducts()}
                <div className='outer inner-centered'>
                    <p className='offer-disclaimer' style={{
                        margin: '0 auto'
                    }}>
                        The product information displayed on this site is updated daily. As such the stock availability and prices of some items might change in this time. Please make sure to double check prices and availability on the sellers' websites. This site shows affiliate links to products which means that we may receive a commission for any sales made.
                    </p>
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}