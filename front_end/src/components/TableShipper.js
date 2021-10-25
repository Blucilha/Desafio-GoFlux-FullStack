import React from 'react';

function TableShipper({ throws }) {
    const tableHeader = ['Transportadora', 'Oferta', 'Lance', 'Peso'];
    const tableThrows = (throws) => {
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
                    { throws.map((elem, index) => {
                        return (
                            <tr key={ index }>
                                <td>{ elem.id_provider }</td>
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
        throws.length < 1
        ? (
            <h3>Sem lances no momento.</h3>
        )
        : tableThrows(throws)
    )
}

export default TableShipper;
