import React from "react";
import './Menu.css';

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        {/* Menu */}
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>

                </li>
                <li>
                    <Link to="/param/123">Param # 01</Link>

                </li>
                <li>
                    <Link to="/param/Produto">Param # 02</Link>

                </li>
                <li>
                    <Link to="/about">Sobre</Link>

                </li>
                <li>
                    <Link to="/naoExiste">Não Existe</Link>

                </li>
            </ul>
        </nav>
    </aside>

)
export default Menu;