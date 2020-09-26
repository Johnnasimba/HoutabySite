import React from 'react';



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
                                        <a href="/">
                                            <i className="material-icons">home</i>
                                        </a>
                                    </div>
                                </li>  
                                <li >
                                    <a href="/">General Workers</a>
                                </li>
                                <li>
                                    <a href="/">Gardeners</a>
                                </li>
                                <li>
                                    <a href="/">Drivers</a>
                                </li>
                                <li>
                                    <a href="/">House Keepers</a>
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
                        <a href="login" className="white-text right">Admn</a>
                    </div>               
                    </div>
                </nav>


                <ul className="sidenav" id="mobile-links">
                    <li > <a href="/">General Workers</a>  </li>
                    <li> <a href="/">Gardeners</a>  </li>
                    <li> <a href="/">Drivers</a>  </li>
                    <li> <a href="/">House Keepers</a> </li>
                    <li> <a href="/">Painter</a> </li>
                    <li > <a href="/">Brick Layers</a>  </li>
                    <li> <a href="/">Plumber</a>  </li>
                    <li> <a href="/">Shop assistance</a>  </li>
                    <li> <a href="/">Baby sitter</a> </li>
                </ul>

                <ul id="dropdown" className="dropdown-content ">
                    <li className="dropdown-list"> <a href="/">Painter</a> </li>
                    <li className="dropdown-list"> <a href="/">Brick Layers</a>  </li>
                    <li className="dropdown-list"> <a href="/">Plumber</a>  </li>
                    <li className="dropdown-list"> <a href="/">Shop assistance</a>  </li>
                    <li className="dropdown-list"> <a href="/">Baby sitter</a> </li>
                </ul>
            </div>
        )
    }

export default Header;