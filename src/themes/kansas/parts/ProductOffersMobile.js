import { useState, useEffect, Fragment } from "react"

export default function ProductOffersMobile(props) {
    const [product, setProduct] = useState()

    useEffect(() => {
        setProduct(props.product)
    })

    if(!product) return null
    return(
        <div className='product-offers'>
            {product.offers.map((offer, key) => {
                return(
                    <div key={key}>
                        <div className='row' style={{
                            borderTop: '1px solid #e0e0e0',
                            padding: '25px 0'
                        }}>
                            <div className='col-7'>
                                <p className='price'>
                                    {offer.price_without_rebate > offer.price ?
                                        <Fragment>
                                            <span className='price-old'>
                                                {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer.price_without_rebate)}
                                            </span>
                                            <span>
                                                {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer.price)}
                                            </span>
                                        </Fragment> :
                                        new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer.price)
                                    }
                                </p>
                                <p style={{
                                    color: 'grey',
                                    margin: '-10px 0 0 0'
                                }}>
                                    {parseFloat(offer.delivery_cost) === 0 || !offer.delivery_cost ?
                                        <span className='green'>Free delivery {offer.delivery_time ? `(${offer.delivery_time})` : null}</span> :
                                        `${new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer.delivery_cost)} delivery`
                                    }
                                </p>
                                <p style={{
                                    margin: 0
                                }}>{offer.merchant}</p>
                                <p>
                                    {props.getAvailability(offer)}
                                </p>
                            </div>
                            <div className='col-5'>
                                <a rel="nofollow" className='visit-store-link' href={offer.click_out_url}>Visit store</a>
                            </div>
                        </div>
                        <div className='row' style={{
                            marginTop: '-10px'
                        }}>
                            <div className='col-12' style={{
                                paddingBottom: '15px'
                            }}>
                                {/* {offer.features.length > 0 ?
                                    offer.features.map((feature, key) => {
                                        return(
                                            <p key={key} style={{
                                                marginTop: '5px'
                                            }} className='offer-feature'>{feature['label']}: {feature['value']}</p>
                                        )
                                    }) :
                                    null
                                } */}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}