import React from 'react'

export default function Filter(props){
    return(
        <button 
            className="filters__btn"
            onClick={ () => props.setFilter(props.name) }>
                {props.name}
        </button>
    )
}