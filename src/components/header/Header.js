import { Link } from 'react-router-dom';
import './Header.css'

function Header(){
    return (
        <div className="Header">
            <div><Link to="/">Home</Link></div>
            <div>
                <Link to="/profile">Profile</Link>
                <Link to="/project">Projects</Link>
            </div>
        </div>
    )

}

export default Header;