import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return (
            <div>
                <nav className="nav-wrapper" id="footer">
                    <div className="left">
                        <ul>
                            <li > <a href="/">HOME</a>  </li>
                            <li> <a href="about">ABOUT</a>  </li>  
                            <li> @2020</li>                
                        </ul>
                    </div>      
                    <div className="right" id="footer-icons">
                        <h6>Contact the developer</h6>
                        <ul className="socialIcons"> 
                            <li className="gmail"><a href="mailto:nasimba4john@outlook.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-envelope"></i>Email</a></li>
                            <li className="whatsapp"><a  href="https://wa.me/+27780387591" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-whatsapp"></i>WhatsApp</a></li>              
                            <li className="facebook"><a href="https://www.facebook.com/john.nasimba.7" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>          
                            <li className="instagram"><a href="https:///www.instagram.com/johnnasimba/?hl=en" target="_blank" rel="noopener noreferrer"><i className="fa fa-fw fa-instagram"></i>Instagram</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Footer;