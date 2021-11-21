import { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

var lastScrollTop = 0

export default function Header(props) {
    const [searchTerm, setSearchTerm] = useState()
    const [headerFixed, setHeaderFixed] = useState(false)

    useEffect(() => {
        const { searchTerm } = props.match.params
        setSearchTerm(searchTerm)
        window.onscroll = () => {
            var st = window.pageYOffset || document.documentElement.scrollTop
            if (st > lastScrollTop){
                // downscroll code
                setHeaderFixed(false)
            } else {
                // upscroll code
                setHeaderFixed(
                    st > 250 ?
                        true :
                        false
                )
            }
            lastScrollTop = st <= 0 ? 0 : st
        }
    }, [props])

    const updateSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleFormSubmit = (e=null) => {
        if(!e) {
            window.location = `/shopping/search/${searchTerm}`
        } else {
            e.preventDefault()
            window.location = `/shopping/search/${searchTerm}`
        }
    }

    const getScrollHeaderStyles = () => {
        var styles = {
            position: 'fixed',
            top: '-150px',
            display: 'block',
            width: '100%',
            background: '#fff',
            transition: 'all .2s ease',
            zIndex: 9003
        }

        if(headerFixed) {
            styles.top = 0
        }
        return styles
    }

    return(
        <Fragment>
            {/* header hidden for scroll event */}
            <header className='outer' style={getScrollHeaderStyles()}>
                <div className='row' style={{
                    textAlign: 'center',
                    padding: '25px 0',
                    margin: 0,
                    borderBottom: '1px solid #e0e0e0'
                }}>
                    <p className='col-3 d-none d-lg-block' style={{
                        textAlign: 'center',
                        paddingLeft: '25px',
                    }}>
                        <Link to={'/'}>
                            <img
                                src={`/images/${props.siteConfig.site}/logo.png`}
                                alt='Logo'
                                style={{
                                    height: '40px'
                                }} />
                        </Link>
                    </p>

                    <p className='col-12 d-lg-none' style={{
                        textAlign: 'center',
                    }}>
                        <Link to={'/'}>
                            <img
                                src={`/images/${props.siteConfig.site}/logo.png`}
                                alt='Logo'
                                style={{
                                    height: '35px',
                                    marginTop: '-10px'
                                }} />
                        </Link>
                    </p>

                    <div className='col-md-6 col-sm-8 col-xs-11 d-none d-lg-block' style={{
                        position: 'relative'
                    }}>
                        <form onSubmit={(e) => handleFormSubmit(e)}>
                            <input type='text' defaultValue={searchTerm} placeholder='What are you after today?' onChange={(e) => updateSearchTerm(e)} />
                            <i
                                type='submit'
                                className="fas fa-search"
                                onClick={() => handleFormSubmit()}
                                style={{
                                    position: 'absolute',
                                    fontSize: '1.2em',
                                    right: '30px',
                                    top: '7px',
                                    padding: '10px',
                                    color: '#444',
                                    cursor: 'pointer',
                                    border: 'none',
                                    background: 'none'
                                }}></i>
                        </form>
                    </div>

                    <div className='col-12 d-lg-none' style={{
                        position: 'relative'
                    }}>
                        <form onSubmit={(e) => handleFormSubmit(e)}>
                            <input type='text' defaultValue={searchTerm} placeholder='What are you after today?' onChange={(e) => updateSearchTerm(e)}
                                style={{
                                    height: '40px',
                                    lineHeight: '40px',
                                    borderRadius: '20px',
                                    WebkitAppearance: 'none'
                                }} />
                            <i
                                type='submit'
                                className="fas fa-search"
                                onClick={() => handleFormSubmit()}
                                style={{
                                    position: 'absolute',
                                    fontSize: '1em',
                                    right: '25px',
                                    top: '3px',
                                    padding: '10px',
                                    color: '#444',
                                    cursor: 'pointer',
                                    border: 'none',
                                    background: 'none',
                                    zIndex: '9001',
                                    WebkitAppearance: 'none'
                                }}></i>
                        </form>
                    </div>
                </div>
            </header>

            {/* normal header */}
            <header className='outer'>
                <div className='row' style={{
                    textAlign: 'center',
                    padding: '25px 0',
                    margin: 0,
                    borderBottom: '1px solid #e0e0e0'
                }}>
                    <p className='col-3 d-none d-lg-block' style={{
                        textAlign: 'center',
                        paddingLeft: '25px',
                    }}>
                        <Link to={'/'}>
                            <img
                                src={`/images/${props.siteConfig.site}/logo.png`}
                                alt='Logo'
                                style={{
                                    height: '40px'
                                }} />
                        </Link>
                    </p>

                    <p className='col-12 d-lg-none' style={{
                        textAlign: 'center',
                    }}>
                        <Link to={'/'}>
                            <img
                                src={`/images/${props.siteConfig.site}/logo.png`}
                                alt='Logo'
                                style={{
                                    height: '35px',
                                    marginTop: '-10px'
                                }} />
                        </Link>
                    </p>

                    <div className='col-md-6 col-sm-8 col-xs-11 d-none d-lg-block' style={{
                        position: 'relative'
                    }}>
                        <form onSubmit={(e) => handleFormSubmit(e)}>
                            <input type='text' defaultValue={searchTerm} placeholder='What are you after today?' onChange={(e) => updateSearchTerm(e)} />
                            <i
                                type='submit'
                                className="fas fa-search"
                                onClick={() => handleFormSubmit()}
                                style={{
                                    position: 'absolute',
                                    fontSize: '1.2em',
                                    right: '30px',
                                    top: '7px',
                                    padding: '10px',
                                    color: '#444',
                                    cursor: 'pointer',
                                    border: 'none',
                                    background: 'none'
                                }}></i>
                        </form>
                    </div>

                    <div className='col-12 d-lg-none' style={{
                        position: 'relative'
                    }}>
                        <form onSubmit={(e) => handleFormSubmit(e)}>
                            <input type='text' defaultValue={searchTerm} placeholder='What are you after today?' onChange={(e) => updateSearchTerm(e)}
                                style={{
                                    height: '40px',
                                    lineHeight: '40px',
                                    borderRadius: '20px',
                                    WebkitAppearance: 'none'
                                }} />
                            <i
                                type='submit'
                                className="fas fa-search"
                                onClick={() => handleFormSubmit()}
                                style={{
                                    position: 'absolute',
                                    fontSize: '1em',
                                    right: '25px',
                                    top: '3px',
                                    padding: '10px',
                                    color: '#444',
                                    cursor: 'pointer',
                                    border: 'none',
                                    background: 'none',
                                    zIndex: '9001',
                                    WebkitAppearance: 'none'
                                }}></i>
                        </form>
                    </div>
                </div>
            </header>
        </Fragment>
    )
}