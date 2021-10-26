import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FormRegisterOffer from '../components/FormRegisterOffer';
import ShipperContext from '../api/ShipperContext';
import { v4 as uuidv4 } from 'uuid';
import TableOffer from '../components/TableOffer';
import Header from '../components/Header';
import NavBarShipper from '../components/NavBarShipper';

function RegisterOffer() {
    const { infor, offers, setIdOffer } = useContext(ShipperContext);
    const history = useHistory();

    const [newOffer, setNewOffer] = useState({
        from: '-',
        to: '-',
        initial_value: 0,
        amount: 0,
        amount_type: '',
    });
    const [message, setMessage] = useState('');

    const handleRegisterOffer = ({ target }) => {
        const { value, name } = target;
        setNewOffer({ ...newOffer, [name]: value });

        if (name === 'initial_value' || name === 'amount') {
            setNewOffer({ ...newOffer, [name]: ( +value || 1).toFixed(2) });
        }
    }

    const generateId = () => {
        return uuidv4();
    }

    const formateLocal = (local) => {
        const formater = local.split('-');

        return `${formater[0]} - ${formater[1].toUpperCase()}`;
    }

    const clickRegisterOffer = async (e) => {
        e.preventDefault();
        const id = generateId();
        const { initial_value, amount, from, to, amount_type } = newOffer;

        const result = await axios.post(`http://localhost:3001/register-offer/${ infor.id }`,
        {
            id,
            id_customer: infor.id,
            from: formateLocal(from),
            to: formateLocal(to),
            initial_value,
            amount,
            amount_type
        }
        )
            .then((data) => {
                setIdOffer(id);
                return data;
            })
            .catch((err) => {
                console.error(err);
                return null;
            });

        if (!result) {
            setMessage('Ops, algo está errado');
            return;
        }

        if (result.status === 201) {
            setMessage(result.data.message);
            return;
        }
    }

    const clickBack = (e) => {
        e.preventDefault();
        history.push(`/shipper/${ infor.id }`);
    }

    return (
        <div>
            <Header
                infor={ infor }
            />
            <NavBarShipper infor={ infor }/>
            <FormRegisterOffer
                handle={ handleRegisterOffer }
                registerOffer={ clickRegisterOffer }
                message={ message }
                clickBack={ clickBack }
            />
            <TableOffer Offers={ offers } />
        </div>
    )
}

export default RegisterOffer;
