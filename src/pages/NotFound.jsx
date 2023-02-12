import Header from "../common/Header"
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div className="notFound">
            <Header/>
            <h1>404</h1>
            <p>Oups ! La page que vous demandez n'existe pas.</p>
            <NavLink to = "/" className="menuReturn">Retourner sur la page d'accueil</NavLink>

        </div>
    )
}
 
export default NotFound