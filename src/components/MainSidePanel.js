import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faUsers} from "@fortawesome/free-solid-svg-icons";
import {faTelegram, faVk} from "@fortawesome/free-brands-svg-icons";
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
                        Информация о молодежной жизни:<br/>
                        <a href="https://t.me/molodejkase" className="h5"><FontAwesomeIcon icon={faTelegram}/></a>
                        <a href="https://vk.com/molodejka_se" className="h5"><FontAwesomeIcon icon={faVk} className="ml-2"/></a>
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
