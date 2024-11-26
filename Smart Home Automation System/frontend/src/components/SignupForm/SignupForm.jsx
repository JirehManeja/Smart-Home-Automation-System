import './SignupForm.css'
import Input from '../Input/input'
import Button from '../Button/Button'

function SignupForm() {
    return(
        <div className="signup-container">
            <div className="form">
                <span className="title">Create Account</span>
                <div className="fullname">
                    <Input type="text" placeholder="Last Name"/>
                    <Input type="text" placeholder="First Name"/>
                </div>
                <Input type="email" placeholder="Email"/>
                <Input type="text" placeholder="Username"/>
                <Input type="tel" placeholder="+63"/>
                <Input type="password" placeholder="Password"/>
                <Input type="password" placeholder="Confirm Password"/>
                <Button btnName="Create Account"/>
            </div>
        </div>
    )
}

export default SignupForm