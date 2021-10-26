import axios from 'axios';
import React, { useContext, useState } from 'react';
import TransporterContext from '../api/TransporterContext';
import CardOfferTransporter from '../components/CardOfferTransporter';
import Header from '../components/Header';
import NavBarTransporter from '../components/NavBarTransporter';

function Transporter() {
    const { infor, offers } = useContext(TransporterContext);

    const [message, setMessage] = useState('');
    const [throws, setThrows] = useState({
        value: 0,
        amount: 0,
    });

    const handleOnThrow = ({ target }) => {
        const { name, value } = target;
        setThrows({
            ...throws,
            [name]: value
        })

        if (name === 'value' || name === 'amount') {
            setThrows({ ...throws, [name]: ( +value || 1).toFixed(2) });
        }
    }

    const clickRegisterThrow = async (id) => { 
        const { value, amount } = throws;

        const result = await axios.post(`http://localhost:3001/register-throw/${ infor.id }`,
        {
            id_offer: id,
            value,
            amount
        }
        )
            .then((data) => {
                console.log(data)
                return data;
            })
            .catch((err) => {
                console.error(err);
                return null;
            });

        if (!result) {
            setMessage('Ops, algo deu errado');
            return;
        }

        if (result.status === 201) {
            setMessage(result.data.message);
            return;
        }
    }

    return (
        <div>
            <Header infor={ infor }/>
            <NavBarTransporter infor={ infor }/>
            <CardOfferTransporter
                offers={ offers }
                handleOnThrow={ handleOnThrow }
                message={ message }
                clickThrow={ clickRegisterThrow }
            />
        </div>
    )
}

export default Transporter;
