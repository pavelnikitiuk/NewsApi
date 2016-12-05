import { GET_SOURCES, GOT_SOURCES, TOGGLE_CATEGORIES_VISIBILITY } from './../constants/sources';
import app from './../services/applicationService';
import apiService from './../services/apiService';


export function getSources(category) {
	app.dispatcher.dispatch(GET_SOURCES, category);
	apiService.getSources(category);
}

export function gotSources(sources) {
	app.dispatcher.dispatch(GOT_SOURCES, sources);
}

export function toggleCategories() {
	app.dispatcher.dispatch(TOGGLE_CATEGORIES_VISIBILITY);
}
