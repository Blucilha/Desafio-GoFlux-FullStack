import React from 'react';
import CartOffer from './CardOffer';

function CardOfferTransporter({ offers, clickThrow, handleOnThrow, message }) {
    const cardsOffers = (offers) => {
        return (
            <div>
                { offers.map((elem, index) => {
                    return (
                        <CartOffer
                            key={`${ index } - card`}
                            offer={ elem }
                            index={ index }
                            clickThrow={ clickThrow }
                            handleOnThrow={ handleOnThrow }
                            message={ message }
                        />
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
