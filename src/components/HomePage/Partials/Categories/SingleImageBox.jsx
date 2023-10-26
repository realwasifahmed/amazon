import React from 'react'
import './singleIMageBox.css'

function SingleImageBox(props) {
    return (
        <div className='singleImageBox'>
            <h2>{props.title}</h2>
            <img src={props.img} alt="" />
        </div>
    )
}

export default SingleImageBox
