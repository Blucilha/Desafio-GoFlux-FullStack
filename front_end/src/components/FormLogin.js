import React from "react";
import InputMask from "react-input-mask";

function FormLogin({ handle, disabled, register }) {
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
                <label htmlFor='input-senha'>
                    Digite a sua senha:
                    <input
                        name='password'
                        type='password'
                        placeholder='********'
                        onChange={ handle }
                    />
                </label>
                <button
                    type='button'
                    disabled={ disabled }
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
        </div>
    )
}

export default FormLogin;
