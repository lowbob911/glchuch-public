import React, {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BasicWrapper from "../components/BasicWrapper";
import churchImg from "../../assets/img/church.jpg";
import showdown from "showdown";
import {Link} from "gatsby";

export default function Home() {
    const [publications, setPublications] = useState([]);

    useEffect(() => {
        fetch(`${process.env.GATSBY_API_URL}/publications`)
            .then(response => response.json())
            .then(resultData => {
                resultData.forEach(publication => {
                   publication.publidhedDate = new Date(publication.published_at);
                });
                setPublications(resultData.sort((a,b) => (a.publidhedDate > b.publidhedDate) ? 1 : ((b.publidhedDate > a.publidhedDate) ? -1 : 0)).reverse());
            })
    }, []);

    return (
        <BasicWrapper>
            <div className="text-center">
                <h1 className="main-color">
                    Новости
                </h1>
            </div>
            <div className="row mt-3">
                {publications.map(publication => (
                    <div className="col-12" key={`test_${publication._id}`}>
                        <div className="publication-item">
                            <div className="publication-img text-center">
                                <Link to={`/publication?id=${publication._id}`}>
                                    <img src={publication?.previewImage?.url || churchImg}
                                         alt={publication.label}
                                    />
                                </Link>
                            </div>
                            <div className="publication-info">
                                <div>
                                    <span className="publication-time">
                                        {new Intl.DateTimeFormat('RU-ru', {timeZone: "Europe/Helsinki"}).format(new Date(publication.published_at))}
                                    </span>
                                    <Link to={`/publication?id=${publication._id}`}>
                                        <span className="publication-label">{publication.label}</span>
                                    </Link>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: new showdown.Converter().makeHtml(publication.description)}} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </BasicWrapper>
    )
}

