import React from 'react'
import axios from 'axios';

export default props => {
    return (
        <div>
            {props.product.map((product, idx)=>{
                return <p key={idx}>{product.title} {product.price} {product.description}</p>
            })}
        </div>
    )
}