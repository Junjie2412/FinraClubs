import React from 'react';
import classes from './ClubPortal.module.css';
import {NavLink} from 'react-router-dom';

const ClubPortal = (props, context) => {
    //non members - see apply and the top div
    return (

        <NavLink to={"/clubpage/"+props.name} disable style={{pointerEvents:props.disable ? "none" : ""}}>
            <div className={
                [
                    props.small ? classes.ClubPortalSmall : classes.ClubPortal,
                    props.full ? classes.Full: "",
                    props.fit ? classes.FitPage : "",
                    props.listView ? classes.ClubsPortalListView : ""
                ].join(" ")}
            >
                <div
                    id={props.name+"image-container"}
                    className={[props.listView ? classes.imageContainerListView : classes.imageContainer].join(" ")}
                >
                    <img
                         className={props.listView ? classes.imageListView : classes.image}
                         alt={''}
                         src={props.image}
                    />
                </div>
                <h3 className={[props.small ? classes.HeaderSmall : (props.listView ? classes.HeaderListView : classes.Header)].join(' ')}>
                    {props.name}
                </h3>
            </div>
        </NavLink>
    )
};

export default ClubPortal;