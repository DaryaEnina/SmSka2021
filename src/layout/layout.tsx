import React, {useEffect, useState} from 'react';
import {Provider, useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom';
import {Footer} from '../components/footer';
import {Header} from '../components/header';
import st from './layuot.module.css';
import { store } from '../store/store'
import {Error} from "../components/error_message";


export const Layout = () => {
    const [isShowError, setIsShowError] = useState(false);
        store.subscribe(() => {
            if(store.getState().showErrorMessage.isShowError) {
                setIsShowError(true)
            } else {
                setIsShowError(false)
            }
        })

    return (
        <Provider store={store}>
            <div className={st.container}>
                {isShowError  &&  <Error/>}
                <Header />
                <Outlet/>
                <Footer/>
            </div>
        </Provider>
    )
}



