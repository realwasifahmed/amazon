import React from 'react'
import './categoriebox.css'

function Categories(props) {
    return (
        <div className='category__box'>
            <h2>{props.categoryTitle}</h2>
            <div className="all__Category__img">
                <div className="category__one">
                    <img src={props.categoryOneImg} alt="" />
                    <p>{props.categoryOneTitle}</p>
                </div>
                <div className="category__two">
                    <img src={props.categoryTwoImg} alt="" />
                    <p>{props.categoryTwoTitle}</p>
                </div>
                <div className="category__three">
                    <img src={props.categoryThreeImg} alt="" />
                    <p>{props.categoryThreeTitle}</p>
                </div>
                <div className="category__four">
                    <img src={props.categoryfourImg} alt="" />
                    <p>{props.categoryfourTitle}</p>
                </div>
            </div>
        </div>
    )
}

export default Categories
