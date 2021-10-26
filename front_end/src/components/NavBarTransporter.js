import React from 'react';
import '../styles/NavBarTransporter.css'

function NavBarTransporter({ infor }) {

    return (
        <div className='navbar'>
            <div className='links'>
                <a
                    href={`/transporter/throws/${ infor.id }`}
                >
                    Lances realizados 
                </a>

                <a
                    href={`/transporter/${ infor.id }`}
                >
                    Ofertas
                </a>
            </div>
        </div>
    )
}

export default NavBarTransporter;