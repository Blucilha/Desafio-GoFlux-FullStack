import React, { useState, useEffect } from 'react';
import FormRegister from '../components/FormRegister';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const NUMBER_SIX = 6;
    const NUMBER_EIGHTEEN = 18;
    const history = useHistory();

    const [customer, setCustomer] = useState({
        name: '',
        doc: '',
        about: '',
        active: true,
        site: '',
        password: '',
        rePassword: '',
        type: 'Embargadora'
    });
    const [disabled, setDisabled] = useState(true);
    const [hide, setHide] = useState(false);

    const typeCustomer = (type) => {
        if (type === 'Embargadora') {
            return 'http://localhost:3001/register-shipper';
        }

        return 'http://localhost:3001/register-transporter';
    }

    const onClickRegister = async (e) => {
        e.preventDefault();
        const { _type, _rePassword, ...rest } = customer;
        const address = typeCustomer(customer.type);

        const register = await axios.post(
            address,
            { ...rest }
        )
        .then((data) => data)
        .catch((err) => console.log(err));

        if(register) {
            history.push('/');
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
        const { name, doc, about, site, password, rePassword } = customer;
        if (
            name === ''
            || about === ''
            || doc.length !== NUMBER_EIGHTEEN
            || site === ''
        ) {
            return true;
        } else if ((password.length < NUMBER_SIX) || (password !== rePassword)) {
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
        />
    )
}

export default Register;
