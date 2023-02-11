import {configureStore} from "@reduxjs/toolkit";
import {visibleMenuSlice} from "./reducers/visible-menu-reduser";
import {resizeScreenSlice} from "./reducers/resize-screen-reduser";
import {showErrorMessageSlice} from "./reducers/error-message-reducer";


export const store = configureStore({
    reducer: {
        visibleMenu: visibleMenuSlice.reducer,
        resizeScreen: resizeScreenSlice.reducer,
        showErrorMessage: showErrorMessageSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

/*
store.subscribe(() => console.log(store.getState()))
store.dispatch(openMenu())
store.dispatch(closeMenu())
*/
