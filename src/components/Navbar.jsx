import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item"><Link to={"/about"}>About</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar