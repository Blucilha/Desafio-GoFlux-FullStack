import React from 'react';

function NavBarShipper({ infor }) {

    return (
        <aside>
            <ul>
                <li>
                    <a
                        href={`/shipper/register-offer/${ infor.id }`}
                    >
                        Cadastrar Ofertas
                    </a>
                </li>
                <a
                    href={`/shipper/${ infor.id }`}
                >
                    Lances
                </a>
            </ul>
        </aside>
    )
}

export default NavBarShipper;