import './ReusableNavbar.css';

export const Navbar = () => {
    return (
        <div className="nav-body">
            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <a href="#">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Widgets</a>
                    </li>
                    <li className="nav-item">
                        <button className='navbar-btn' aria-expanded="false">Apps</button>
                        <ul className="sub-menu" aria-label="Apps">
                            <li><a href="#">Calendar</a></li>
                            <li><a href="#">Chat</a></li>
                            <li><a href="#">Email</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>

    );
};