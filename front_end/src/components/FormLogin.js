import React from "react";
import InputMask from "react-input-mask";

function FormLogin({ handle, register, signIn, message }) {
    return (
        <div>
            <form>
                <label htmlFor='input-cnpj'>
                    Digite o seu CNPJ:
                    <InputMask
                        name='doc'
                        type='text'
                        placeholder='Ex. : 12345678910112'
                        onChange={ handle }
                        mask='99.999.999/9999-99'
                    />
                </label>
                <label htmlFor='select-type'>
                    Tipo de empresa:
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
                </label>
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
            </form>
            { message && (
                <p>{ message }</p>
            ) }
        </div>
    )
}

export default FormLogin;
