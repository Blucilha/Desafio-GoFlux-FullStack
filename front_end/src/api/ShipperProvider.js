import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import MyContext from "./ShipperContext";

function Provider({ children }) {
    const [throws, setThrows] = useState([]);
    const [offers, setOffers] = useState([]);
    const [idOffer, setIdOffer] = useState('');
    const [infor, setInfor] = useState({
        id: '',
    })

    const history = useHistory();

    useEffect(() => {
        const getInfor = localStorage.getItem('information');
        if (!getInfor) return history.push('/');
        setInfor(JSON.parse(getInfor));
    }, [history]);

    useEffect(() => {   
        async function getOffersById() {
            await axios.get(`http://localhost:3001/offer/${ infor.id }`)
            .then((data) => setOffers(data.data.message))
            .catch((err) => console.error(err));
        }

        async function getAllThrows() {
            await axios.get(`http://localhost:3001/throw/`)
                .then((data) => setThrows(data.data.message))
                .catch((err) => console.error(err));
        }

        getAllThrows();
        getOffersById();
    }, [idOffer, infor.id, history]);


    const values = {
        throws,
        infor,
        offers,
        setIdOffer,
        setThrows
    };

    return (
        <MyContext.Provider value={ values } >
            { children }
        </MyContext.Provider>
    )
}

export default Provider;
