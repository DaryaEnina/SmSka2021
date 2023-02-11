import React from 'react';
import {IReview} from '../../interfaces/interfaces';
import st from './review.module.css';
import avatar from '../../assets/icon/user_review.png';
import {Rating} from '../rating';
import {formattedDateRu} from '../../shared/formated-date';

export const Review = (props: { review: IReview }) => (
    <div className={st.container}>
        <div className={st.container__name}>
            <img src={avatar} alt='avatar' className={st.avatar}/>
            <div className={st.container__item}>
                <span className={st.item}>{props.review.name}</span>
                <span className={st.item}>{formattedDateRu(props.review.date)}</span>
            </div>
        </div>
        <Rating ratingBook={false} rating={props.review.rating}/>
        <p className={st.review__txt}>{props.review.text}</p>
    </div>
);




