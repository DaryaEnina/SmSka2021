import React, {useState} from 'react';
import {useLocation} from 'react-router-dom';
import st from './book-page.module.css';
import imgBook from '../../assets/img/imageBook.jpg';
import imgNotBook from '../../assets/img/imageNotBook.jpg';
import {formattedDate} from '../../shared/formated-date';
import {Rating} from '../../components/rating';
import {InfoTable} from '../../components/info-table';
import {reviews} from '../../mosk';
import {Review} from '../../components/reviews';
import btnUp from '../../assets/icon/icon_btn_up_dark.svg';
import btnDown from '../../assets/icon/icon_down_btn_dark.svg';
import {Slider} from '../../components/slider';



export const BookPage = () => {
    const [order, isOrder] = useState<boolean>(false);
    const [btnTxt, setBtnTxt] = useState<string>('забронировать');
    const [isShowReview, setIsShowReview] = useState<boolean>(false);
    const location = useLocation();
    const {book} = location.state;

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

    return (
        <main>
            <section className={st.information}>
                <div className={st.container__link_info}>
                    <h6 className={st.link_info}>{`${book.category} / ${book.title}`}</h6>
                </div>
                <div className={st.container__book}>
                    { (book.image.length > 1) ?
                        <div className={st.container__slider}><Slider booksCount={book.image.length}/></div>
                        : <div className={st.container__book_img}>
                            <img className={st.book__img}
                                 src={book.image.length ? imgBook : imgNotBook}
                                 alt="img book"
                                 data-test-id='slide-big'
                            />


                        </div>
                    }

                    <div className={st.container__book_info}>
                        <div className={st.container__book_title}>
                            <p className={st.book__title}>{book.title}</p>
                            <p className={st.book__author}>{`${book.author}, ${book.year}`}</p>
                        </div>
                        <div className={st.container__book_about}>
                            <button type='button'
                                    className={
                                        `${st.btn} ${book.stock ? st.btn_free : st.btn_busy}
                             ${order ? st.btn_order : ''}`}
                                    onClick={(event: React.MouseEvent) => createOrder(event, book.id)}
                                    disabled={!book.stock}
                            >
                                {book.stock ? btnTxt : `занята до ${formattedDate(book.datePublic)}`}
                            </button>
                            <div className={st.block__info}>
                                <h5 className={st.info_title}>О книге</h5>
                                <p className={st.info_text}>Алгоритмы— это всего лишь пошаговые
                                    алгоритмы решения задач, и большинство таких задач уже были
                                    кем-то решены, протестированы и проверены. Можно, конечно,
                                    погрузится в глубокую философию гениального Кнута, изучить
                                    многостраничные фолианты с доказательствами и обоснованиями, но
                                    хотите ли вы тратить на это свое время?
                                    <br/><br/>Откройте великолепно иллюстрированную книгу и высразу
                                    поймете, что алгоритмы — это просто. А грокать алгоритмы— это
                                    веселое и увлекательное занятие.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={st.statistic}>
                <div className={st.container__rating}>
                    <h5 className={st.info_title}>Рейтинг</h5>
                    <hr className={st.line}/>
                    <div
                        className={book.rating ? st.container__stars_count : st.container__stars_not_count}>
                        <Rating rating={book.rating} ratingBook={true}/>
                        {book.rating ?
                            <span className={st.stars_count}>{book.rating}</span>
                            : <span className={st.stars_zero}>ещё нет оценок</span>}
                    </div>
                </div>
                <div className={st.container__information}>
                    <h5 className={st.info_title}>Подробная информация</h5>
                    <hr className={st.line}/>
                    <InfoTable/>
                </div>
                <div className={st.container__review}>
                    <div className={st.review_title}>
                        <h5 className={st.info_title}>Отзывы</h5>
                        <span className={st.review_count}>{reviews.length}</span>
                        <button className={st.review_btn}
                                type='button'
                                data-test-id='button-hide-reviews'
                                onClick={()=> setIsShowReview(!isShowReview)}>
                            <img src={isShowReview ? btnUp : btnDown} alt='icon btn'/>
                        </button>
                    </div>
                    {isShowReview && <hr className={st.line}/>}
                    {isShowReview && reviews.map(r => <Review key={r.name} review={r}/>)}
                </div>
                <button type='button'  data-test-id='button-rating' className={st.btn_review} style={isShowReview ? {} : {marginTop: '42px'}}> Оценить книгу</button>
            </section>
        </main>
    );
}
