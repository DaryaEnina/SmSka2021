import React, {MouseEvent, useEffect, useRef, useState} from 'react';

import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {links} from '../../mosk';
import st from './navigate.module.css';
import {Link, PropsNavigate} from '../../interfaces/interfaces';
import btnUp from '../../assets/icon/icon_up_btn.svg';
import btnDown from '../../assets/icon/icon_down_btn.svg';
import {store} from '../../store/store';
import {SCREEN_HIDE_NAV} from '../../shared/const-breakpoint';
import {closeMenu} from '../../store/reducers/visible-menu-reduser';


export const Navigate = (props: PropsNavigate) =>  {
    const {vitrinaId, allBookId, ruleId, dataId, ofertaId} = props
    const [isShowList, setIsShowList] = useState(true);
    const [isShowBtnList, setIsShowBtnList] = useState(true);
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);
    const [sizeScreen, setSizeScreen] = useState<number>(window.innerWidth);
    store.subscribe(() => { setIsOpenBurger(store.getState().visibleMenu.isOpenMenu)})
    const dispatch = useDispatch();
    const resizeScreen = () => {
        setSizeScreen(window.innerWidth );
    };

    useEffect(() => {
        window.addEventListener('resize', resizeScreen);
        return () => {
            window.removeEventListener('resize', resizeScreen);
        }
    }, []);

    const setCloseMenu = (event: React.MouseEvent | React.KeyboardEvent ) => {
        event.stopPropagation();
        const elem = event.target as HTMLElement;
        if(elem.closest('.notCloseMenu')) {
            setIsShowList(!isShowList);
            return;
        }
        dispatch(closeMenu());
        document.body.style.position = '';
    }

    const setIsHideAllList =()=> {
        if (listRef && listRef.current) {
            listRef.current.style.display = 'none';
            setIsShowList(false)
            setIsShowBtnList(false)
    }
}
    const setIsShowAllList =()=> {
        if (listRef && listRef.current) {
            listRef.current.style.display = 'block';
            setIsShowList(true)
        }
    }

    return (
        <nav data-test-id={dataId}
            className={`${st.nav} ${isOpenBurger ? st.nav_visible : ''}`}  role='presentation' onClick={(event: React.MouseEvent) => setCloseMenu(event)}>
            <ul>
                <li className={st.nav__li}>
                    <div data-test-id={vitrinaId}
                         role='presentation'
                         onClick={isShowList ? setIsHideAllList: setIsShowAllList}
                         className= {[st.container__li, 'notCloseMenu'].join(' ')}>
                        <NavLink
                            className={(data) => data.isActive ? st.nav__item_generalA : st.nav__item_general}
                            to='/books'
                            onClick={()=> setIsShowBtnList(true)}>Витрина книг
                        </NavLink>
                        {isShowBtnList && <button className={st.li_btn} type='button' >
                            <img src={isShowList? btnUp : btnDown } alt='btn up'/>
                        </button>}
                    </div>
                        <ul className={st.nav__list} ref={listRef}>
                            {links.map((link: Link) => (
                                <li  key={link.name}
                                     className={st.nav__li_inside}>
                                    <NavLink
                                        data-test-id={link.name ==='Все книги' ? allBookId : null}
                                        className={(data) => data.isActive ? st.nav__itemA : st.nav__item}
                                        to={link.paths}>{link.name}</NavLink>
                                    <span className={st.nav__item_count}>{link.count}</span>
                                </li>))}
                        </ul>
                </li>
                <li className={st.nav__li}>
                    <NavLink
                        data-test-id={ruleId}
                        className={(data) => data.isActive ? st.nav__item_generalA : st.nav__item_general}
                        to='/rule'
                        onClick={setIsHideAllList}
                       >Правила пользования</NavLink>
                </li>
                <li className={st.nav__li}>
                    <NavLink
                        data-test-id={ofertaId}
                        className={(data) => data.isActive ? st.nav__item_generalA : st.nav__item_general}
                        to='/contract'
                        onClick={setIsHideAllList}>Договор оферты</NavLink>
                </li>
                {(sizeScreen < SCREEN_HIDE_NAV) && (<div className={st.nav__li_enter}>
                    <li className={st.nav__li}>
                        <NavLink
                            className={ st.nav__item_general}
                            to='/contract'
                            onClick={()=> setIsShowBtnList(false)}>Профиль</NavLink>
                    </li>
                    <li className={st.nav__li}>
                        <NavLink
                            className={ st.nav__item_general}
                            to='/contract'
                            onClick={()=> setIsShowBtnList(false)}>Выход</NavLink>
                    </li>
                </div>)}

            </ul>
        </nav>
    )
}




