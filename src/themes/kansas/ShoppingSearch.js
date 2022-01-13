import React, { Fragment, useEffect, useState } from 'react'
import { getOffers } from '../../modules/sherbert-lemon/sherbert-lemon'
import Header from './common/Header'
import Footer from './common/Footer'
import ProductBasicVariableWidth from './parts/ProductBasicVariableWidth'
import ShoppingFilters from './parts/ShoppingFilters'
import ShoppingFiltersMobile from './parts/ShoppingFiltersMobile'
import OfferDisclaimer from './parts/OfferDisclaimer'
import BookmarkedProducts from './parts/BookmarkedProducts'

export default function ShoppingSearch(props) {
    const [offers, setOffers] = useState()
    const [bookmarkedProducts, setBookmarkedProducts] = useState([])

    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | ' + props.match.params.searchTerm
        initOffers()
        initBookmarkedProducts()
    }, [props])

    const initOffers = async () => {
        const offers = await getOffers(props.match.params.searchTerm)
        offers.map(offer => {
            if(offer.product._source.price_without_rebate > offer.product._source.price && !offer.product._source.discount_percentage) {
                offer.product._source.discount_percentage = Math.round(100 - ((offer.product._source.price / offer.product._source.price_without_rebate) * 100))
            }
        })
        setOffers(offers)
    }

    const renderShoppingFiltersMobile = () => {
        return offers.length > 0 ?
            <div className='col-12 d-lg-none d-xl-none'>
                <ShoppingFiltersMobile {...props} offers={offers} searchTerm={props.match.params.searchTerm} />
            </div> :
            null
    }

    const initBookmarkedProducts = () => {
        var bookmarkedProducts = JSON.parse(getBookmarkedProductsCookie()) || []
        setBookmarkedProducts(bookmarkedProducts)
    }

    const setBookmarkedProductsCookie = (value, days) => {
        const d = new Date()
        d.setTime(d.getTime() + (days*24*60*60*1000))
        let expires = "expires="+ d.toUTCString()
        document.cookie = "bookmarkedProducts=" + value + ";" + expires + ";path=/"
    }

    const getBookmarkedProductsCookie = () => {
        let name = "bookmarkedProducts="
        let decodedCookie = decodeURIComponent(document.cookie)
        let ca = decodedCookie.split(';')
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
            }
        }
        return null
    }

    const bookmarkProduct = (productUUID) => {
        var bookmarkedProducts = JSON.parse(getBookmarkedProductsCookie()) || []
        if(bookmarkedProducts.includes(productUUID)) {
            const i = bookmarkedProducts.indexOf(productUUID)
            if(i > -1) bookmarkedProducts.splice(i, 1)
        } else {
            bookmarkedProducts.push(productUUID)
        }

        setBookmarkedProducts(bookmarkedProducts)
        setBookmarkedProductsCookie(
            JSON.stringify(bookmarkedProducts),
            1
        )
    }

    const removeBookmarkedProduct = (productUUID) => {
        var productUUID = productUUID
        var bookmarkedProducts = JSON.parse(getBookmarkedProductsCookie()) || []
        const i = bookmarkedProducts.indexOf(productUUID)
        if(i > -1) bookmarkedProducts.splice(i, 1)

        setBookmarkedProducts(bookmarkedProducts)
        setBookmarkedProductsCookie(
            JSON.stringify(bookmarkedProducts),
            1
        )
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
                                <ProductBasicVariableWidth
                                    {...props}
                                    offer={offer}
                                    idx={idx}
                                    key={idx}
                                    bookmarkProduct={bookmarkProduct}
                                    bookmarkedProducts={bookmarkedProducts} />
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
                <BookmarkedProducts
                    {...props}
                    bookmarkedProducts={bookmarkedProducts}
                    removeBookmarkedProduct={removeBookmarkedProduct} />
                {renderProducts()}
                <div className='outer inner-centered'>
                    <OfferDisclaimer centered={true} />
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}