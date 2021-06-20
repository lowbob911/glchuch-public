import React, {useEffect, useState} from 'react';
import { Helmet } from 'react-helmet'
import { Link } from "gatsby"
import logo from "../../assets/img/logo.jpg"
import favicon from "../../assets/img/favicon.png"


export default function Layout({element}) {
    return (
        <React.Fragment>
            <Helmet>
                <title>Церковь ЕХБ "Свет Евангелия" г. Минск</title>
                <meta name="description" content={'Сайт минской церкви Евангельских Христиан Баптистов "Свет Евангелия"'}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="keywords" content="свет евангелия, церковь, церковь минск, церковь серебрянка, церковь райниса, свет евангелия, баптисты минск, иисус, бог, библия, евангелие"/>

                <link rel="shortcut icon" href={favicon} type="image/x-icon"/>

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-155332714-1"/>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}s
                        gtag('js', new Date());

                        gtag('config', 'UA-155332714-1');
                    `}
                </script>
            </Helmet>
            <main role="main" className="container bg-white border p-0">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3 justify-content-center">
                    <Link className="navbar-brand" to="/">
                        <img
                            src={logo}
                            width="243px"
                            height="40px"
                        />
                    </Link>
                    <div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="text-d-underline" to="/">Главная</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="text-d-underline" to="/about">О Церкви</Link>
                                </li>
                                {/*<li className="nav-item active">*/}
                                {/*    <a className="nav-link" href="/services">Служения</a>*/}
                                {/*</li>*/}
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="text-d-underline" to="/questions">Вопросы-ответы</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClassName="text-d-underline" to="/statement">Вероучение</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="px-3">
                    {element}
                </div>
                <div className="navbar-fixed-bottom row-fluid mt-4">
                    <div className="navbar-inner footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="mx-auto footer-info">
                                        <div className="d-inline-block">
                                            <iframe
                                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9409.12179018581!2d27.6112148!3d53.873442!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4f03f3217b7f0655!2sGospel%20Light!5e0!3m2!1suk!2sua!4v1605038966362!5m2!1suk!2sua"
                                                width="300" height="200" frameBorder="0" className="border-0 mt-2" allowFullScreen=""
                                                aria-hidden="false" tabIndex="0"/>
                                        </div>
                                        <div className="d-inline-block" style={{verticalAlign: 'top'}}>
                                            <p className="ml-3 mt-sm-2" style={{color: '#eaeaea'}}>
                                                Церковь "Свет Евангелия"<br/>
                                                ул. Я. Райниса, 6, г. Минск, Беларусь<br/>
                                                <br/>
                                                Тел: +375 17 275 30 90
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}
