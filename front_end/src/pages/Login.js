import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import FormLogin from "../components/FormLogin";
import axios from "axios";

function Login() {
    const history = useHistory();

    const [data, setData] = useState({
        doc: '',
        type: '',
    });
    const [message, setMessage] = useState();

    const handleData = ({ target }) => {
        const { name, value } = target;
        setData({ ...data, [name]: value });
    }

    const onClickRegister = () => {
        history.push('/register')
    }


    const onClickIn = async (e) => {
        e.preventDefault();
        const { doc, type } = data;

        const loging = await axios.post(
            `http://localhost:3001/${ type }`,
            { doc },
        )
        .then((data) => data)
        .catch((err) => {
            console.error(err);
        });

        if (!loging) {
            setMessage('Usuário não encontrado!');
            return;
        }

        if (loging.status === 200) {
            const setInfor = JSON.stringify(loging.data.message);
            localStorage.setItem('information', setInfor);
            history.push(`/${ data.type }/${ loging.data.message.id }`);
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
