import template from './Source.mustache';

export default class Source {
	constructor(source) {
		this._source = source;
	}

	get html() {
		return template.render(this._source);
	}
}
