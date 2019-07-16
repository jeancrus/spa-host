import './Footer.css'
import React from 'react'

export default props => {
    return <footer className="footer">
        <span>
            Desenvolvido com <i className="fa fa-heart text-danger"></i> por
            <strong>&ensp;Cod<span className="text-danger">3</span>r</strong> e
            <strong> Jean<span className="text-danger"> Crus</span></strong>
        </span>
    </footer>
}