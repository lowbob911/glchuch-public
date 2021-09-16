import React from "react";
import {Link} from "gatsby";

export default function page404(){
    return (
        <div className="row text-center">
            <div className="col-12">
                <h1>Страница не надена</h1>
                <h1><Link to="/index">перейти на главную страницу</Link></h1>
            </div>
        </div>
    )
}
