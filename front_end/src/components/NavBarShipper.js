import React from 'react';
import '../styles/NavBarTransporter.css'

function NavBarShipper({ infor }) {

    return (
        <div className='navbar'>
            <div className='links'>
                <a
                    href={`/shipper/register-offer/${ infor.id }`}
                >
                    Cadastrar Ofertas
                </a>

                <a
                    href={`/shipper/${ infor.id }`}
                >
                    Lances
                </a>
            </div>
        </div>
    )
}

export default NavBarShipper;