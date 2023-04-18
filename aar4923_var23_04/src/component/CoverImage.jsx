import React from 'react';
import Button from "@mui/material/Button";



export function CoverImage(props) {
    return (
        <div className={"cover"}>

            <img src={props.image} alt={props.alt}/>
            <div className={"contentCover"}>
                <h2>{props.title}</h2>
                <Button href ={'#1'}>{props.label}</Button>
            </div>

        </div>
    );
}