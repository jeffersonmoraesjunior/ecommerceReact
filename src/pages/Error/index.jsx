import React from 'react';
import { Link, useRouteError} from "react-router-dom";
import { ErrorStyled } from "./style";

export default function ErrorPage() {
    
    document.title = '404 | Serracommerce';

    const  error  = useRouteError();
    return (
        <ErrorStyled>
        <div className = "errotop">
        </div>
            <h1 className="erro404">404</h1>
            <h1 className="error">Error </h1>
            <h1 className="erropage">Page Not Found!</h1>
            <button className="errobutton"><Link to="/">Back To Home</Link></button>
        <div className = "errobot">
        </div>
        </ErrorStyled>
    );
}