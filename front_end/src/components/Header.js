import React from "react";

function Header({ infor, exit }) {
    return (
        <header>
            <h1>{ infor.name }</h1>
                <ul>
                    <li>
                        <a href={`/shipper/${ infor.id }`}>Perfil</a>
                    </li>
                </ul>
                <button
                    onClick={ exit }
                >
                    Sair
                </button>
        </header>
    )
}

export default Header;
