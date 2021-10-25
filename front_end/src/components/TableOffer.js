import React from 'react';

function TableOffer({ Offers }) {
    const tableHeader = [
        'id',
        'Origem',
        'Destino',
        'Valor Inicial',
        'Quantidade',
        'Medida'
    ];

    const tableOffers = (Offers) => {
        return (
            <table>
                <thead>
                    <tr>
                        { tableHeader.map((elem, index) => {
                            return (
                                <th key={ index } >{ elem }</th>
                            )
                        }) }
                    </tr>
                </thead>
                <tbody>
                    { Offers.map((elem, index) => {
                        return (
                            <tr key={ index }>
                                <td>{ elem.id }</td>
                                <td>{ elem.from }</td>
                                <td>{ elem.to }</td>
                                <td>{ elem.initial_value }</td>
                                <td>{ elem.amount}</td>
                                <td>{ elem.amount_type }</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        )
    }

    return (
        Offers.length < 1
        ? (
            <h3>Sem ofertas cadastradas</h3>
        )
        : tableOffers(Offers)
    )
}

export default TableOffer;
