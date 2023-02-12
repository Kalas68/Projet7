import { NavLink } from 'react-router-dom'


function Header(){
    return (<div className="header">
        <img className="logo" src={require('../assets/logo.png')} alt="" />
        <nav>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active": "")}>Accueil</NavLink>
            <NavLink to="/a_propos" className={(nav) => (nav.isActive ? "nav-active": "")}>A propos</NavLink>
        </nav>
    </div>)
}

export default Header;