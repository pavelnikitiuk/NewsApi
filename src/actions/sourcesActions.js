import {UPDATE_SOURCE} from './../constants/sources';
import app from './../services/applicationService';

export function updateSources(data) {
    app.dispatcher.dispatch(UPDATE_SOURCE, data);
}
