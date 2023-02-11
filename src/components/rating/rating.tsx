import React from 'react';
import st from './rating.module.css';
import {stars} from '../../shared/stars';
import star1 from '../../assets/icon/star1.png';
import star0 from '../../assets/icon/star0.png';

export const Rating = (props: { rating: number, ratingBook: boolean }) => (

    <div className={st.container__stars}>
        {stars.map((star, index) => (
            <img key={`${props.rating}${index + 5}`}
                 className={`${st.img_star} ${props.ratingBook ? st.img_star_book : ''}`}
                 src={(index + 1 <= props.rating) ? star1 : star0}
                 alt='stars'/>
        ))}
    </div>


);




