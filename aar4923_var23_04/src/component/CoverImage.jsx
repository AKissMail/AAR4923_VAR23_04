import React from 'react';




export function CoverImage(props) {
    return (
        <div className={"cover"}>

            <img src={props.image} alt={props.alt}/>
            <div className={"contentCover"}>
                <h4>{props.title}</h4>
                <p>{props.label}</p>
            </div>

        </div>
    );
}