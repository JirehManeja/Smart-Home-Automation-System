import Logo from '../Logo/Logo'
import Button from '../Button/Button'
import './LandingHeader.css'
import { useNavigate } from 'react-router-dom'

function LandingHeader() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/auth'); // Navigate to the LoginRegister page
    }
    return(
        <div className="lh-container">
            <div className="sub-container">
                <Logo/>
                <div className="button-section">
                    <Button btnName="Login" onClick={handleLoginClick}/>
                </div>
            </div>
        </div>
    )
}

export default LandingHeader