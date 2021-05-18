import React from 'react'

export const Recipe = (props) => {
    return (
        <div className="card mx-5 my-3" style={{width: "25rem"}}>
            <img src={props.image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <ol className="card-text">
                    {props.ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
