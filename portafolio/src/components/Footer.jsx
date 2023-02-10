import React from 'react'
import './Footer.css'



const Footer = () => {
    return (
        <div className="footer">
            <ul>
                <li>Contact</li>
                <li>About</li>
                <li>hello@mail.me</li>
            </ul>
            <ul className="brands"> 
                <li>
                    <i class="fa-brands fa-linkedin"></i>
                </li>
                <li>
                    <i class="fa-brands fa-twitter" />
                </li>
                <li>
                    <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                    <i class="fa-brands fa-github"></i>
                </li>
            </ul>
            <p className="copyright">David Palacios© 2023</p>
        </div>
    )
}

export default Footer
