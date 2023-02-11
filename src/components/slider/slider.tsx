import React, {useEffect, useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import "swiper/css/pagination";
import 'swiper/css/scrollbar';
import SwiperClass from 'swiper/types/swiper-class';

import {FreeMode, Pagination, Scrollbar, Thumbs} from 'swiper';
import book1 from '../../assets/img/imageBook.jpg';
import book2 from '../../assets/img/book2.jpg';
import book3 from '../../assets/img/book3.jpg';
import book4 from '../../assets/img/book4.jpg';
import book5 from '../../assets/img/book5.png';
import book6 from '../../assets/img/book6.jpg';
import book7 from '../../assets/img/book7.jpg';
import './style.css';
import {SCREEN_XL} from '../../shared/const-breakpoint';

export const Slider = (props: { booksCount: number }) => {
    const {booksCount} = props;
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();
    const bookImg = [book1, book2, book3, book4, book5, book6, book7, book1, book2, book3, book4, book5, book6, book7,];
    const slides = Array(booksCount).fill(1000);
    const [sizeScreen, setSizeScreen] = useState<number>(window.innerWidth);
    const resizeScreen = () => {
        setSizeScreen(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', resizeScreen);
        return () => {
            window.removeEventListener('resize', resizeScreen);
        }
    }, []);
    if (sizeScreen > SCREEN_XL) {
        return (
            <>
                <Swiper
                    spaceBetween={10}
                    thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                    modules={[FreeMode, Thumbs]}
                    className="mySwiper2"
                    data-test-id='slide-big'

                >
                    {slides.map((slideContent, index) => (
                        <SwiperSlide
                            key={Math.trunc(Math.random() * slideContent)}
                                     virtualIndex={index}>
                            <img src={bookImg[index]} alt="book"/>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    scrollbar={{ draggable: true }}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Scrollbar, Thumbs]}
                    className="mySwiper"
                >

                    {slides.map((slideContent, index) => (
                        <SwiperSlide
                            data-test-id='slide-mini'
                            key={Math.trunc(Math.random() * slideContent)}
                                     virtualIndex={index}>
                            <img src={bookImg[index]} alt="book"/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </>
        )
    }
    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper3"
            data-test-id='slide-big'

        >
            {slides.map((slideContent, index) => (
                <SwiperSlide
                    data-test-id='slide-mini'
                    key={Math.trunc(Math.random() * slideContent)}
                             virtualIndex={index}>
                    <img src={bookImg[index]} alt="book"/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
