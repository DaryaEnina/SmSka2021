import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Navigate} from '../components/navigate';
import st from './layuot-main-page.module.css';
import {SCREEN_HIDE_NAV} from "../shared/const-breakpoint";

export const LayoutMainPage = () => {
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
        <main className={st.main}>
            {sizeScreen >= SCREEN_HIDE_NAV && <Navigate vitrinaId='navigation-showcase'
                                                        allBookId='navigation-books'
                                                        ruleId='navigation-terms'
                                                        ofertaId='navigation-contract'
                                                        dataId=''
            />}
            <Outlet/>
        </main>
    );
}
