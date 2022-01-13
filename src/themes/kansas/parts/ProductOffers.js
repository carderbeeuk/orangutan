import { useState, useEffect, Fragment } from "react"

export default function ProductOffers(props) {
    const [product, setProduct] = useState()

    useEffect(() => {
        setProduct(props.product)
    })

    if(!product) return null
    return(
        <div className='product-offers'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Merchant</th>
                        <th>Features</th>
                        <th>Delivery</th>
                        <th>Price</th>
                        <th>Availability</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {product.offers.map((offer, key) => {
                        return(
                            <tr key={key}>
                                <td style={{
                                    padding: '5px'
                                }}>
                                    <img title={offer.title} style={{
                                        height: '60px'
                                    }} src={offer.image_small} alt={offer.title} />
                                </td>
                                <td>
                                    <a rel="nofollow" href={offer.click_out_url}>{offer.merchant}</a>
                                </td>
                                <td style={{
                                    color: 'grey',
                                    paddingTop: '10px',
                                    paddingBottom: '15px'
                                }}>
                                    {offer.features && offer.features.length > 0 ?
                                        offer.features.map((feature, key) => {
                                            return(
                                                <p key={key} className='offer-feature'>{feature['label']}: {feature['value']}</p>
                                            )
                                        }) :
                                        null
                                    }
                                </td>
                                <td style={{color: 'grey'}}>
                                    {parseFloat(offer.delivery_cost) === 0 || !offer.delivery_cost ?
                                        <span className='green'>Free delivery {offer.delivery_time ? `(${offer.delivery_time})` : null}</span> :
                                        `${new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer.delivery_cost)} delivery`
                                    }
                                </td>
                                <td className='price'>
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
                                </td>
                                <td>
                                    {props.getAvailability(offer)}
                                </td>
                                <td style={{
                                    textAlign: 'right'
                                }}>
                                    <a rel="nofollow" className='visit-store-link' href={offer.click_out_url}>Visit store</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}