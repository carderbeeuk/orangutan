import CategorySection from './HomeCategories/CategorySection'
import { useEffect, useState } from 'react'

const categories = [
    {
        category_id: 167,
        title: 'Clothing & Accessories',
        description: 'Shop clothing, shoes, and accessories for every occasion',
    },
    {
        category_id: 222,
        title: 'Electronics',
        description: 'Discover our most popular electronics and gaming offers',
    },
    {
        category_id: 436,
        title: 'Furniture',
        description: 'Household furntiture from top brands',
    },
    {
        category_id: 988,
        title: 'Sports Equipment & Outdoor Gear',
        description: 'Explore our range of top-branded offers in Fitness, Camping, Hiking and much more',
    },
]

export default function HomeCategories(props) {
    const [bookmarkedProducts, setBookmarkedProducts] = useState([])

    useEffect(() => {
        initBookmarkedProducts()
    }, [props])

    const initBookmarkedProducts = () => {
        var bookmarkedProducts = JSON.parse(getBookmarkedProductsCookie()) || []
        setBookmarkedProducts(bookmarkedProducts)
    }

    const setBookmarkedProductsCookie = (value, days) => {
        const d = new Date()
        d.setTime(d.getTime() + (days*24*60*60*1000))
        let expires = "expires="+ d.toUTCString()
        document.cookie = "bookmarkedProducts=" + value + ";" + expires + ";path=/"
    }

    const getBookmarkedProductsCookie = () => {
        let name = "bookmarkedProducts="
        let decodedCookie = decodeURIComponent(document.cookie)
        let ca = decodedCookie.split(';')
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
            c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length)
            }
        }
        return null
    }

    const bookmarkProduct = (productUUID) => {
        var bookmarkedProducts = JSON.parse(getBookmarkedProductsCookie()) || []
        if(bookmarkedProducts.includes(productUUID)) {
            const i = bookmarkedProducts.indexOf(productUUID)
            if(i > -1) bookmarkedProducts.splice(i, 1)
        } else {
            bookmarkedProducts.push(productUUID)
        }

        setBookmarkedProducts(bookmarkedProducts)
        setBookmarkedProductsCookie(
            JSON.stringify(bookmarkedProducts),
            1
        )
    }

    return(
        categories.map((category, idx) => {
            return <CategorySection {...props} category={category} idx={idx} key={idx}
                bookmarkProduct={bookmarkProduct}
                bookmarkedProducts={bookmarkedProducts} />
        })
    )
}