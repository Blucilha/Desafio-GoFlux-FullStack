import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import FormLogin from "../components/FormLogin";
import axios from "axios";

function Login() {
    const history = useHistory();

    const [data, setData] = useState({
        doc: '',
        type: 'Embargadora',
    });
    const [message, setMessage] = useState();

    const handleData = ({ target }) => {
        const { name, value } = target;
        setData({ ...data, [name]: value });
    }

    const onClickRegister = () => {
        history.push('/register')
    }

    const typeCustomer = (type) => {
        if (type === 'Embargadora') {
            return 'http://localhost:3001/shipper';
        }

        return 'http://localhost:3001/transporter';
    }

    const onClickIn = async (e) => {
        e.preventDefault();
        const address = typeCustomer(data.type);
        const { doc } = data;

        const loging = await axios.post(
            address,
            { doc },
        )
        .then((data) => data)
        .catch((err) => {
            console.error(err);
            return null;
        });

        if (!loging) {
            setMessage('Usuário não encontrado!');
            return;
        }

        if (loging.status === 200) {
            const setInfor = JSON.stringify(loging.data.message);
            localStorage.setItem('information', setInfor);
            history.push(`/shipper/${ loging.data.message.id }`,
            { params: loging.data.message.id }
            );
            return;
        }
    }

    return (
        <FormLogin
            handle={ handleData }
            register={ onClickRegister }
            signIn={ onClickIn }
            message={ message }
        />
    )
}

export default Login;
