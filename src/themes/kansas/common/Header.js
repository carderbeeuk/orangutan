import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
    const [searchTerm, setSearchTerm] = useState()

    useEffect(() => {
        const { searchTerm } = props.match.params
        setSearchTerm(searchTerm)
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

    return(
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
                            src='/images/logo.png'
                            alt='Logo'
                            style={{
                                height: '36px'
                            }} />
                    </Link>
                </p>

                <p className='col-12 d-lg-none' style={{
                    textAlign: 'center',
                }}>
                    <Link to={'/'}>
                        <img
                            src='/images/logo.png'
                            alt='Logo'
                            style={{
                                height: '30px',
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
    )
}