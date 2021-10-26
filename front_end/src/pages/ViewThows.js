import React, { useContext } from 'react';
import TransporterContext from '../api/TransporterContext';
import Header from '../components/Header';
import TableThrows from '../components/TableThrows';
import NavBarTransporter from '../components/NavBarTransporter';

function ViewThrows() {
    const { allThrows, infor } = useContext(TransporterContext);
    return (
        <div>
            <Header infor={ infor }/>
            <NavBarTransporter infor={ infor }/>
            <TableThrows Trows={ allThrows } />
        </div>
    )
}

export default ViewThrows;
