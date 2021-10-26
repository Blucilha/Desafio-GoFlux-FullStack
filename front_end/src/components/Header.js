import React from "react";
import { useHistory } from 'react-router-dom';

function Header({ infor }) {

    const history = useHistory();

    const onClickExit = (e) => {
        e.preventDefault();
        localStorage.clear();
        history.push('/');
    }

    return (
        <header>
            <h1>{ infor.name }</h1>
                <ul>
                    <li>
                        <a href={`${ history.location.pathname }`}>Perfil</a>
                    </li>
                </ul>
                <button
                    onClick={ onClickExit }
                >
                    Sair
                </button>
        </header>
    )
}

export default Header;
