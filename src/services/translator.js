import React, { useEffect } from 'react';

const Translator = () => {
    useEffect(() => {
        setTimeout(() => {
            if (!document.querySelector('#google-translate-script')) {
                const script = document.createElement('script');
                script.id = 'google-translate-script';
                script.src =
                    'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
                script.async = true;

                script.onload = () => {
                    window.googleTranslateElementInit = function () {
                        new window.google.translate.TranslateElement(
                            { pageLanguage: 'pt-br' },
                            'google_translate_element'
                        );
                    };
                };

                document.body.appendChild(script);
            }
        }, 1000);
    }, []);

    return <div id="google_translate_element"></div>;
};

export default Translator;
