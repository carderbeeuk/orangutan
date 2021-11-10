import { useState, useEffect } from "react"

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
                    <div className='row' style={{
                        borderTop: '1px solid #e0e0e0',
                        padding: '25px 0'
                    }}>
                        <div className='col-7'>
                            <p style={{
                                fontWeight: 'bold',
                                fontSize: '1.3em'
                            }}>{new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.price)}</p>
                            <p style={{
                                color: 'grey',
                                margin: '-10px 0 0 0'
                            }}>
                                {parseFloat(offer._source.delivery_cost) === 0 ?
                                    <span className='green'>Free delivery {offer._source.delivery_time ? `(${offer._source.delivery_time})` : null}</span> :
                                    `${new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(offer._source.delivery_cost)} delivery`
                                }
                            </p>
                            <p style={{
                                margin: 0
                            }}>{offer._source.merchant}</p>
                        </div>
                        <div className='col-5'>
                            <a className='visit-store-link' href={offer._source.click_out_url}>Visit store</a>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}