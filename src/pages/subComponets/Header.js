import React from 'react';
import { Link } from 'react-router-dom';


const Header =({handleChange}) => {
        return (
            <div id="header">
                <nav className="nav-wapper">
                    <div className=""> 
                        <ul > 
                            <li>
                                <a href="/" className="sidenav-trigger" data-target="mobile-links">
                                    <i className="material-icons">menu</i>
                                </a>
                            </li> 
                            <div className="hide-on-med-and-down"> 
                                <li>
                                    <div id="home">
                                        <Link to="/">
                                            <i className="material-icons">home</i>
                                        </Link>
                                    </div>
                                </li>  
                                <li >
                                    <Link to="/search/General">General Workers</Link>
                                </li>
                                <li>
                                    <Link to="/search/Gardener">Gardeners</Link>
                                </li>
                                <li>
                                    <Link to="/search/Driver">Drivers</Link>
                                </li>
                                <li>
                                    <Link to="/search/Housekeeper">House Keepers</Link>
                                </li>
                                <li>
                                    <a href="/" className="dropdown-trigger" data-target="dropdown" id="arrow-down">
                                        <i className="fa fa-angle-down" aria-hidden="true"></i>
                                    </a> 
                                </li>
                            </div>
                            <li className="search">
                                <form action="search" method="get" >                 
                                    <input
                                        className="white"
                                        type='search'
                                        placeholder='Search'
                                        onChange= {handleChange}
                                    />
                                </form> 
                            </li>
                        </ul>
                    <div id="Admn">         
                        <a href="/admin" className="white-text right">Admn</a>
                    </div>               
                    </div>
                </nav>


                <ul className="sidenav" id="mobile-links">
                    <li > <Link to="/search/General">General Workers</Link>  </li>
                    <li> <Link to="/search/Gardener">Gardeners</Link>  </li>
                    <li> <Link to="/search/Driver">Drivers</Link>  </li>
                    <li> <Link to="/search/House">House Keepers</Link> </li>
                    <li> <Link to="/search/Painter">Painter</Link> </li>
                    <li > <Link to="/search/Brick">Brick Layers</Link>  </li>
                    <li> <Link to="/search/Plumber">Plumber</Link>  </li>
                    <li> <Link to="/search/Shop">Shop assistance</Link>  </li>
                    <li> <Link to="/search/Baby">Baby sitter</Link> </li>
                </ul>

                <ul id="dropdown" className="dropdown-content ">
                    <li className="dropdown-list"> <Link to="/search/Painter">Painter</Link> </li>
                    <li className="dropdown-list"> <Link to="/search/Brick">Brick Layers</Link>  </li>
                    <li className="dropdown-list"> <Link to="/search/Plumber">Plumber</Link>  </li>
                    <li className="dropdown-list"> <Link to="/search/Shop">Shop assistance</Link>  </li>
                    <li className="dropdown-list"> <Link to="/search/Baby">Baby sitter</Link> </li>
                </ul>
            </div>
        )
    }

export default Header;