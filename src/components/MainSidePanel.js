import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import React from "react";

import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false;


export default function MainSidePanel() {
    return (
        <div className="row mt-2">
            <div className="col-12 text-center">
                <h4 className="main-color">
                    <FontAwesomeIcon icon={faCalendarAlt}/><br/>
                    Расписание<br/>
                    мероприятий
                </h4>
            </div>
            <div className="col-12 text-right">
                <div className="row mt-4 text-center">
                    <div className="col-12">
                        <h5>Четверг</h5>
                    </div>
                </div>
                <div className="row border-bottom border-top">
                    <div className="col-3">
                        18:45
                    </div>
                    <div className="col-9">
                        Молитвенное собрание
                    </div>
                </div>

                <div className="row mt-4 text-center">
                    <div className="col-12">
                        <h5>Пятница</h5>
                    </div>
                </div>
                <div className="row border-bottom border-top">
                    <div className="col-3">
                        18:30
                    </div>
                    <div className="col-9">
                        Молодёжная спортивная встреча
                    </div>
                </div>

                <div className="row mt-4 text-center">
                    <div className="col-12">
                        <h5>Воскресенье</h5>
                    </div>
                </div>
                <div className="row border-bottom border-top">
                    <div className="col-3">
                        10:00
                    </div>
                    <div className="col-9">
                        Утреннее собрание
                    </div>
                </div>
                <div className="row border-bottom border-top">
                    <div className="col-3">
                        18:00
                    </div>
                    <div className="col-9">
                        Вечернее собрание
                    </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <div className="row mt-3">
                    <div className="col-12">
                        <h5><FontAwesomeIcon icon={faUsers}/></h5>
                        Мы в социальных сетях:<br/>
                        <FontAwesomeIcon icon={faInstagram}/> <a href="https://www.instagram.com/sunday_school_light">Воскресная школа и кружки</a><br/>
                        <FontAwesomeIcon icon={faInstagram}/> <a href="https://www.instagram.com/molodejka_se">Молодёжные встречи</a><br/>
                        <FontAwesomeIcon icon={faInstagram}/> <a href="https://www.instagram.com/christians_in_sport._/">Молодёжные спортивные встречи</a><br/>
                    </div>
                </div>

                {/*<div className="row mt-3">*/}
                {/*    <div className="col-12">*/}
                {/*        <h5><FontAwesomeIcon icon={faInfoCircle}/></h5>*/}
                {/*        Подробней о проводимых мероприятиях и служениях можно прочитать <Link to="/services">здесь</Link>.*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
