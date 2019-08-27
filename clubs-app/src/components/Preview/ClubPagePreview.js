import React from 'react';
import preview from '../../assets/EventPage.png';

const ClubPreview = (props) => {


    //non members - see apply and the top div
    return (
        <div>
            <img src={preview} alt="" />
        </div>
    )
};

export default ClubPreview;