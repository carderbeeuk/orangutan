import { useState, useEffect } from "react"

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
                        <th>Seller</th>
                        <th>Delivery Cost</th>
                        <th>Delivery Time</th>
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
                                    <a href={offer._source.click_out_url}>{offer._source.merchant}</a>
                                </td>
                                <td style={{color: 'grey'}}>
                                    {parseFloat(offer._source.delivery_cost) === 0 ?
                                        <span className='green'>Free delivery</span> :
                                        new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.delivery_cost)
                                    }
                                </td>
                                <td style={{color: 'grey'}}>
                                    {offer._source.delivery_time}
                                </td>
                                <td style={{fontWeight: 'bold'}}>
                                    {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.price)}
                                </td>
                                <td>
                                    {offer._source.in_stock ?
                                        <i className="fas fa-check-circle green"></i> :
                                        <i class="fas fa-times-circle red"></i>
                                    }
                                </td>
                                <td>
                                    <a className='visit-store-link' href={offer._source.click_out_url}>Visit store</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}