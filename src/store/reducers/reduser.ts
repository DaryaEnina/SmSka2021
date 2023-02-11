import * as actions from '../actions/actionTypes';
import {Action} from "redux";

export  function Reducer(state = [], action: Action) {
    switch (action.type) {
        case actions.SET_OPEN_MENU:
            return [...state, {
               isOpenMenu: true,
            }];
        case actions.SET_CLOSE_MENU:
            return [...state, {
                isOpenMenu: true,
            }];
             default:
            return state;
    }
}
