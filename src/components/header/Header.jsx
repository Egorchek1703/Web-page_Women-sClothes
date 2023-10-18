import './header.css'
import logoImg from '../../images/header/logo.svg'

function Header () {
    return(
        <header className="header">
            <div className="container">

                <div className="logo">
                    <img src={logoImg} alt="logo" />
                    <h2 className='logo-name'><a href="/">FASHION</a></h2>
                </div>

                <nav className='nav'>
                    <ul className='nav-ul'>
                        <li className="nav-li">
                            <a href="/">CATALOGUE</a>
                        </li>
                        <li className="nav-li">
                            <a href="/">FASHION</a>
                        </li>
                        <li className="nav-li">
                            <a href="/">FAVOURITE</a>
                        </li>
                        <li className="nav-li">
                            <a href="/">LIFESTYLE</a>
                        </li>
                    </ul>
                    <button className='sign-up-btn'>SIGN UP</button>
                </nav>
            </div>
        </header>
    )
}

export default Header