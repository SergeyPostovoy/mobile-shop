// src/js/actions/index.js
import { GET_MENU_DATA, GET_PAGE_OBJECTS, GET_PAGE_DATA, GET_BASKET_DATA, 
         SET_BASKET_DATA, CLEAR_BASKET, MAKE_ORDER } from "../constants/action-types";

export const getMenuData = article => ({ type: GET_MENU_DATA, payload: article });
export const getPageObjects = article => ({ type: GET_PAGE_OBJECTS, payload: article });
export const getPageData = article => ({ type: GET_PAGE_DATA, payload: article });
export const getBasketData = article => ({ type: GET_BASKET_DATA, payload: article });
export const setBasketData = article => ({ type: SET_BASKET_DATA, payload: article });
export const clearBasket = article => ({ type: CLEAR_BASKET, payload: article });
export const makeOrder = article => ({ type: MAKE_ORDER, payload: article });
