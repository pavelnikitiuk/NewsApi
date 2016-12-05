import {GET_ARTICLES, GOT_ARTICLES} from './../constants/articles';
import app from './../services/applicationService';
import apiService from './../services/apiService';


export function getArticles(id) {
    app.dispatcher.dispatch(GET_ARTICLES);
    apiService.getArticles(id);
}

export function gotArticles(articles) {
    app.dispatcher.dispatch(GOT_ARTICLES, articles);
} 
