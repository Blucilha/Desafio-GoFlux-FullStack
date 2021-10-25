import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import ShipperContext from '../api/ShipperContext';
import Header from '../components/Header';
import NavBarShipper from '../components/NavBarShipper';
import TableShipper from '../components/TableShipper';

function ShipperCadaster() {
    const { throws, infor } = useContext(ShipperContext);

    const history = useHistory();

    const onClickExit = (e) => {
        e.preventDefault();
        localStorage.clear();
        history.push('/');
    }

    return (
        <div>
            <Header
                infor={ infor }
                exit = { onClickExit }
            />
            <NavBarShipper infor={ infor }/>
            <TableShipper
                throws={ throws }
            />
        </div>
    );
}

export default ShipperCadaster;
