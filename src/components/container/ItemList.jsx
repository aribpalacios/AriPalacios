import React from 'react';
import Item from './Item';


export default function ItemList(props) {

    return (

        <div style={{ width: '100%' }}>
            {props.lista.map((item, index) => {
                return (
                    <Item key={index} item={item} />
                )
            })}
        </div>
    )
}
