import template from './Articles.mustache';
import {addHtml, subscribeOnClick} from './../../utils/domManipulation';
import apiService from './../../services/apiService';
import './Articles.scss';
import {timeAgo} from './../../utils/time';
import navigationService from './../../services/navigationService'

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
        this._articles = response.articles;
        const templateHtml = template.render(response);
        addHtml(this._selecotor, templateHtml);
        subscribeOnClick('.article',this._subscribeOnClick.bind(this));
        subscribeOnClick('.back-button',() => navigationService.navigateTo('#sources'));
    }

     _subscribeOnClick({currentTarget, target}) {
        const href = currentTarget.getAttribute('data-href');
        if(target.className !== 'article__more') {
            const win = window.open(href, '_blank');
            win.focus();
        }
        
    }

}