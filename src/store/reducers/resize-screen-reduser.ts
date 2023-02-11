import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit'


interface ResizeScreenState {
    widthScreen: number
}

const initialState: ResizeScreenState = {
    widthScreen: window.innerWidth
}

export const resizeScreenSlice = createSlice({
    name: 'widthScreen',
    initialState,
    reducers: {
        resizeScreen: (state, action) => {
            // eslint-disable-next-line no-param-reassign
            state.widthScreen = action.payload.size
        },
    }
})

export const {resizeScreen}  = resizeScreenSlice.actions
