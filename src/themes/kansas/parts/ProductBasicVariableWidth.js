import { Fragment, useState, useEffect } from "react";

export default function ProductBasicVariableWidth(props) {
    const [showOfferCount, setShowOfferCount] = useState(true)

    useEffect(() => {
        if('showOfferCount' in props) {
            setShowOfferCount(props.showOfferCount)
        }
    }, [])

    const getRandomDiscountMessage = (product) => {
        var randNum = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
        var statement = null
        switch (randNum) {
            case 1:
                statement = `save ${product._source.discount_percentage}%`
                break;
            case 2:
                statement = `save ${product._source.discount_percentage}%`
                break;
            case 3:
                statement = `save ${product._source.discount_percentage}%`
            default:
                break;
        }

        return statement
    }

    const uet_report_conversion = () => {
        window.uetq = window.uetq || []
        window.uetq.push("event", "clickout", {"revenue_value":"0.1","currency":"GBP"})
        return true
    }

    const handleTracking = (e) => {
        e.preventDefault()
        if(uet_report_conversion()) {
            // console.log(e.target.closest('a').href)
            window.location.href = e.target.closest('a').href
        }
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
                <div className='bookmark-product' title='bookmark this product' onClick={() => props.bookmarkProduct(props.offer.product._source.product_uuid)}>
                    {props.bookmarkedProducts.includes(props.offer.product._source.product_uuid) ?
                        <i className="fas fa-bookmark"></i> :
                        <i className="far fa-bookmark"></i>
                    }
                </div>
                <a rel="nofollow" title={props.offer.product._source.title} href={props.offer.product._source.click_out_url} onClick={handleTracking}>
                    <div title={props.offer.product._source.title} className='image' style={{
                        background: `url(${props.offer.product._source.image_large})`
                    }}></div>
                </a>
                <div className='product-text'>
                    <a rel="nofollow" title={props.offer.product._source.title} href={props.offer.product._source.click_out_url} onClick={handleTracking}>
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
                        parseFloat(props.offer.product._source.delivery_cost) === 0 || !props.offer.product._source.delivery_cost ?
                            <span title={props.offer.product._source.delivery_time ? props.offer.product._source.delivery_time : null} className='shipping free'><i className="fas fa-truck"></i> Free delivery</span> :
                            <span title={props.offer.product._source.delivery_time ? props.offer.product._source.delivery_time : null} className='shipping'>{new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.delivery_cost)} delivery</span>
                    }
                    </p>
                    <a href={`/shopping/product/${props.offer.product._source.product_uuid}`}>
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