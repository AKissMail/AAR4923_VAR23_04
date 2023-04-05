import { Fragment } from "react";
import React from 'react';

import "./../style/Overlay.css";

export function Overlay({isOpen, onClose, children}) {


    return (
        <Fragment>
            {isOpen && (

                <div className="overlay">
                    <div className="overlay__background" onClick={onClose} />
                    <div className="overlay__container">
                        <div className="overlay__controls">
                            <button
                                className="overlay__close"
                                type="button"
                                onClick={onClose}
                            />
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </Fragment>
    );
}