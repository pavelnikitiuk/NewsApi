import Abstract from './AbstractClass';
import Spinner from './../Spinner/Spinner';
import { addHtml } from './../../utils/domManipulation';
const abstractMethods = ['loadData', 'bindActions', 'destructor'];
const abstractGetters = ['template'];


export default class BaseController extends Abstract {
	constructor() {
		super(abstractMethods, abstractGetters);
	}

	render(elementSelector) {
		this._selecotor = elementSelector;
		this._spinner = new Spinner(this._selecotor);
		this._spinner.show();
		this.loadData();
	}

	onDataRecived(response) {
		this._spinner.hide();
		if (typeof (this.processWithResponse) === 'function') {
			this.processWithResponse(response);
		}
		const templateHtml = this.template.render(response);
		addHtml(this._selecotor, templateHtml);
		this.bindActions();
	}
}
