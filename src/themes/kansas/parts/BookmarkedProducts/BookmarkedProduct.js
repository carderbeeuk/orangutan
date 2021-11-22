import { useState, useLayoutEffect } from "react"
import { getProductSingle } from '../../../../modules/sherbert-lemon/sherbert-lemon'

export default function BookmarkedProduct(props) {
    const [product, setProduct] = useState()

    useLayoutEffect(() => {
        initProduct()
    }, [])

    const initProduct = async () => {
        const product = await getProductSingle(props.productCode)
        setProduct(product)
    }

    if(!product) return null
    return(
        <div className='bookmarked-product'>
            <i style={{
                cursor: 'pointer'
            }} className='fas fa-times' onClick={() => props.removeBookmarkedProduct(props.productCode)}></i>
            <a href={`/shopping/product/${props.productCode}`}>
                <div title={product.product._source.title} className='image' style={{
                    background: `url(${product.product._source.image_large})`
                }}></div>
            </a>
        </div>
    )
}