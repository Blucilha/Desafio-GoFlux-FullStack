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
        <header className='header'>
            <h1>{ infor.name }</h1>
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
        </header>
    )
}

export default Header;
