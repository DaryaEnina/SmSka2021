import React from 'react';
import st from './error.module.css';
import icon from '../../assets/icon/errorSimbol.svg';

export const Error = () => (
    <div className={st.error__container}>
        <img src={icon} alt='icon error'/>
        <h2 className={st.error__text}>Что-то пошло не так. Обновите страницу через некоторое время.</h2>
        <button type='button' className={st.error__btn}>X</button>
    </div>
);



