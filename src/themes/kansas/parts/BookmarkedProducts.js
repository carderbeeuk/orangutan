import BookmarkedProduct from './BookmarkedProducts/BookmarkedProduct'
import { Fragment } from 'react'
import { isMobile } from 'react-device-detect'

export default function BookmarkedProducts(props) {
    if(props.bookmarkedProducts.length < 1) return null
    return(
        <Fragment>
            <div className='bookmarked-products col-12'>
                <h6>
                    <i style={{
                        marginRight: '10px'
                    }} className="fas fa-bookmark"></i> Saved Products
                </h6>
                <div className={isMobile ?
                    'bookmarked-products-inner scrollable' :
                    'bookmarked-products-inner'
                }>
                    {props.bookmarkedProducts.map((rawproductUUID, key) => {
                        const productUUID = rawproductUUID
                        return(
                            <BookmarkedProduct {...props} productUUID={productUUID} removeBookmarkedProduct={props.removeBookmarkedProduct} />
                        )
                    })}
                </div>
            </div>
            <div className='clearfixx' />
        </Fragment>
    )
}