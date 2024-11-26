import './LoginForm.css'
import Input from '../Input/input'
import Button from '../Button/Button'

function LoginForm() {
    return(
        <div className="login-container">
            <div className="form">
                <span className="login-title">Sign In</span>
                <Input type="email" placeholder="Email"/>
                <Input type="password" placeholder="Password"/>
                <a href="#" className="forgot-password">Forgot Password?</a>
                <Button btnName="Login"/>
            </div>
        </div>
    )
}

export default LoginForm