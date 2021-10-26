import React, { useState } from 'react';

function CardOfferTransporter({ offers, clickThrow, handleOnThrow, message }) {

    const [elemId, setElemId] = useState(0);

    const onclickThrow = (elem, index) => {
        clickThrow(elem.id);
        setElemId(index);
    }


    const cardsOffers = (offers) => {
        return (
            <div>
                { offers.map((elem, index) => {
                    return (
                        <div key={ index } id={ index }>
                            <h4> Oferta: { ' ' }
                                { elem.id }
                            </h4>
                            <p> Origem: { ' ' }
                                { elem.from }
                            </p>
                            <p> Destino: { ' ' }
                                { elem.to 
                            }</p>
                            <p> Peso: { ' ' }
                                { `${ elem.amount } ${ elem.amount_type }` }
                            </p>
                            <p> Valor Inicial: { ' ' }
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
        )
    }
    return (    
        offers.length < 1
        ? (<h3>Sem ofertas no momento.</h3>)
        : cardsOffers(offers)
    )
}

export default CardOfferTransporter;
