import axios from 'axios';
import React, { useContext, useEffect, useState  } from 'react';
import ShipperContext from '../api/ShipperContext';
import Header from '../components/Header';
import NavBarShipper from '../components/NavBarShipper';
import TableShipper from '../components/TableShipper';

function Shipper() {
    const { throws, infor } = useContext(ShipperContext);
    const [textButton, setTextButton] = useState('Filtrar');
    const [offerOwen, setOfferOwen] = useState([]);

    useEffect(() => {
        if (textButton === 'Todos') {
            async function getThrowsById() {
                await axios.get(`http://localhost:3001/throw-shipper/${ infor.id }`)
                    .then((data) => setOfferOwen(data.data.message))
                    .catch((err) => console.error(err));
            }
    
            getThrowsById();
        } else {
            setOfferOwen(throws);
        }

    }, [textButton, infor.id, throws]);

    const onClickFilter = async (e) => {
        e.preventDefault();
        if (textButton === 'Filtrar') {
            setTextButton('Todos');

        } else {
            setTextButton('Filtrar');
        }
    }

    return (
        <div>
            <Header
                infor={ infor }
            />
            <NavBarShipper infor={ infor }/>
            <TableShipper
                textButton={ textButton }
                throws={ offerOwen }
                filter={ onClickFilter }
            />
        </div>
    );
}

export default Shipper;
