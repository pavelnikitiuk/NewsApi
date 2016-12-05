import { delegateClick, addHtml } from './../../utils/domManipulation';
import app from './../../services/applicationService';
import { getSources, changeCategory } from './../../actions/sourcesActions';
import Source from './Source/Source';
import Spinner from './../Spinner/Spinner';
import {navigateToArticles} from './../../actions/routeActions';
import Select from './../Select/Select';

import template from './Sources.mustache';
import './Sources.scss';

const baseClassName = 'sources';
const baseSelector = `.${baseClassName}`;
const sourceClassName = 'source';
const selectSelector = '.select';

export default class Sources {

    constructor() {
        this._onUpdateView = this.updateView.bind(this);
        this._onSelectChangedHandler = this._onSelectChanged.bind(this);
        this._select = new Select();
        app.stores.SourceStore.addListener(this._onUpdateView);
        app.stores.SelectStore.addListener(this._onSelectChangedHandler);
    }

    destructor() {
        app.stores.SourceStore.removeListener(this._onUpdateView);
        this._select.destructor();
    }

    render(elementSelector) {
        this._selecotor = elementSelector;
        this._spinner = new Spinner(elementSelector);
        getSources(app.stores.SourceStore.sources.category);
    }

    updateView(SourceStore) {
        const model = SourceStore.sources;
        if(model.isLoading) {
            this._spinner.show();
        } else {
            this.showSources(model);
            this._spinner.hide();
        }
    }

    bindActions() {
        delegateClick(baseSelector, sourceClassName, this._onSourceClick.bind(this));
    }

    _onSourceClick(target) {
        const id = target.getAttribute('data-id');
        navigateToArticles(id);
    }

    _onSelectChanged({select}) {
        if(app.stores.SourceStore.sources.category === select.active)
            return;
        getSources(select.active);
    }

    showSources(model) {
        const html = template.render(model);
        addHtml(this._selecotor, html);
        this._select.render(selectSelector);
        this.bindActions();
    }
}
