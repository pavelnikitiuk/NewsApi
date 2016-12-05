import { subscribeOnClick, addHtml } from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import { getArticles } from './../../actions/articlesActions';
import { navigateToSources } from './../../actions/routeActions';
import Spinner from './../Spinner/Spinner';
import app from './../../services/applicationService';

import template from './Articles.mustache';
import './Articles.scss';

const hrefAttr = 'data-href';
const baseClassName = 'article';
const baseSelector = `.${baseClassName}`;
const hrefClassName = `${baseClassName}__more`;
const backButtonSelector = '.back-button';
const imageClassName = `${baseClassName}__image`;
const titleClassName = `${baseClassName}__title`;
const navigationSelectors = [imageClassName, titleClassName];
const backButtonRoute = '#sources';

export default class ArticlesControoller {
    constructor() {
        this._id = location.hash.split('/')[1];
        this._onArticlesChangedHandler = this._updateView.bind(this);
        app.stores.ArticlesStore.addListener(this._onArticlesChangedHandler);
    }

    destructor() {
        app.stores.ArticlesStore.removeListener(this._onArticlesChangedHandler);
    }

    render(elementSelector) {
        this._selecotor = elementSelector;
        this._spinner = new Spinner(elementSelector);
        getArticles(this._id);
    }

    _updateView(articlesStore) {
        const model = articlesStore.articles;
        if (model.isLoading) {
            this._spinner.show();
        } else {
            this._spinner.hide();
            this.showArticles(model);
        }
    }

    showArticles(model) {
        const html = template.render(model);
        addHtml(this._selecotor, html);
        this.bindActions();
    }

    bindActions() {
        subscribeOnClick(baseSelector, this._onArticleClick.bind(this));
        subscribeOnClick(backButtonSelector, navigateToSources);
    }

    _onArticleClick({currentTarget, target}) {
        const href = currentTarget.getAttribute(hrefAttr);
        if (navigationSelectors.indexOf(target.className) >= 0) {
            const win = window.open(href, '_blank');
            win.focus();
        }
    }
}
