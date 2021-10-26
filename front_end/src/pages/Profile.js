import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
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

    return (
        <div>
            <Header infor={ infor } />
            <h3>{ infor.name }</h3>
            <section>
                <p>{ infor.id }</p>
                <p>{ infor.doc }</p>
                <p>{ infor.site }</p>
                <p>{ infor.active }</p>
                <p>{ infor.about }</p>
            </section>
        </div>
    )
}

export default Profile;
