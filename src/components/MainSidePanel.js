import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import React from "react";

import { config } from '@fortawesome/fontawesome-svg-core'

config.autoAddCss = false;


export default function MainSidePanel({schedule}) {
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
                {Object.keys(schedule).map((key, index) => (
                    <React.Fragment key={`schedule-day-${index}`}>
                        <div className="row mt-4 text-center">
                            <div className="col-12">
                                <h5>{schedule[key][0].week_day.Name }</h5>
                            </div>
                        </div>
                        {schedule[key].map((item, index) => (
                            <div className="row border-bottom border-top" key={`schedule-item-${index}`}>
                                <div className="col-3">
                                    {item.Time}
                                </div>
                                <div className="col-9">
                                    {item.Title}
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
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
