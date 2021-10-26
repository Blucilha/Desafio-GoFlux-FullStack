import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import TransporterContext from './TransporterContext';

function Provider({ children }) {
    const [infor, setInfor] = useState({
        id: '',
    });

    const [offers, setOffers] = useState([]);
    const [allThrows, setAllTrows] = useState([]);
    
    const history = useHistory();

    useEffect(() => {
        const getInfor = localStorage.getItem('information');
        if (!getInfor) return history.push('/');
        setInfor(JSON.parse(getInfor));
    }, [history]);

    
    useEffect(() => {
        async function getAllOffers() {
            await axios.get('http://localhost:3001/offer')
                .then((data) => setOffers(data.data.message))
        }


        async function getAllTrows() {
            await axios.get(`http://localhost:3001/throw/${ infor.id }`)
                .then((data) => setAllTrows(data.data.message))
        }

        getAllOffers();
        getAllTrows();
    }, [infor.id])

    const values = {
        infor,
        offers,
        allThrows,
    };

    return (
        <TransporterContext.Provider value={ values } >
            { children }
        </TransporterContext.Provider>
    )
}

export default Provider;
