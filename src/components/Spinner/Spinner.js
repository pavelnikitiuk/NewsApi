import { remove, find, addHtml, manipulateWithElements } from './../../utils/domManipulation';
import template from './Spinner.mustache';
import './Spinner.scss';

const spinnerClassName = 'spinner';
const spinnerSelecor = `.${spinnerClassName}`;


export default class Spinner {
	constructor(elementSelector) {
		this._rootSelector = elementSelector;
		this._selector = `${this._selector} ${spinnerSelecor}`;
	}

	show() {
		const elements = find(this._selector);
		if (elements.length === 0) {
			const html = template.render();
			addHtml(this._rootSelector, html);
		} else {
			elements.forEach((element) => element.style.visibility = 'visible');
		}
	}

	hide() {
		manipulateWithElements(this._selector, (element) => element.style.visibility = 'hidden');
	}

	remove() {
		remove(this._selector);
	}
}
