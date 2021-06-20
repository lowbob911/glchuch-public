import {Carousel} from "react-responsive-carousel";
import slide1 from "../../assets/img/carousel/slide-1.jpg";
import MainSidePanel from "./MainSidePanel";
import React from "react";
import useSchedule from "../../hooks/UseSchedule";

export default function BasicWrapper(props) {
    const schedule = useSchedule();

    return (
        <React.Fragment>
            <div className="row header">
                <div className="col-12">
                    <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} showIndicators={false} className="pb-2">
                        <a href="https://www.youtube.com/channel/UC1QCGBuW0vrqJrcWz58F_zg" target="_blank">
                            <div>
                                <img src={slide1} style={{objectFit: "cover"}}/>
                            </div>
                        </a>
                    </Carousel>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-7 col-lg-9">
                    {props.children}
                </div>
                <div className="col-md-5 col-lg-3 side-column">
                    <MainSidePanel schedule={schedule}/>
                </div>
            </div>
        </React.Fragment>
    )
}
