import React from 'react';
import { Link } from 'react-router-dom'




const Footer = ()=> {
    
        return (
            <div>
                <nav className="nav-wrapper" id="footer">
                    <div className="left">
                        <ul>
                            <li > <Link to="/">HOME</Link>  </li>
                            <li> <Link to="about">ABOUT</Link>  </li>  
                            <li> @2020</li>                
                        </ul>
                    </div>      
                    <div className="right" id="footer-icons">
                        <h6>Contact the developer</h6>
                        <ul className="socialIcons"> 
                            <li className="linkedin"><a href="https://www.linkedin.com/in/john-nasimba/" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-linkedin"></i>linkedin</a></li>
                            <li className="gmail"><a href="mailto:nasimba4john@outlook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-envelope"></i>Email</a></li>
                            <li className="whatsapp"><a  href="https://wa.me/+27780387591" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-whatsapp"></i>WhatsApp</a></li>              
                            <li className="facebook"><a href="https://www.facebook.com/john.nasimba.7" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>          
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }


export default Footer;