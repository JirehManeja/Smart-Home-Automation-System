import PageContainer from '../components/PageContainer/PageContainer';
import Logo from '../components/Logo/Logo';
import Footer from '../components/Footer/Footer';
import './LoginRegister.css'

function LoginRegister() {
    return (
        <div className="page-wrapper">
            <div className="logo-wrapper">
                <Logo />
            </div>
            <PageContainer />
            <Footer className="footer" />
        </div>
    );
}

export default LoginRegister;