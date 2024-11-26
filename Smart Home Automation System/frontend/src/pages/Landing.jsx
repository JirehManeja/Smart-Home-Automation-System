import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingHeader from "../components/LandingHeader/LandingHeader"
import Sections from "../components/LandingContent/Sections/Sections"
import Extra from "../components/LandingContent/Extra/Extra"
import Footer from "../components/Footer/Footer"

function Landing() {
    const navigate = useNavigate();

    const handleRegisterNowClick = () => {
        navigate('/auth?mode=signup'); // Navigate to the signup page
    }

    return(
        <>
            <LandingHeader/>
            <Sections
                title="Your Home, Your Rules"
                subtitle="Effortless Control at Your Fingertips"
                description="Streamline Your Smart Home Experience with One Powerful App. Manage, Automate, and Monitor - Anytime, Anywhere."
                imageSrc="./src/assets/img1.png"
                btnName="Register Now"
                onButtonClick={handleRegisterNowClick}
            />

            <Sections
                title="Customize your comfort with Presets"
                subtitle="Single Tap Automation"
                description="Create personalized presets to control multiple devices with a single tap. Set the mood, automate routines, and enjoy effortless living - your home, your way."
                imageSrc="./src/assets/img2.png"
                isReversed={true}
                backgroundColor='#03202D'
            />

            <Sections
                title="Control Multiple Homes with Ease"
                subtitle="Centralized Home Management"
                description="Manage all your homes each with its own devices and personalized presets. Stay connected and in control of every space effortlessly."
                imageSrc="./src/assets/img3.png"
            />

            <Sections
                title="Share Control, Stay Connected"
                subtitle="Manage who can access and control each home"
                description="As the main owner, you can give family members, relatives, or trusted individuals access to devices and presets - all on your terms."
                imageSrc="./src/assets/img4.png"
                isReversed={true}
                backgroundColor='#03202D'
            />

            <Extra onRegisterClick={handleRegisterNowClick}/>
            <Footer/> 
        </>
    )
}

export default Landing