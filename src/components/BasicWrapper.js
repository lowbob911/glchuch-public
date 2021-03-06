import {Carousel} from "react-responsive-carousel";
import slide1 from "../../assets/img/carousel/slide-1.jpg";
import slide2 from "../../assets/img/carousel/slide-2.jpg";
import MainSidePanel from "./MainSidePanel";
import React from "react";

export default function BasicWrapper(props) {
    return (
        <React.Fragment>
            <div className="row header slider-container">
                <div className="col-12">
                    <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} className="pb-2">
                        <div>
                            <img src={slide1} style={{objectFit: "cover"}}/>
                        </div>
                        <div>
                            <img src={slide2} style={{objectFit: "cover"}}/>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-7 col-lg-9">
                    {props.children}
                </div>
                <div className="col-md-5 col-lg-3 side-column">
                    <MainSidePanel schedule={props.schedule}/>
                </div>
            </div>
        </React.Fragment>
    )
}
