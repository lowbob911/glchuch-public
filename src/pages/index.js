import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import MainSidePanel from "../components/MainSidePanel";

export default function Home({data}) {
    return (
        <React.Fragment>
            <div className="row header slider-container">
                <div className="col-12">
                    <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false} className="pb-2">
                        <div>
                            <img src="../../static/img/carousel/slide-1.jpg" style={{objectFit: "cover"}}/>
                        </div>
                        <div>
                            <img src="../../static/img/carousel/slide-2.jpg" style={{objectFit: "cover"}}/>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-7 col-lg-9">
                    <div className="text-center">
                        <h3 className="main-color">
                            Церковь "Свет Евангелия"<br/>
                            Евангельских Христиан Баптистов
                        </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <img src="../../static/img/church.jpg"
                                 alt="Иллюстрация" className="main-page-image"
                            />
                        </div>
                        <div className="col-lg-8">
                            <p>
                                Находится в <i>г. Минске, микрорайон Серебрянка, ул. Яна Райниса 6</i>.<br/>
                                Двери церкви всегда открыты для тех, кто ищет поместную общину верующих, для общения и духовного роста, или желает больше узнать о Боге и
                                новой жизни, которую мы имеем по вере в Него.<br/><br/>
                                В Церкви еженедельно проводятся Богослужения, молитвенные собрания, кружки по изучению Библии, молодежные общения, воскресная школа.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="text-center mt-2 main-color">Символ Веры</h4>
                        </div>
                        <div className="col-12"><p>
                            Верую во единого Бога Отца Вседержителя, Творца неба и земли, всего видимого и невидимого, И во единого Господа Иисуса Христа,
                            Сына Божьего единородного, от Отца рождённого прежде всех веков, Света от Света, Бога истинного от Бога истинного, рождённого не
                            сотворённого, единосущного Отцу, Которым всё стало быть.<br/><br/>
                            Нас ради человеков, и нашего ради спасения сшедшего с небес, и воплотившегося от Духа Святого и Марии Девы и вочеловечевшегося.
                            Распятого же за нас при Понтии Пилате, и страдавшего и погребённого, и воскресшего в третий день по Писанию и восшедшего на небеса, и сидящего одесную Отца,
                            и снова грядущего со славою судить живых и мёртвых, Его же царствию не будет конца.<br/><br/>
                            И в Духа Святого, Господа животворящего, от Отца исходящего, наравне с Отцом и Сыном поклоняемого и славимого, говорившего через пророков.
                            И во Единую Святую, Соборную и Апостольскую Церковь. Исповедую единое крещение во оставление грехов. Ожидаю воскресения мёртвых и жизни будущего века.<br/>

                            Аминь.
                        </p>

                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-3 side-column">
                    <MainSidePanel/>
                </div>
            </div>
        </React.Fragment>
    )
}

