import './Logo.css'

function Logo() {
    return(
        <div className="logo-container">
            <img src="./src/assets/logo.png" alt="homesync-logo" className="logo" />
            <span className="logo-text">HomeSync</span>
        </div>
    )
}

export default Logo