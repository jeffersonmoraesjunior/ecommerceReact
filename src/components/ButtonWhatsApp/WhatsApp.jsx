import React from 'react';
import './styles.css';

export const WhatsApp = () => {
    return (
        <>
            <div
                className="whatsapp-link"
                href="https://web.whatsapp.com/send?phone=5521"
                target="_blank"
                rel="noreferrer">
                <i className="fa fa-whatsapp"></i>
            </div>
        </>
    );
};
