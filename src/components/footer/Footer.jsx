import './footer.css'
import FacebookImg from '../../images/social-networks/fb.svg'
import instagramImg from '../../images/social-networks/inst.svg'
import twitterImg from '../../images/social-networks/tw.svg'
import linkedinImg from '../../images/social-networks/in.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="social">
                    <h2>FASHION</h2>
                    <p>Complete your style with awesome clothes from us.</p>
                    <div className="social-images">
                        <a href="/">
                            <img src={FacebookImg} alt="facebook" />
                        </a>
                        <a href="/">
                            <img src={instagramImg} alt="instagram" />
                        </a>
                        <a href="/">
                            <img src={twitterImg} alt="twitter" />
                        </a>
                        <a href="/">
                            <img src={linkedinImg} alt="linkedin" />
                        </a>
                    </div>
                </div>

                <div className="nav-links">
                    <div className="nav-links-column">
                        <ul>
                            <li>
                                <a href="/">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Support
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-links-column">
                        <ul>
                            <li>
                                <a href="/">
                                    Quick Link
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Share Location
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Orders Tracking
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Size Guide
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav-links-column">
                        <ul>
                            <li>
                                <a href="/">
                                    Legal
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;