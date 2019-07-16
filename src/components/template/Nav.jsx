import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
    return <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar em casa! o link tera de ir pro componente refatorado*/}
            <Link to="/">
                <i className="fa fa-home"></i>&ensp;Início
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i>&ensp;Usuários
            </Link>
        </nav>
    </aside>
}