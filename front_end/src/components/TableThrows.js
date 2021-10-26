import React from 'react';
import '../styles/TableThrows.css'

function TableThrows({ Trows }) {

    const tableHeader = [
        'Oferta',
        'Valor',
        'Quantidade'
    ];

    const throws = (Trows) => {
        return (
            <div className='table'>
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
            </div>
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
