import { subscribeOnClick } from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import navigationService from './../../services/navigationService';
import BaseController from './../Base/BaseController';

import template from './Sources.mustache';
import './Sources.scss';

const baseClassName = 'source';
const baseSelector = `.${baseClassName}`;

export default class SourcesController extends BaseController {

    render(elementSelector) {
        super.render(elementSelector);
    }

    get template() {
        return template;
    }

    loadData() {
        return apiService.getSources();
    }

    bindActions() {
        subscribeOnClick(baseSelector, this._onSourceClick.bind(this));
    }

    _onSourceClick({currentTarget}) {
        const id = currentTarget.getAttribute('data-id');
        navigationService.navigateTo(`#news/${id}`);
    }
}