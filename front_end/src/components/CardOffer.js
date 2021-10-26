import React from 'react';

function CardOffer({
    offer,
    message,
    clickThrow,
    handleOnThrow
}) {
    return (
        <div>
            <h4> Oferta: { ' ' }
                { offer.id }
            </h4>
            <p> Origem: { ' ' }
                { offer.from }
            </p>
            <p> Destino: { ' ' }
                { offer.to 
            }</p>
            <p> Peso: { ' ' }
                { `${ offer.amount } ${ offer.amount_type }` }
            </p>
            <p> Valor Inicial: { ' ' }
                { offer.initial_value }
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
                value={ offer.id }
                type='button'
                onClick={() => clickThrow(offer.id) }
            >
                Lance
            </button>
            { message && <p>{ message }</p> }
        </div>
    )
}

export default CardOffer;
