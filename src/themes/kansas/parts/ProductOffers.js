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
                        <th>Seller</th>
                        <th>Delivery Cost</th>
                        <th>Attributes</th>
                        <th>Price</th>
                        <th>In Stock</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {product.offers.map((offer, key) => {
                        return(
                            <tr key={key}>
                                <td>
                                    <img title={offer._source.title} style={{
                                        height: '60px'
                                    }} src={offer._source.image_small} alt={offer._source.title} />
                                </td>
                                <td>
                                    <a rel="nofollow" href={offer._source.click_out_url}>{offer._source.merchant}</a>
                                </td>
                                <td style={{color: 'grey'}}>
                                    {parseFloat(offer._source.delivery_cost) === 0 ?
                                        <span className='green'>Free delivery {offer._source.delivery_time ? `(${offer._source.delivery_time})` : null}</span> :
                                        `${new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.delivery_cost)} delivery`
                                    }
                                </td>
                                <td style={{
                                    color: 'grey',
                                    paddingTop: '10px',
                                    paddingBottom: '15px'
                                }}>
                                    {offer._source.features.length > 0 ?
                                        offer._source.features.map((feature, key) => {
                                            return(
                                                <p key={key} className='offer-feature'>{feature['label']}: {feature['value']}</p>
                                            )
                                        }) :
                                        null
                                    }
                                </td>
                                <td className='price'>
                                {offer._source.price_without_rebate > offer._source.price ?
                                    <Fragment>
                                        <span className='price-old'>
                                            {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.price_without_rebate)}
                                        </span>
                                        <span>
                                            {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.price)}
                                        </span>
                                    </Fragment> :
                                    new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.price)
                                }
                                </td>
                                <td>
                                    {offer._source.in_stock ?
                                        <i className="fas fa-check-circle green"></i> :
                                        <i className="fas fa-times-circle red"></i>
                                    }
                                </td>
                                <td>
                                    <a rel="nofollow" className='visit-store-link' href={offer._source.click_out_url}>Visit store</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}