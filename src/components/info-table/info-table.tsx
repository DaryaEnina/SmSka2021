import React from 'react';
import st from './info-table.module.css';
import {category1, category2, items1, items2} from '../../shared/list-category';


export const InfoTable = () =>  (
        <div className={st.info__container}>
            <div className={st.container1}>
                <ul className={st.category__container1}>
                    {category1.map((category) =>
                        <li key={category} className={st.category}>{category}</li>)}
                </ul>
                <ul className={st.item__container1}>
                    {items1.map((item) => <li key={item} className={st.item}>{item}</li>)}
                </ul>
            </div>
            <div className={st.container2}>
                <ul className={st.category__container2}>
                    {category2.map((category, ind) => <li key={category} className={
                        `${st.category}
                 ${(ind === 3) ? st.hidden_category : ''}
                 ${(ind === 0) ? st.hidden_after : ''}
                 `}>{category}</li>)}
                </ul>
                <ul className={st.item__container1}>
                    {items2.map((item, ind) => <li key={item} className={
                        `${st.item}
                 ${(ind === 3) ? st.hidden_category : ''}
                 ${(ind === 0) ? st.hidden_after : ''}
                `}>{item}</li>)}
                </ul>
            </div>
        </div>
    );





