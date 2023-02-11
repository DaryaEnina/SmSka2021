import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import imgBook from '../../assets/img/imageBook.jpg';
import imgNotBook from '../../assets/img/imageNotBook.jpg';
import star1 from '../../assets/icon/star1.png';
import star0 from '../../assets/icon/star0.png';
import {PropsBook} from '../../interfaces/interfaces';
import st from './card_book.module.css';
import {formattedDate} from '../../shared/formated-date';
import {stars} from '../../shared/stars';


export const CardBook = (props: PropsBook) => {
    const [order, isOrder] = useState<boolean>(false);
    const [btnTxt, setBtnTxt] = useState<string>('забронировать');
    const navigate = useNavigate();


    const createOrder = (event: React.MouseEvent | React.KeyboardEvent, id: string) => {
        event.stopPropagation();
        isOrder(!order);
        setBtnTxt('забронировано');
        if (btnTxt === 'забронировать') {
            setBtnTxt('забронировано');
        } else {
            setBtnTxt('забронировать');
        }
    }
    const openCard = (event: React.MouseEvent | React.KeyboardEvent, category: string, id: string) => {
        event.stopPropagation();
        const elem = event.target as HTMLElement;
        const isBtn = elem.hasAttribute('type');

        if(isBtn) return;

        navigate(`/books/${category}/${id}`, {state:{book: props.bookOne}});
    }

    return (
        <div data-test-id='card'
            className={`${st.container__card} ${props.listCheck ? st.container__card_list : st.container__card_table}`}
            role='presentation'
            onKeyDown={(event: React.KeyboardEvent) => openCard(event, props.bookOne.category, props.bookOne.id)}
            onMouseDown={(event: React.MouseEvent) => openCard(event, props.bookOne.category, props.bookOne.id)}>
            <img className={props.listCheck ? st.card__img_list : st.card__img}
                 src={props.bookOne.image.length ? imgBook : imgNotBook}
                 alt="img book"/>
            <div className={st.container__card_info}>
                <div className={props.listCheck ? st.container__stars_list : st.container__stars}>
                    {!props.bookOne.rating
                        ? <p className={st.card__not_star}>eщё нет оценок</p>
                        : stars.map((star, index) => (
                            <img key={`${props.bookOne.id}${index + 5}`}
                                 className={st.card_img_star}
                                 src={(index + 1 <= props.bookOne.rating) ? star1 : star0}
                                 alt='stars'/>
                        ))}
                </div>
                <div
                    className={props.listCheck ? st.card__container_list_title : st.card__container_title}>
                    <p className={props.listCheck ? st.card__title_list : st.card__title}>{props.bookOne.title}</p>
                    <p className={props.listCheck ? st.card__author_list : st.card__author}>{`${props.bookOne.author}, ${props.bookOne.year}`}</p>
                </div>

                <button type='button'
                        className={
                            `${st.btn} ${props.bookOne.stock ? st.card__btn_free : st.card__btn_busy}
                             ${props.listCheck ? st.btn_list : ''}
                             ${order ? st.btn_order : ''}`}
                        onClick={(event: React.MouseEvent) => createOrder(event, props.bookOne.id)}
                        disabled={!props.bookOne.stock}
                >
                    {props.bookOne.stock ? btnTxt : `занята до ${formattedDate(props.bookOne.datePublic)}`}

                </button>
            </div>
        </div>

    );
}
