import * as actions from './actionTypes';
export const openMenu = () => ({
    type: actions.SET_OPEN_MENU,
    payload: true
});
export const closeMenu = () => ({
    type: actions.SET_CLOSE_MENU,
    payload: false
});



