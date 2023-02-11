import React, {useState} from 'react';
import {Search} from '../../components/search';
import {CardBook} from '../../components/card';
import {ProjectData as books} from '../../mosk.ts';
import st from './main-page.module.css';
import {Book, FuncBoolean} from '../../interfaces/interfaces';

export const MainPage = () => {
    const [listCheck, isViewCheck] = useState(false);
    const changeView: FuncBoolean = (childData: boolean) => {
        isViewCheck(childData);
    }

    return (
        <section className={st.container}>
            <Search changeView={changeView}/>
            <div className={listCheck ? st.container__books_check : st.container__books}>
                {books.map((book: Book) => <CardBook key={`${book.id}`}
                                                     listCheck={listCheck}
                                                     bookOne={book}/>)}
            </div>
        </section>
    );
}
