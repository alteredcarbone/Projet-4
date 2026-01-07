import '../../assets/style/layout/footer.scss'
import logo from "../../assets/images/logo/footer-logo.webp"

function Footer() {
    return (
        <footer className='footer'>
            <img src={logo} alt='Kasa logo' className='footer_logo'/>
            <p className='footer_text'>
                © 2020 Kasa. All rights reserved
            </p>
        </footer>
    );
}

export default Footer;