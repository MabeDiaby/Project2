import React from "react"
import Footer from '../footerComponents/footer'
import Icon from '../footerComponents/icons'
import {Redirect} from "react-router-dom"
import App from "../App"

/* https://stackoverflow.com/questions/54915333/react-open-link-in-a-new-tab
https://fontawesome.com/ 
https://www.geeksforgeeks.org/how-to-create-a-simple-responsive-footer-in-react-js/
https://www.smashingmagazine.com/2021/08/compound-components-react/
https://www.html.am/html-codes/character-codes/html-copyright-code.cfm#:~:text=HTML%20Copyright%20Code%201%20HTML%20Entity%20Number.%20Here%27s,Avoid%20Copy%2FPaste.%20...%205%20About%20HTML%20Entities.%20
https://www.html.am/ AMAZING
*/

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>
                    <Footer.Link href="#">Clients</Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="#">Marketing</Footer.Link>
                    <Footer.Link href="#">Consulting</Footer.Link>
                    <Footer.Link href="#">Development</Footer.Link>
                    <Footer.Link href="#">Design</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Link href="#">United States</Footer.Link>
                    <Footer.Link href="#">United Kingdom</Footer.Link>
                    <Footer.Link href="#">Australia</Footer.Link>
                    <Footer.Link href="#">Support</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#" target="_blank"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Footer.Link href="https://git.generalassemb.ly/Mabe-Diaby" target="_blank"><Icon className="fab fa-github" />GitHub</Footer.Link>
                    <Footer.Link href="#" target="_blank"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="https://www.linkedin.com/in/mamragbe-d-185708b2/" target="_blank"><Icon className="fab fa-linkedin-in" />linkedin</Footer.Link>
                    <Footer.Link href="#" target="_blank"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <div>
                <p className="copyrightBar">
                &copy;Copyright {new Date().getFullYear()} Mamragbe Diaby | All rights reserved |
            Terms Of Service | Privacy
                </p>
            </div>
            </Footer.Wrapper>
        </Footer>
    )
}