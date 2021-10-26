import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/Profile.css'
import Header from '../components/Header';

function Profile() {
    const [infor, setInfor] = useState({
        id: '',
    });
    const history = useHistory();
    useEffect(() => {
        const getInfor = localStorage.getItem('information');
        if (!getInfor) return history.push('/');
        setInfor(JSON.parse(getInfor));
    }, [history]);
    console.log(infor)
    return (
        <div>
            <Header infor={ infor } />
            <section className='session'>
                <div className='card-profile'>
                    <h3>{ infor.name }</h3>
                    <p><strong>ID:</strong>{ ' ' }{ infor.id }</p>
                    <p><strong>CNPJ:</strong>{ ' ' }{ infor.doc }</p>
                    <p><strong>SITE:</strong>{ ' ' }{ infor.site }</p>
                    <p><strong>ATIVO:</strong>{ ' ' }{ `${ infor.active }` }</p>
                    <p><strong>DESCRIÇÃO:</strong>{ ' ' }{ infor.about }</p>
                </div>
            </section>
        </div>
    )
}

export default Profile;
