import React from "react";
import '../styles/Header.css'
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
            <div>
                <ul>
                    <li>
                        <a href={`/profile/${ infor.id}`}>
                            Perfil
                        </a>
                    </li>
                </ul>
                <button
                    onClick={ onClickExit }
                >
                    Sair
                </button>
            </div>
        </header>
    )
}

export default Header;
