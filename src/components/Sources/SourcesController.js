import template from './Sources.mustache';
import {addHtml, subscribeOnClick} from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import './Sources.scss';
import navigationService from './../../services/navigationService';

const baseClassName = 'source';
const baseSelector = `.${baseClassName}`;

export default class SourcesController {
    render(elementSelector){
        this._selecotor = elementSelector;
        this._loadData().then(this._showSources.bind(this));
    }

    _loadData() {
        return apiService.getSources();
    }

    _showSources(response) {
        const templateHtml = template.render(response);
        addHtml(this._selecotor, templateHtml);
        subscribeOnClick(baseSelector, this._onSourceClick.bind(this));
    }

    _onSourceClick({currentTarget}) {
        const id = currentTarget.getAttribute('data-id');
        navigationService.navigateTo(`#news/${id}`);
    }

}