import React, {useEffect, useRef, useState} from 'react';
import st from './search.module.css';
import {PropsMain} from '../../interfaces/interfaces';
import btnSearch from '../../assets/icon/icon_search.svg';
import btnSortUp from '../../assets/icon/sort_up.svg';
import btnSortDown from '../../assets/icon/sort_down.svg';
import {SCREEN_HIDE_FORM} from "../../shared/const-breakpoint";


export const Search = (props: PropsMain) => {
    const [searchFocus, isSearchFocus] = useState(false);
    const [isStartSearch, setIsStartSearch] = useState(false);
    const [listCheck, isViewCheck] = useState(false);
    const [sortUp, isSortUp] = useState(false);

    const [sizeScreen, setSizeScreen] = useState<number>(window.innerWidth);
    const resizeScreen = () => {
        setSizeScreen(window.innerWidth );
    };

    useEffect(() => {
        window.addEventListener('resize', resizeScreen);
        return () => {
            window.removeEventListener('resize', resizeScreen);
        }
    }, []);

    const formRef = useRef<HTMLFormElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const sortBtnRef = useRef<HTMLInputElement>(null);
    const isViewList = (): void => {
        isViewCheck(true);
        props.changeView(true);
    }
    const isNotViewList = (): void => {
        isViewCheck(false);
        props.changeView(false);
    }
    const openSearchInput = () => {
        setIsStartSearch(true);
        isSearchFocus(true);
        if (formRef && formRef.current && inputRef && inputRef.current && sortBtnRef && sortBtnRef.current) {
            formRef.current.style.display = 'flex';
            formRef.current.style.width = '100%';
            inputRef.current.style.width = '100%';
            inputRef.current.focus();
            console.log('Search')
        }
    }
    const closeSearchInput = () => {
        if(sizeScreen <= SCREEN_HIDE_FORM) {
            console.log('screen size 650 min')
            if (formRef && formRef.current ) {
                formRef.current.style.display = 'none';
                console.log('Search not opened2 end')
                setIsStartSearch(false);
                isSearchFocus(false);
            }
        }

    }

    return (
        <div className={st.search__container}>

            <form className={st.search__container_input} ref={formRef}>
                <input type='search' className={st.input_search}
                       data-test-id='input-search'
                       ref={inputRef}
                       placeholder='Поиск книги или автора…' onFocus={() => isSearchFocus(true)}
                       onBlur={() => isSearchFocus(false)}
                />

                    <button type='button'
                            data-test-id='button-search-close'
                            className={st.search__btn_end}
                            onClick={()=>closeSearchInput()}>  </button>
                {!isStartSearch && <input type='button'
                                          ref={sortBtnRef}
                                          className={`${st.input_sort} ${sortUp ? st.sort_up : st.sort_down}`}
                                          onClick={() => isSortUp(!sortUp)} value='По рейтингу'/>}
            </form>

            {!isStartSearch && <> <div className={st.container__btn_min}>
                <button  className={st.btn__search_min} data-test-id='button-search-open' type='button' onClick={openSearchInput}><img src={btnSearch} alt='button search'/> </button>
                <button  className={st.btn__sort_min}  type='button' onClick={() => isSortUp(!sortUp)}>{
                    sortUp ?
                        <img src={btnSortUp} alt='button sort up'/>
                        : <img src={btnSortDown} alt='button sort down'/>
                }</button>
            </div>
                <div className={st.search__container_btn}>
                    <button data-test-id='button-menu-view-window'
                            className={`${st.btn} ${listCheck ? st.btn__table : st.btn__table_check}`}
                            type='button' onClick={isNotViewList}> </button>
                    <button data-test-id='button-menu-view-list' className={`${st.btn} ${listCheck ? st.btn__list_check : st.btn__list}`}
                            type='button' onClick={isViewList}> </button>
                </div>

            </>
            }

        </div>
    );

}
