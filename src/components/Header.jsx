import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ThemeContext } from './themes/ThemeContext';
import moonMode from '../assets/img/moonMode.png'
import sunMode from '../assets/img/sunMode.png'

const Header = () => {
    //acceder a ThemeContext
    const { theme } = useContext(ThemeContext);
    //define la imagen segun el modo
    const darkMode = theme === 'light' ? moonMode : sunMode;

    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/myjob">MyJob</Link>
            </nav>
            <img src={darkMode} alt={theme === 'light' ? 'moonMode' : 'sunMode'} style={{ width: '50px', height: '50px' }} />
        
        </>
    )
}
export default Header




