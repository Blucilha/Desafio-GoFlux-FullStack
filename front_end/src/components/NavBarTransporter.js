import React from 'react';

function NavBarTransporter({ infor }) {

    return (
        <aside>
            <ul>
                <li>
                    <a
                        href={`/transporter/throws/${ infor.id }`}
                    >
                        Lances realizados 
                    </a>
                </li>
                <li>
                <a
                    href={`/transporter/${ infor.id }`}
                >
                    Ofertas
                </a>
                </li>
            </ul>
        </aside>
    )
}

export default NavBarTransporter;