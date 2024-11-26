import './Footer.css'

function Footer() {
    return(
        <div className="footer-container">
            <div className="social-icons">
                <a href="https://github.com" target="_blank" className="icons">
                    <i class="fa-brands fa-github"></i>
                </a>

                <a href="https://linkedin.com" target="_blank" className="icons">
                    <i class="fa-brands fa-linkedin"></i>
                </a>

                <a href="https://facebook.com" target="_blank" className="icons">
                    <i class="fa-brands fa-facebook"></i>
                </a>
            </div>

            <span className="footer-text">&copy; 2024. All Rights Reserved.</span>
        </div>
    )
}

export default Footer