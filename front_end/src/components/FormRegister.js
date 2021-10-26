import React from 'react';
import { useHistory } from 'react-router-dom';
import InputMask from 'react-input-mask';
import logo from '../images/goflux_logo_alternative.png';

function FormRegister({ register, checked, disabled, onclick, hide, email }) {
    const history = useHistory();
    return (
        <div className='page-register'>
            <form className='form-register'>
                <img
                    src={ logo }
                    alt='logo GoFlux'
                    width='150px'
                    height='50px'
                    />
                <div className='row-register'>
                    <label htmlFor='input-name'>
                        Razão social:
                        <input
                            id='input-name'
                            type='text'
                            name='name'
                            onChange={ register }
                        />
                    </label>
                    <label htmlFor='input-doc'>
                        CNPJ:
                        <InputMask
                            id='input-doc'
                            type='text'
                            name='doc'
                            mask='99.999.999/9999-99'
                            onChange={ register }
                        />
                    </label>
                </div>
                <div className='row-register select'>
                    <label htmlFor='select-type'>
                        Tipo de empresa:
                        <select
                            defaultValue=''
                            name='type'
                            id='select-type'
                            onChange={ register }
                        >
                            { ['Embargadora', 'Transportadora'].map((element, index) => {
                                return (
                                    <option
                                        value={ element }
                                        key={ index }
                                    >
                                        { element }
                                    </option>
                                )
                            }) }
                        </select>
                    </label>
                    <div style={ { width:'250px' } }>
                        <label htmlFor='input-active'>
                            A empreza está ativa
                            <input
                                id='input-active'
                                type='checkbox'
                                name='active'
                                defaultChecked={ true }
                                onChange={ checked }
                                
                            />
                        </label>
                    </div>
                </div>
                <div className='row-register'>
                    <label htmlFor='input-site'>
                        Site da empresa:
                        <input
                            id='input-site'
                            type='text'
                            name='site'
                            onChange={ register }
                        />
                    </label>
                </div>
                <textarea
                    id='input-about'
                    type='text'
                    name='about'
                    maxLength='250'
                    placeholder='Descrição em até 250 caracteres.'
                    onChange={ register }
                />
                <div>
                    <button
                        type='button'
                        disabled={ disabled }
                        onClick={ onclick }
                    >
                        Cadastrar
                    </button>
                    <button
                        type='button'
                        onClick={ () => history.push('/') }
                    >
                        Voltar
                    </button>
                    { hide && (
                        <p>
                            { email || "Usuário existente."}
                        </p>
                    ) }
                </div>
            </form>
        </div>
    )
}

export default FormRegister;
