
import { GET_MENU_DATA, GET_PAGE_OBJECTS, GET_PAGE_DATA, GET_BASKET_DATA, 
  SET_BASKET_DATA, CLEAR_BASKET, MAKE_ORDER } from "../constants/action-types";

const initialState = {
  articles: [],
  menutree: [],
  basket: [],
  user: {},
  count: 0,
  sum: 0,
  startTime: new Date()
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MENU_DATA:
      return { 
        ...state, 
        articles: [...state.articles, action.payload] };
    case GET_PAGE_OBJECTS:
      return { 
        ...state, 
        articles: [...state.articles, action.payload] };
    case GET_PAGE_DATA:
      return { 
        ...state, 
        articles: [...state.articles, action.payload] };
    case GET_BASKET_DATA:
      return { 
        ...state, 
        articles: [...state.articles, action.payload] };
    case SET_BASKET_DATA:
      return { 
        ...state, 
        articles: [...state.articles, action.payload] };
    case CLEAR_BASKET:
      return { 
        ...state, 
        articles: [...state.articles, action.payload] };
    case MAKE_ORDER:
      return { 
        ...state, 
        articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};
export default rootReducer;