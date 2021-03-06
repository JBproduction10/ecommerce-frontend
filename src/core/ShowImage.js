import React from 'react';
import {API} from '../config';

const ShowImage = ({item, url}) =>(
    <div className='product-img'>
        <img src={`${API}/${url}/photo/${item._id}`} className='mb-3' alt={item.name}
        style={{maxHeight:'100%', maxWidth:'100%', height:'300px'}}/>
    </div>
);

export default ShowImage;