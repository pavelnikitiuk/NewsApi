import Store from './../utils/Store';
import { SELECT_CHANGED, TOGGLE_VISIBILITY } from './../constants/select';

export default class SelectStore extends Store {
	constructor() {
		super();
		this.handlers = {
			[SELECT_CHANGED]: 'selectChanged',
			[TOGGLE_VISIBILITY]: 'togleVisibility',
		};
		this._model = {
			items: ['all', 'business', 'entertainment', 'gaming', 'general',
				'music', 'science-and-nature', 'sport', 'technology'],
			visibility: 'hidden',
		};
		this._model.active = this._model.items[0];
	}

	static get storeName() {
		return 'SelectStore';
	}

	togleVisibility() {
		if (this._model.visibility === 'hidden') {
			this._model.visibility = 'visible';
		} else {
			this._model.visibility = 'hidden';
		}
		return this.emitChange();
	}

	selectChanged(newSelect) {
		this._model.active = newSelect;
		this._model.visibility = 'hidden';
		return this.emitChange();
	}

	get select() {
		return this._model;
	}

}
