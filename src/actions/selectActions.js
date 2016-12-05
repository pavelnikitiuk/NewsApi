import { SELECT_CHANGED, TOGGLE_VISIBILITY } from './../constants/select';
import app from './../services/applicationService';

export function changeSelect(newCategory) {
	app.dispatcher.dispatch(SELECT_CHANGED, newCategory);
}

export function toggleVisibility() {
	app.dispatcher.dispatch(TOGGLE_VISIBILITY);
}
