import { delegateClick } from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import navigationService from './../../services/navigationService';
import BaseController from './../Base/BaseController';
import app from './../../services/applicationService';
import { updateSources } from './../../actions/sourcesActions';
import Source from './Source/Source';

import template from './Sources.mustache';
import './Sources.scss';

const baseClassName = 'sources';
const baseSelector = `.${baseClassName}`;
const sourceClassName = 'source';

export default class SourcesController extends BaseController {

    constructor() {
        super();
        this._onDataRecivedHandler = this.onDataRecived.bind(this);
        app.stores.SourceStore.addListener(this._onDataRecivedHandler);
    }

    destructor() {
        app.stores.SourceStore.removeListener(this._onDataRecivedHandler);
    }

    render(elementSelector) {
        super.render(elementSelector);
    }

    get template() {
        return template;
    }

    onDataRecived(SourceStore) {
        super.onDataRecived(SourceStore.sources);
    }

    loadData() {
        return apiService.getSources().then((data) => updateSources(data));
    }

    processWithResponse(response) {
        this._sources = response.sources.map((sourceInfo) => {
            const source = new Source(sourceInfo);
            sourceInfo.html = source.html;
            return source;
        });

    }

    bindActions() {
        delegateClick(baseSelector, sourceClassName, this._onSourceClick.bind(this));
    }

    _onSourceClick(target) {
        const id = target.getAttribute('data-id');
        navigationService.navigateTo(`#news/${id}`);
    }
}