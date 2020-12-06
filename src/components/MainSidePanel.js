import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
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
                        <h5>Вторник</h5>
                    </div>
                </div>
                <div className="row border-bottom border-top">
                    <div className="col-3">
                        18:30
                    </div>
                    <div className="col-9">
                        Подростковые группы по изучению Библии
                    </div>
                </div>
                <div className="row mt-1 border-bottom">
                    <div className="col-3">
                        19:00
                    </div>
                    <div className="col-9">
                        Молодежные группы по изучению Библии
                    </div>
                </div>

                <div className="row mt-4 text-center">
                    <div className="col-12">
                        <h5>Четверг</h5>
                    </div>
                </div>
                <div className="row border-bottom border-top">
                    <div className="col-3">
                        18:30
                    </div>
                    <div className="col-9">
                        Молитвенное собрание
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
                        Утреннее Собрание
                    </div>
                </div>
                <div className="row mt-1 border-bottom">
                    <div className="col-3">
                        18:00
                    </div>
                    <div className="col-9">
                        Вечернее Собрание
                    </div>
                </div>
                <div className="row mt-1 border-bottom">
                    <div className="col-3">
                        19:45
                    </div>
                    <div className="col-9">
                        Молодежное общение
                    </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <div className="row mt-3">
                    <div className="col-12">
                        <h5><FontAwesomeIcon icon={faUsers}/></h5>
                        Информация о молодежной жизни:<br/>
                        <a href="https://t.me/molodejkase" className="h5"><FontAwesomeIcon icon={faTelegram}/></a>
                        <a href="https://vk.com/molodezhka_sv" className="h5"><FontAwesomeIcon icon={faVk} className="ml-2"/></a>
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
