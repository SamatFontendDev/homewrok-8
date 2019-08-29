// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.
import React from "react";
import {Link} from "react-router-dom";

import css from './ShowPreview.module.css'
// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

const ShowPreview = ({id, name, summary, image}) => {
    return (
        <div className={`t-preview ${css.container}`}>
            <div сlassName={css.containerTop} >
                <Link to={`/show/${id}`} className="t-link">{name}</Link>
                {image && <img className={css.img} src={image.original} alt={name}/>}
            </div>
            <div dangerouslySetInnerHTML={{__html: summary}}></div>
        </div>

    )
};

export default ShowPreview