import React, { useState, useEffect } from 'react';
import FormRegister from '../components/FormRegister';
import '../styles/Register.css';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function Register() {
    const NUMBER_EIGHTEEN = 18;
    const REGEX_URL = /^(www|http:|https:)+[^\s]+[\w]/;

    const history = useHistory();

    const [customer, setCustomer] = useState({
        name: '',
        doc: '',
        about: '',
        active: true,
        site: '',
        type: 'Embargadora'
    });
    const [emailInvalid, setEmailInvalid] = useState()

    const [disabled, setDisabled] = useState(true);
    const [hide, setHide] = useState(false);

    const typeCustomer = (type) => {
        if (type === 'Embargadora') {
            return 'http://localhost:3001/register-shipper';
        }

        return 'http://localhost:3001/register-transporter';
    }

    const generateId = () => {
        return uuidv4();
    }

    const onClickRegister = async (e) => {
        e.preventDefault();
        const { type, ...rest } = customer;
        const id = generateId()
        const address = typeCustomer(customer.type);
        console.log({id,...rest, address})

        const register = await axios.post(
            address,
            { id, ...rest }
        )
        .then((data) => data)
        .catch((err) => {
            console.error(err);
            return null;
        });

        if(register) {
            history.push('/');
            return;
        }

        if(!REGEX_URL.test(customer.site)) {
            setEmailInvalid('Email inválido!')
            setHide(true);
            return;
        }

        if(!register) {
            setHide(true);
            return;
        }
        
    }

    const handleRegister = ({ target }) => {
        const { name, value } = target;
        setCustomer({...customer, [name]: value})
    }

    const handleChecked = ({ target }) => {
        const { name, checked } = target;
        setCustomer({ ...customer, [name]: checked })
    }

    const verifications = (customer) => {
        const { name, doc, about, site } = customer;
        if (
            name === ''
            || about === ''
            || doc.length !== NUMBER_EIGHTEEN
            || site === ''
        ) {
            return true;
        }
        return false;
    }

    useEffect(() => {
        const result = verifications(customer);
        setDisabled(result);
    }, [customer]);

    return (
        <FormRegister
            register={ handleRegister }
            checked={ handleChecked }
            disabled= { disabled }
            onclick={ onClickRegister }
            hide={ hide }
            email={ emailInvalid }
        />
    )
}

export default Register;
