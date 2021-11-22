import { Fragment, useState, useEffect } from "react";
import { encode as base64_encode } from 'js-base64'

export default function ProductBasicVariableWidth(props) {
    const [showOfferCount, setShowOfferCount] = useState(true)
    // const [bookmarkedProducts, setBookmarkedProducts] = useState([])

    useEffect(() => {
        if('showOfferCount' in props) {
            setShowOfferCount(props.showOfferCount)
        }
        // const bookmarkedProducts = localStorage.getItem('bookmarkedProducts') || []
        // setBookmarkedProducts(bookmarkedProducts)
    }, [])

    // const bookmarkProduct = (productCode) => {
    //     var tmpProducts = [...bookmarkedProducts]
    //     if(tmpProducts.includes(productCode)) {
    //         const i = tmpProducts.indexOf(productCode)
    //         if(i > -1) tmpProducts.splice(i, 1)
    //     } else {
    //         tmpProducts.push(productCode)
    //     }
    //     setBookmarkedProducts(tmpProducts)
    //     localStorage.setItem('bookmarkedProducts', tmpProducts)
    // }

    const getRandomDiscountMessage = (product) => {
        var randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        var statement = null
        switch (randNum) {
            case 1:
                statement = `-${product._source.discount_percentage}%`
                break;
            case 2:
                statement = 'on sale'
                break;
            case 3:
                statement = `discounted`
            default:
                break;
        }

        return statement
    }
    

    return(
        <div key={props.idx} className='col-xs-6 product basic'>
            <div className='product-inner'>
                {
                    parseFloat(props.offer.product._source.discount_percentage) > 0 && parseFloat(props.offer.product._source.discount_percentage) < 75 ?
                        <div className='discount'>
                            {getRandomDiscountMessage(props.offer.product)}
                        </div> :
                        null
                }
                {/* <div className='bookmark-product' onClick={() => bookmarkProduct(props.offer.product._source.product_code)}>
                    {bookmarkedProducts.includes(props.offer.product._source.product_code) ?
                        <i className="fas fa-bookmark"></i> :
                        <i className="far fa-bookmark"></i>
                    }
                </div> */}
                <a rel="nofollow" title={props.offer.product._source.title} href={props.offer.product._source.click_out_url}>
                    <div title={props.offer.product._source.title} className='image' style={{
                        background: `url(${props.offer.product._source.image_large})`
                    }}></div>
                </a>
                <div className='product-text'>
                    <a rel="nofollow" title={props.offer.product._source.title} href={props.offer.product._source.click_out_url}>
                        <h5 className='d-none d-md-block' title={props.offer.product._source.title}>{props.offer.product._source.title}</h5>
                        <h6 className='d-md-none' title={props.offer.product._source.title}>{props.offer.product._source.title}</h6>
                    </a>
                    <hr/>
                    <p className='price'>
                        {props.offer.product._source.price_without_rebate > props.offer.product._source.price ?
                            <Fragment>
                                <span className='price-old'>
                                    {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.price_without_rebate)}
                                </span>
                                <span>
                                    {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.price)}
                                </span>
                            </Fragment> :
                            new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.price)
                        }
                    </p>
                    <p className='merchant'>{props.offer.product._source.merchant}</p>
                    <p>
                    {
                        parseFloat(props.offer.product._source.delivery_cost) === 0 ?
                            <span title={props.offer.product._source.delivery_time ? props.offer.product._source.delivery_time : null} className='shipping free'><i className="fas fa-truck"></i> Free delivery</span> :
                            <span title={props.offer.product._source.delivery_time ? props.offer.product._source.delivery_time : null} className='shipping'>{new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.delivery_cost)} delivery</span>
                    }
                    </p>
                    <a href={`/shopping/product/${base64_encode(props.offer.product._source.product_code)}`}>
                        {props.offer.offer_count > 1 && showOfferCount ?
                            <Fragment><hr/><p className='compare-link'>Compare from {props.offer.offer_count} offers</p></Fragment> :
                            <Fragment><hr/><p className='compare-link single'>View offer details</p></Fragment>
                        }
                    </a>
                </div>
            </div>
        </div>
    )
}