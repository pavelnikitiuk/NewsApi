import Abstract from './AbstractClass';
import Spinner from './../Spinner/Spinner';
import { addHtml, subscribeOnClick } from './../../utils/domManipulation';
const abstractMethods = ['loadData', 'bindActions'];
const abstractGetters = ['template'];


export default class BaseController extends Abstract {
	constructor() {
		super(abstractMethods, abstractGetters);
	}

	render(elementSelector) {
		this._selecotor = elementSelector;
		this._spinner = new Spinner(this._selecotor);
		this._spinner.show();
		this.loadData().then(this._onData.bind(this));
	}

	_onData(response) {
		this._spinner.hide();
		if (typeof (this.processWithResponse) === "function")
			this.processWithResponse(response);
		const templateHtml = this.template.render(response);
		addHtml(this._selecotor, templateHtml);
		this.bindActions();
	}
} 