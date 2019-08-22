import React from 'react';
import preview from '../../assets/Homepage.png'

const Preview = (props) => {


    //non members - see apply and the top div
    return (
        <div>
            <img src={preview} alt="" />
        </div>
    )
};

export default Preview;