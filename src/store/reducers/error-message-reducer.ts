import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'


interface ErrorMessageState {
   isShowError: boolean;
}

const initialState: ErrorMessageState = {
    isShowError: false,
}

export const showErrorMessageSlice = createSlice({
    name: 'errorMessage',
    initialState,
    reducers: {
        showError: state => {
            // eslint-disable-next-line no-param-reassign
            state.isShowError = true
        },
        hideError: state => {
            // eslint-disable-next-line no-param-reassign
            state.isShowError = false
        }
    }
})

export const {showError, hideError}  = showErrorMessageSlice.actions
