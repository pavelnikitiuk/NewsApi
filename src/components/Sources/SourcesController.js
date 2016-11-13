import template from './Sources.mustache';
import {addHtml} from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import './Sources.scss';

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
    }

}