import template from './Select.mustache';
import app from './../../services/applicationService';
import { getSources, toggleCategories } from './../../actions/sourcesActions';
import './Select.scss';
import {subscribeOnClick} from './../../utils/domManipulation';
import Component from './../Base/Component';

const baseClassName = 'drop-down';
const baseSelector = `.${baseClassName}`;
const buttonSelector = `${baseSelector}__button`;
const itemSelector = `${baseSelector}__item`;

export default class Select extends Component {
	get template () {
		return template;
	}

	render(elementSelector) {
		this._selector = elementSelector;
		this._buttonSelector = `${this._selector} ${buttonSelector}`;
		this._itemSelector = `${this._selector} ${itemSelector}`;
		this.bindActions();
		// this.updateView(app.stores.SourceStore);
	}

	bindActions() {
		subscribeOnClick(this._buttonSelector, toggleCategories);
		subscribeOnClick(this._itemSelector, this._onItemClick.bind(this));
	}

	_onItemClick({ target }) {
		const text = target.textContent.trim();
		getSources(text);
	}
}
