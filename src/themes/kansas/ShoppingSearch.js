import React, { Fragment, useEffect, useState } from 'react'
import getOffers from '../../modules/bluemind/bluemind'
import Header from './common/Header'
import Footer from './common/Footer'
import ProductBasicVariableWidth from './parts/ProductBasicVariableWidth'

export default function ShoppingSearch(props) {
    const [offers, setOffers] = useState([])

    useEffect(() => {
        document.title = props.siteConfig.siteName + ' | ' + props.match.params.searchTerm
        initOffers()
    }, [props])

    const initOffers = async () => {
        const offers = await getOffers(props.match.params.searchTerm)
        setOffers(offers)
    }

    return(
        <Fragment>
            <Header {...props} />
            <div className='outer row'>
                <div className='clearfixx'></div>
                <div className='col-md-2'>
                    filters here
                </div>
                <div className='col-md-8 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2' style={{
                    paddingTop: 0
                }}>
                    <div style={{
                        padding: '25px 10px'
                    }}>
                        <h3>{props.match.params.searchTerm}</h3>
                    </div>
                    {offers.map((offer, idx) => {
                        return(
                            <ProductBasicVariableWidth {...props} offer={offer} idx={idx} key={idx} />
                        )
                    })}
                </div>
            </div>
            <Footer {...props} />
        </Fragment>
    )
}