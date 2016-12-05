import template from './Select.mustache';
import app from './../../services/applicationService';
import { getSources, toggleCategories } from './../../actions/sourcesActions';
import './Select.scss';
import { addHtml, subscribeOnClick } from './../../utils/domManipulation';

const baseClassName = 'drop-down';
const baseSelector = `.${baseClassName}`;
const buttonSelector = `${baseSelector}__button`;
const itemSelector = `${baseSelector}__item`;

export default class Select {
	constructor() {
		this._onChangeHandler = this.updateView.bind(this);
		// app.stores.SourceStore.addListener(this._onChangeHandler);
	}

	destructor() {
		// app.stores.SelectStore.removeListener(this._onChangeHandler);
	}

	render(elementSelector) {
		this._selector = elementSelector;
		this._buttonSelector = `${this._selector} ${buttonSelector}`;
		this._itemSelector = `${this._selector} ${itemSelector}`;
		// this.updateView(app.stores.SourceStore);
	}

	updateView({categoriesVisibility, categories, category}) {
		const html = template.render({categoriesVisibility, categories, category});
		addHtml(this._selector, html);
		this._bindActions();
	}

	_bindActions() {
		subscribeOnClick(this._buttonSelector, toggleCategories);
		subscribeOnClick(this._itemSelector, this._onItemClick.bind(this));
	}

	_onItemClick({ target }) {
		const text = target.textContent.trim();
		getSources(text);
	}
}
