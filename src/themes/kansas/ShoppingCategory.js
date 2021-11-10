import React, { Fragment, useEffect, useState } from 'react'
import { getOffersByCategory } from '../../modules/bluemind/bluemind'
import Header from './common/Header'
import Footer from './common/Footer'
import ProductBasicVariableWidth from './parts/ProductBasicVariableWidth'
import ShoppingFilters from './parts/ShoppingFilters'
import ShoppingFiltersMobile from './parts/ShoppingFiltersMobile'

export default function ShoppingSearch(props) {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | ' + props.match.params.categoryId
        initOffers()
    }, [props])

    const initOffers = async () => {
        const offers = await getOffersByCategory(props.match.params.categoryId)
        console.log(offers)
        setOffers(offers)
    }

    return(
        <Fragment>
            <Header {...props} />
            <div className='outer row' style={{
                margin: 0,
                minHeight: 'calc(100vh - 200px)'
            }}>
                <div className='col-md-2 d-none d-lg-block' style={{
                    paddingRight: 0
                }}>
                    <ShoppingFilters {...props} offers={offers} searchTerm={props.match.params.searchTerm} />
                </div>
                <div className='col-12 d-lg-none d-xl-none'>
                    <ShoppingFiltersMobile {...props} offers={offers} searchTerm={props.match.params.searchTerm} />
                </div>
                <div className='col-md-12 col-lg-10 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2' style={{
                    paddingTop: 0,
                    maxWidth: '1200px'
                }}>
                    <div style={{
                        padding: '25px 10px'
                    }}>
                        <h3>'{props.match.params.categoryId}'</h3>
                    </div>
                    <div className='clearfixx'></div>
                    {offers.map((offer, idx) => {
                        return(
                            <ProductBasicVariableWidth {...props} offer={offer} idx={idx} key={idx} showOfferCount={false} />
                        )
                    })}
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}