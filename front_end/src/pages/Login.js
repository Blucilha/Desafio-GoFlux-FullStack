import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import FormLogin from "../components/FormLogin";

function Login() {
    const history = useHistory();

    const [data, setData] = useState({
        doc: '',
        password: '',
    });
    const [disabled, setDisabled] = useState(true);

    const handleData = ({ target }) => {
        const { name, value } = target;
        setData({ ...data, [name]: value });
    }

    const onClickRegister = () => {
        history.push('/register')
    }

    useEffect(() => {
        const NUMBER_SIX = 6;
        const NUMBER_FOURTEEN = 14;
        const { doc, password } = data;
        if (doc.length === NUMBER_FOURTEEN && password.length >= NUMBER_SIX) {
            setDisabled(false)
        }
    }, [data]);


    return (
        <FormLogin
            handle={ handleData }
            disabled={ disabled }
            register={ onClickRegister }
        />
    )
}

export default Login;
