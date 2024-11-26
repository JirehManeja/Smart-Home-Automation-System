import Button from '../../Button/Button'
import './Extra.css'

function Extra({ onRegisterClick }) {
    return(
        <div className="extra-wrapper">
            <div className="extra-container">
                <img src="./src/assets/logo.png" alt="homesync-logo" className="logo" />
                <span className="tagline">Make your home smart.</span>
                <Button btnName="Register Now" onClick={onRegisterClick} />
            </div>
        </div>
    )
}

export default Extra