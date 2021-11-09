import { Fragment } from "react";
import { encode as base64_encode } from 'js-base64'

export default function ProductBasicVariableWidth(props) {
    return(
        <div key={props.idx} className='col-xs-6 product basic'>
            <div className='product-inner'>
                {
                    parseFloat(props.offer.product._source.discount_percentage) > 0 && parseFloat(props.offer.product._source.discount_percentage) < 60 ?
                        <div className='discount'>
                            save {props.offer.product._source.discount_percentage}%
                        </div> :
                        null
                }
                <a href={props.offer.product._source.click_out_url}>
                    <div title={props.offer.product._source.title} className='image' style={{
                        background: `url(${props.offer.product._source.image_large})`
                    }}></div>
                </a>
                <div className='product-text'>
                    <a href={props.offer.product._source.click_out_url}>
                        <h5 className='d-none d-md-block' title={props.offer.product._source.title}>{props.offer.product._source.title}</h5>
                        <h6 className='d-md-none' title={props.offer.product._source.title}>{props.offer.product._source.title}</h6>
                        <hr/>
                        <p className='price'>
                            {new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.price)}
                        </p>
                        <p className='merchant'>{props.offer.product._source.merchant}</p>
                        <p>
                        {
                            parseFloat(props.offer.product._source.delivery_cost) === 0 ?
                                <span title={props.offer.product._source.delivery_time ? props.offer.product._source.delivery_time : null} className='shipping free'>Free delivery</span> :
                                <span title={props.offer.product._source.delivery_time ? props.offer.product._source.delivery_time : null} className='shipping'>{new Intl.NumberFormat(props.siteConfig.locale, { style: 'currency', currency: props.siteConfig.currency }).format(props.offer.product._source.delivery_cost)} delivery</span>
                        }
                        </p>
                    </a>
                    <a href={`/shopping/product/${base64_encode(props.offer.product._source.product_codes.join('_'))}`}>
                        {props.offer.offer_count > 1 ? <Fragment><hr/><p className='compare-link'>Compare from {props.offer.offer_count} offers</p></Fragment> : null}
                    </a>
                </div>
            </div>
        </div>
    )
}