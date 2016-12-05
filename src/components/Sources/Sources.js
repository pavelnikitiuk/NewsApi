import { delegateClick, addHtml } from './../../utils/domManipulation';
import app from './../../services/applicationService';
import { getSources } from './../../actions/sourcesActions';
import Spinner from './../Spinner/Spinner';
import { navigateToArticles } from './../../actions/routeActions';
import Select from './../Select/Select';

import template from './Sources.mustache';
import './Sources.scss';

const baseClassName = 'sources';
const baseSelector = `.${baseClassName}`;
const sourceClassName = 'source';
const selectSelector = '.select';

export default class Sources {

	constructor() {
		this._onUpdateView = this._updateView.bind(this);
		this._select = new Select();
		app.stores.SourceStore.addListener(this._onUpdateView);
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

	_updateView(SourceStore) {
		const model = SourceStore.sources;
		if (model.isLoading) {
			this._spinner.show();
		} else {
			this._showSources(model);
			this._select.updateView(model);
			this._spinner.hide();
		}
	}

	_bindActions() {
		delegateClick(baseSelector, sourceClassName, this._onSourceClick.bind(this));
	}

	_onSourceClick(target) {
		const id = target.getAttribute('data-id');
		navigateToArticles(id);
	}

	_showSources(model) {
		const html = template.render(model);
		addHtml(this._selecotor, html);
		this._select.render(selectSelector);
		this._bindActions();
	}
}
