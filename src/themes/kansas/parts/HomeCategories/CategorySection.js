import ProductBasicVariableWidth from '../ProductBasicVariableWidth'
import { getOffersByCategory } from '../../../../modules/sherbert-lemon/sherbert-lemon'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CategorySection(props) {
    const [offers, setOffers] = useState([])

    useEffect(() =>{
        init()
    }, [])

    const init = async () => {
        const offers = await getOffersByCategory(props.category.key, 5)
        setOffers(offers)
    }

    return(
        <div className='outer'>
            <div className='inner-centered' style={{
                padding: '40px 10px 0 10px',
                marginBottom: '-20px'
            }}>
                <h3>{props.category.title}</h3>
                <p style={{
                    color: '#666'
                }}>{props.category.description}</p>
            </div>
            <div className='inner-centered row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-xs-2' style={{
                textAlign: 'center'
            }}>
                {offers.map((offer, idx) => {
                    return <ProductBasicVariableWidth {...props} offer={offer} idx={idx} key={idx} showOfferCount={false} />
                })}
            </div>
            <div className='inner-centered' style={{
                borderBottom: '1px solid #e0e0e0',
                textAlign: 'center',
                paddingTop: 0
            }}>
                <Link
                    to={{pathname: `/shopping/category/${props.category.key}`}}
                    style={{fontSize: '1.2em'}}>
                    View More <i style={{color: 'rgb(0, 113, 188)', fontSize: '1.1em', marginLeft: '5px'}} className="fas fa-chevron-down"></i>
                </Link>
            </div>
        </div>
    )
}