import React, {useEffect, useState} from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import BasicWrapper from "../components/BasicWrapper";
import showdown from "showdown";
const queryString = require('query-string');

export default function Publication(props) {
    const [publication, setPublication] = useState();

    useEffect(() => {
        const id = queryString.parse(props.location.search).id;
        fetch(`${process.env.GATSBY_API_URL}/publications/${id}`)
            .then(response => response.json())
            .then(resultData => {
                setPublication(resultData);
            })
    }, [props.location.search]);

    return (
        <BasicWrapper>
            <div className="row mt-2">
                <div className="col-12 text-center">
                    <h2 className="publication-page-title">
                        {publication?.label}
                    </h2>
                </div>
                <div className="col-12">
                    {publication?.content &&
                    <div dangerouslySetInnerHTML={{__html: new showdown.Converter().makeHtml(publication.content)}}/>}
                </div>
            </div>
        </BasicWrapper>
    )
}

