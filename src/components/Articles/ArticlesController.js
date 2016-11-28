import { subscribeOnClick } from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import { timeAgo } from './../../utils/time';
import navigationService from './../../services/navigationService';
import BaseController from './../Base/BaseController';

import template from './Articles.mustache';
import './Articles.scss';

const hrefAttr = 'data-href';
const baseClassName = 'article';
const baseSelector = `.${baseClassName}`;
const hrefClassName = `${baseClassName}__more`;
const backButtonSelector = '.back-button';
const imageSelector = `${baseSelector}__image`;
const titleSelector = `${baseSelector}__title`;
const navigationSelectors = [imageSelector, titleSelector];
const backButtonRoute = '#sources';

export default class ArticlesControoller extends BaseController {
    constructor() {
        super();
        this._id = location.hash.split('/')[1];
    }

    render(elementSelector) {
        super.render(elementSelector);
    }

    get template() {
        return template;
    }

    loadData() {
        return apiService.getArticles(this._id);
    }

    processWithResponse(response) {
        response.articles.forEach((article) => article.timeAgo = timeAgo(new Date(article.publishedAt)));
    }

    bindActions() {
        subscribeOnClick(baseSelector, this._onArticleClick.bind(this));
        subscribeOnClick(backButtonSelector, () => navigationService.navigateTo(backButtonRoute));
    }

    _onArticleClick({currentTarget, target}) {
        const href = currentTarget.getAttribute(hrefAttr);
        if (navigationSelectors.indexOf(target.className) >= 0) {
            const win = window.open(href, '_blank');
            win.focus();
        }
        
    }
}