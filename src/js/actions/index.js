import { ADD_ARTICLE, DELETE_ARTICLE, MODIFY_ARTICLE } from "../constants/action-types";
export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const deleteArticle = id => ({ type: DELETE_ARTICLE, payload: id });
export const modifyArticle = article => ({ type: MODIFY_ARTICLE, payload: article });