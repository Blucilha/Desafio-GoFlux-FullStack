import React from 'react';

function NavBarShipper({ infor }) {

    return (
        <aside>
            <ul>
                <li>
                        Lances
                </li>
                <li>
                    <a
                        href={`/shipper/register-offer/${ infor.id }`}
                    >
                        Cadastrar Ofertas
                    </a>
                </li>
                <li>Ofertas</li>
            </ul>
        </aside>
    )
}

export default NavBarShipper;