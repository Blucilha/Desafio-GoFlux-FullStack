import React from 'react';

function FormRegisterOffer({ handle, registerOffer, message, clickBack }) {

    return (
        <div>
            <form>
                <label htmlFor='input-from' >
                    Origem:
                    <input
                        type='text'
                        placeholder='Cidade - UF'
                        id='input-from'
                        onChange={ handle }
                        name='from'
                    />
                </label>
                <label htmlFor='input-to' >
                    Destino:
                    <input
                        type='text'
                        placeholder='Cidade - UF'
                        id='input-to'
                        onChange={ handle }
                        name='to'
                    />
                </label>
                <label htmlFor='input-value' >
                    Lance inicial:
                    <input
                        type='number'
                        id='input-value'
                        onChange={ handle }
                        name='initial_value'
                        min='1'
                        defaultValue='0'
                    />
                </label>
                <label htmlFor='input-amount' >
                    Quantidade:
                    <input
                        type='number'
                        id='input-amount'
                        onChange={ handle }
                        name='amount'
                        min='1'
                        defaultValue='0'
                    />
                </label>
                <label htmlFor='input-type' >
                    Medida:
                    <input
                        type='text'
                        id='input-type'
                        onChange={ handle }
                        name='amount_type'
                    />
                </label>
                <button
                    type='button'
                    onClick={ registerOffer }
                >
                    Cadastrar
                </button>
                <button
                    type='button'
                    onClick={ clickBack }
                >
                    Voltar
                </button>
            </form>
            { message && (
                <p>{ message }</p>
            ) }
        </div>
    )
}

export default FormRegisterOffer;
