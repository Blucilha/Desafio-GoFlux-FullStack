import React from "react";
import InputMask from "react-input-mask";
import logo from '../images/goflux_logo_alternative.png';

function FormLogin({ handle, register, signIn, message }) {
    return (
        <div className='page-login'>
            <form className='page-form'>
                <img
                    src={ logo }
                    alt='logo GoFlux'
                    width='150px'
                    height='50px'
                    />
                <InputMask
                    name='doc'
                    type='text'
                    placeholder='CNPJ'
                    onChange={ handle }
                    mask='99.999.999/9999-99'
                />

                <select
                    id='select-type'
                    name='type'
                    defaultValue='-'
                    onChange={ handle }
                >
                    <option
                        value='-'
                        name='type'
                    >
                        -
                    </option>
                    <option
                        value='shipper'
                        name='type'
                    >
                        Embarcadora
                    </option>
                    <option
                        value='transporter'
                        name='type'
                    >
                        Transportadora
                    </option>
                </select>

                <div>
                    <button
                        type='button'
                        onClick={ signIn }
                    >
                        Entrar
                    </button>
                    <button
                        type='button'
                        onClick={ register }
                    >
                        Criar uma conta
                    </button>
                    { message && (
                        <p>{ message }</p>
                    ) }
                </div>
            </form>
        </div>
    )
}

export default FormLogin;
