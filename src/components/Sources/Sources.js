import { delegateClick, addHtml } from './../../utils/domManipulation';
import app from './../../services/applicationService';
import { getSources } from './../../actions/sourcesActions';
import Spinner from './../Spinner/Spinner';
import { navigateToArticles } from './../../actions/routeActions';
import Select from './../Select/Select';
import Component from './../Base/Component';

import template from './Sources.mustache';
import './Sources.scss';

const baseClassName = 'sources';
const baseSelector = `.${baseClassName}`;
const sourceClassName = 'source';
const selectSelector = '.select';

export default class Sources extends Component {

	constructor() {
		super();
		this._onUpdateView = this._storeChanged.bind(this);
		this._select = new Select();
		app.stores.SourceStore.addListener(this._onUpdateView);
	}

	destructor() {
		app.stores.SourceStore.removeListener(this._onUpdateView);
	}

	render(elementSelector) {
		this._selector = elementSelector;
		this._spinner = new Spinner(elementSelector);
		addHtml(this._selector, '');
		this._select.render(selectSelector);
		getSources(app.stores.SourceStore.sources.category);
	}

	get template() {
		return template;
	}

	_storeChanged(SourceStore) {
		const model = SourceStore.sources;
		if (model.isLoading) {
			this._spinner.show();
		} else {
			this.updateView({ sources: model.sources });
			this._select.updateView({ category: model.category, categories: model.categories, categoriesVisibility: model.categoriesVisibility });
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

	// _showSources(model) {
	// 	const html = template.render(model);
	// 	addHtml(this._selecotor, html);
	// 	this._select.render(selectSelector);
	// 	this._bindActions();
	// }
}
