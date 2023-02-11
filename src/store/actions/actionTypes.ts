export const SET_OPEN_MENU = 'SET_OPEN_MENU';
export type SET_OPEN_MENU = typeof SET_OPEN_MENU;

export const SET_CLOSE_MENU = 'SET_CLOSE_MENU';
export type SET_CLOSE_MENU = typeof SET_CLOSE_MENU;


export interface openMenu {
    type: SET_OPEN_MENU,
    payload: boolean;
}
export interface closeMenu {
    type: SET_CLOSE_MENU,
    payload: boolean;
}
