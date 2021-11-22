import CategorySection from './HomeCategories/CategorySection'
import { useEffect, useState } from 'react'

const categories = [
    {
        key: 'Clothing',
        title: 'Clothing & Accessories',
        description: 'Shop clothing, shoes, and accessories for every occasion',
    },
    {
        key: 'Furniture',
        title: 'Furniture',
        description: 'Household furntiture from top brands',
    },
    {
        key: 'Electronics',
        title: 'Electronics',
        description: 'Discover our most popular electronics offers',
    },
    {
        key: 'Sporting Goods',
        title: 'Sports Equipment & Outdoor Gear',
        description: 'Explore our range of top-branded offers in Fitness, Camping, Hiking and much more',
    },
    {
        key: 'Baby & Toddler',
        title: 'Babies & Kids',
        description: 'Shop for children\'s products from our wide range of nursery products, toys, gifts and more'
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

    const bookmarkProduct = (productCode) => {
        var bookmarkedProducts = JSON.parse(getBookmarkedProductsCookie()) || []
        if(bookmarkedProducts.includes(productCode)) {
            const i = bookmarkedProducts.indexOf(productCode)
            if(i > -1) bookmarkedProducts.splice(i, 1)
        } else {
            bookmarkedProducts.push(productCode)
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