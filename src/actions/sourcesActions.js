import {GET_SOURCES, GOT_SOURCES} from './../constants/sources';
import app from './../services/applicationService';
import apiService from './../services/apiService';


export function getSources() {
    app.dispatcher.dispatch(GET_SOURCES);
    apiService.getSources();
}

export function gotSources(sources) {
    app.dispatcher.dispatch(GOT_SOURCES, sources);
} 
