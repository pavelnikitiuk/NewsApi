import template from './Select.mustache';
import app from './../../services/applicationService';
import { changeSelect, toggleVisibility } from './../../actions/selectActions';
import { getSources } from './../../actions/sourcesActions';
import './Select.scss';
import { addHtml, subscribeOnClick } from './../../utils/domManipulation';

const baseClassName = 'drop-down';
const baseSelector = `.${baseClassName}`;
const buttonSelector = `${baseSelector}__button`;
const itemSelector = `${baseSelector}__item`;

export default class Select {
	constructor() {
		this._onChangeHandler = this._onChange.bind(this);
		app.stores.SelectStore.addListener(this._onChangeHandler);
	}

	destructor() {
		app.stores.SelectStore.removeListener(this._onChangeHandler);
	}

	render(elementSelector) {
		this._selector = elementSelector;
		this._buttonSelector = `${this._selector} ${buttonSelector}`;
		this._itemSelector = `${this._selector} ${itemSelector}`;
		this._onChange(app.stores.SelectStore);
	}

	_onChange(selectStore) {
		const model = selectStore.select;
		const html = template.render(model);
		addHtml(this._selector, html);
		this._bindActions();
	}

	_bindActions() {
		subscribeOnClick(this._buttonSelector, toggleVisibility);
		subscribeOnClick(this._itemSelector, this._onItemClick.bind(this));
	}

	_onItemClick({ target }) {
		const text = target.textContent.trim();
		changeSelect(text);
		getSources(text);
	}
}
