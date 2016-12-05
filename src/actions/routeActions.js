import {NAVIGATE_ARTICLES, NAVIGATE_SOURCES, ROUTE_NOT_FOUND, ROUTE_CHANGED} from './../constants/route';
import app from './../services/applicationService';

export function navigateToSources(controller) {
    app.dispatcher.dispatch(NAVIGATE_SOURCES, controller);
}

export function navigateToArticles(articleId) {
    app.dispatcher.dispatch(NAVIGATE_ARTICLES, articleId);
} 

export function routeNotFound() {
	app.dispatcher.dispatch(ROUTE_NOT_FOUND);
}

export function routeChanged (hash) {
	app.dispatcher.dispatch(ROUTE_CHANGED, hash);
}
