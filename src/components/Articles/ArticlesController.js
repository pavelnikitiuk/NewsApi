import template from './Articles.mustache';
import {addHtml, subscribeOnClick} from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import './Articles.scss';
import {timeAgo} from './../../utils/time';
import navigationService from './../../services/navigationService'

const hrefAttr = 'data-href';
const baseClassName = 'article';
const baseSelector = `.${baseClassName}`;
const hrefClassName = `${baseClassName}__more`;
const backButtonSelector = '.back-button';
const backButtonRoute = '#sources';

export default class ArticlesControoller {
    constructor() {
        this._id = location.hash.split('/')[1];
    }

    render(elementSelector){
        this._selecotor = elementSelector;
        this._loadData().then(this._showArticles.bind(this));
    }

    _loadData() {
        return apiService.getArticles(this._id);
    }

    _showArticles(response) {
        response.articles.forEach((article) => article.timeAgo = timeAgo(new Date(article.publishedAt)));
        const templateHtml = template.render(response);
        addHtml(this._selecotor, templateHtml);
        subscribeOnClick(baseSelector, this._onArticleClick.bind(this));
        subscribeOnClick(backButtonSelector, () => navigationService.navigateTo(backButtonRoute));
    }

     _onArticleClick({currentTarget, target}) {
        const href = currentTarget.getAttribute(hrefAttr);
        if(target.className !== hrefClassName) {
            const win = window.open(href, '_blank');
            win.focus();
        }
    }
}