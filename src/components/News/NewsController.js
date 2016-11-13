import template from './News.mustache';
import {addHtml} from './../../utils/domManipulation';

export default class NewsControoller {
    constructor(elementSlector) {
        this._elementSelector = elementSlector;
    }

    render(){
        const templateHtml = template.render();
        addHtml(this._elementSelector, templateHtml);
    }

}