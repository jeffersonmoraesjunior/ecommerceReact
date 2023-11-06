import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className="error-page">
            <h1>404 - Página não encontrada</h1>
            <p>Desculpe, a página que você está procurando não existe.</p>
        </div>
    );
}
