import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SignupForm from '../SignupForm/SignupForm';
import LoginForm from '../LoginForm/LoginForm';
import Overlay from '../Overlay/Overlay';
import './PageContainer.css';

function PageContainer() {
    const [searchParams] = useSearchParams();
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    useEffect(() => {
        const mode = searchParams.get('mode');
        setIsRightPanelActive(mode === 'signup');
    }, [searchParams]);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleLoginClick = () => {
        setIsRightPanelActive(false);
    };

    return (
        <div className="access-page">
            <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main">
                <SignupForm />
                <LoginForm />
                <Overlay onSignUpClick={handleSignUpClick} onLoginClick={handleLoginClick} />
            </div>
        </div>
    );
}

export default PageContainer; 