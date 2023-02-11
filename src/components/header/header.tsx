import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import avatar from '../../assets/img/avatar.png';
import logo from '../../assets/img/logo.png';
import st from './header.module.css';
import { RootState, store} from '../../store/store';
import {closeMenu, openMenu} from "../../store/reducers/visible-menu-reduser";
import {SCREEN_HIDE_NAV} from "../../shared/const-breakpoint";
import {Navigate} from "../navigate";



export const Header = () => {
    const name = 'Иван';
    const dispatch = useDispatch();
    const [isOpenBurger, setIsOpenBurger] = useState(false);
    store.subscribe(() => {
        if(store.getState().visibleMenu.isOpenMenu) {
            document.body.style.position = 'fixed'
        } else {
            document.body.style.position = '';
        }
        setIsOpenBurger(store.getState().visibleMenu.isOpenMenu)
    })
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

    return (
        <>
            <header className={st.header}>
            <Link to='/' className={st.header__logo}>
                <img className={st.header__logo_img} src={logo} alt='logo'/>
                <h6 className={st.header__logo_txt}>Cleverland</h6>
            </Link>
            <button type='button'
                    data-test-id='button-burger'
                    className={`${st.header__burger} ${isOpenBurger ? st.burger_active : ''}`}
                    onClick={() => isOpenBurger ? dispatch(closeMenu()) : dispatch(openMenu())}>
                <span className={st.line}> </span>
                <span className={st.line}> </span>
                <span className={st.line}> </span>
            </button>
            <h1 className={st.header__title}>Библиотека</h1>
            <div className={st.header__auth}>
                <p className={st.header__auth_name}>Привет, {name}!</p>
                <img className={st.header__auth_img} src={avatar} alt='Avatar'/>
            </div>
        </header>
            {sizeScreen < SCREEN_HIDE_NAV && <Navigate vitrinaId='burger-showcase'
                                                       allBookId='burger-books'
                                                       ruleId='burger-terms'
                                                       ofertaId='burger-contract'
                                                       dataId='burger-navigation'
            />}
        </>

    )
}



