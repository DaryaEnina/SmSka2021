import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom';
import {Footer} from '../components/footer';
import {Header} from '../components/header';
import st from './layuot.module.css';
import { store } from '../store/store'


export const Layout = () =>  (
        <Provider store={store}>
            <div className={st.container}>
                <Header />
                <Outlet/>
                <Footer/>
            </div>
        </Provider>
    )


