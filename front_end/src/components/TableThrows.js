import React from 'react';

function TableThrows({ Trows }) {

    const tableHeader = [
        'Oferta',
        'Valor',
        'Quantidade'
    ];

    const throws = (Trows) => {
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
                    { Trows.map((elem, index) => {
                        return (
                            <tr key={ index }>
                                <td>{ elem.id_offer }</td>
                                <td>{ elem.value }</td>
                                <td>{ elem.amount }</td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        )
    }

    return (
        Trows.length < 1
        ? (
            <h3>Sem ofertas cadastradas</h3>
        )
        : throws(Trows)
    )
}

export default TableThrows;
