import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPages() {
    const error = useRouteError();

    return (
        <div className="error-page">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page that you are searching, do not exists...</p>
        </div>
    );
};