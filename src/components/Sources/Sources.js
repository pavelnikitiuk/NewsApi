import { delegateClick, addHtml } from './../../utils/domManipulation';
import app from './../../services/applicationService';
import { getSources } from './../../actions/sourcesActions';
import Source from './Source/Source';
import Spinner from './../Spinner/Spinner';
import {navigateToArticles} from './../../actions/routeActions';

import template from './Sources.mustache';
import './Sources.scss';

const baseClassName = 'sources';
const baseSelector = `.${baseClassName}`;
const sourceClassName = 'source';

export default class Sources {

    constructor() {
        this._onUpdateView = this.updateView.bind(this);
        app.stores.SourceStore.addListener(this._onUpdateView);
    }

    destructor() {
        app.stores.SourceStore.removeListener(this._onUpdateView);
    }

    render(elementSelector) {
        this._selecotor = elementSelector;
        this._spinner = new Spinner(elementSelector);
        getSources();
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

    showSources(model) {
       
        const html = template.render(model);
        addHtml(this._selecotor, html);
        this.bindActions();
    }
}
