import equal from '../../../node_modules/deep-equal';
import Abstract from './AbstractClass';
import { addHtml, subscribeOnClick } from './../../utils/domManipulation';


const abstractMethods = ['bindActions'];
const abstractGetters = ['template'];


export default class Component extends Abstract {
    constructor() {
        super(abstractMethods, abstractGetters);
        this._data = '';
    }

    updateView(data) {
        const json = JSON.stringify(data);
        if (json === this._data)
            return;
        this._data = json;
        const html = this.template.render(data);
		addHtml(this._selector, html);
		this.bindActions();
    }
}