import React from 'react';
import InputMask from 'react-input-mask';

function FormRegister({ register, checked, disabled, onclick, hide }) {
    
    return (
        <div>
            <form>
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
                <label htmlFor='input-site'>
                    Site da empresa:
                    <input
                        id='input-site'
                        type='text'
                        name='site'
                        onChange={ register }
                    />
                </label>
                <label htmlFor='input-password'>
                    Digite a sua senha:
                    <input
                        id='input-password'
                        type='text'
                        name='password'
                        onChange={ register }
                        minLength='6'
                    />
                </label>
                <label htmlFor='input-rePassword'>
                    Digite a senha novamente:
                    <input
                        id='input-rePassword'
                        type='text'
                        name='rePassword'
                        onChange={ register }
                    />
                </label>
                <label htmlFor='input-about'>
                    Descrição:
                    <textarea
                        id='input-about'
                        type='text'
                        name='about'
                        maxLength='250'
                        placeholder='Descrição em até 250 caracteres.'
                        onChange={ register }
                    />
                </label>
                <button
                    type='button'
                    disabled={ disabled }
                    onClick={ onclick }
                >
                    Cadastrar
                </button>
            </form>
            { hide && (
                <p>
                    Usuário existente.
                </p>
            ) }
            
        </div>
    )
}

export default FormRegister;
