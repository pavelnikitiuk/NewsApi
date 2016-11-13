import template from './News.mustache';
import {addHtml} from './../../utils/domManipulation';
import apiService from './../../services/apiService';

export default class NewsControoller {
    constructor() {
    }

    render(elementSelector){
        const templateHtml = template.render();
        addHtml(elementSelector, templateHtml);
        this._loadData();
    }

    _loadData() {
        apiService.getSources().then((t) => console.log(t));
    }

}