import React, { useState } from 'react';
import '../styles/CardOfferTransporter.css';

function CardOfferTransporter({ offers, clickThrow, handleOnThrow, message }) {

    const [elemId, setElemId] = useState(0);

    const onclickThrow = (elem, index) => {
        clickThrow(elem.id);
        setElemId(index);
    }


    const cardsOffers = (offers) => {
        return (
            <div className='box-cards'>
                <div className='container-cards'>
                    { offers.map((elem, index) => {
                        return (
                            <div
                                key={ index }
                                id={ index }
                                className='cards'
                            >
                                <h4>
                                    { elem.id }
                                </h4>
                                <p> <strong>Origem:</strong> { ' ' }
                                    { elem.from }
                                </p>
                                <p> <strong>Destino:</strong> { ' ' }
                                    { elem.to 
                                }</p>
                                <p> <strong>Peso:</strong> { ' ' }
                                    { `${ elem.amount } ${ elem.amount_type }` }
                                </p>
                                <p> <strong>Valor Inicial:</strong> { ' ' }
                                    { elem.initial_value }
                                </p>
                                <label htmlFor='input-value'>
                                    Valor de lance:
                                    <input
                                        type='number'
                                        name='value'
                                        onChange={ handleOnThrow }
                                    />
                                </label>
                                <label htmlFor='input-amount'>
                                    Quantidade:
                                    <input
                                        type='number'
                                        name='amount'
                                        onChange={ handleOnThrow }
                                    />
                                </label>
                                <button
                                    type='button'
                                    onClick={ () => onclickThrow(elem, index) }
                                >
                                    Lance
                                </button>
                                { ((index === elemId)) && <p>{ message }</p> }
                            </div>
                        )
                    }) }
                </div>
            </div>
        )
    }
    return (    
        offers.length < 1
        ? (<h3>Sem ofertas no momento.</h3>)
        : cardsOffers(offers)
    )
}

export default CardOfferTransporter;
