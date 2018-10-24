import { ADD_ARTICLE, DELETE_ARTICLE, MODIFY_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [...state.articles, action.payload] };
        case DELETE_ARTICLE:
            return {...state, articles: state.articles.filter((article)=> article.id !== action.payload)};
        case MODIFY_ARTICLE:
            return {...state, articles: state.articles.map(article =>
                article.id === action.payload.id ? {...article, title: action.payload.title} : article)};
        default:
            return state;
    }
};

export default rootReducer;