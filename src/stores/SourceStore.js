import Store from './../utils/Store';
import { GOT_SOURCES, GET_SOURCES, TOGGLE_CATEGORIES_VISIBILITY } from './../constants/sources';
import Source from './../components/Sources/Source/Source';

export default class SourceStore extends Store {
	constructor() {
		super();
		this.handlers = {
			[GOT_SOURCES]: 'gotSource',
			[GET_SOURCES]: 'getSources',
			[TOGGLE_CATEGORIES_VISIBILITY]: 'togleCategoriesVisibility',
		};
		this._model = {
			sources: [],
			isLoading: false,
			categories: ['all', 'business', 'entertainment', 'gaming', 'general',
				'music', 'science-and-nature', 'sport', 'technology'],
			categoriesVisibility: 'hidden'
		};
		this._model.category = this._model.categories[0];
	}

	static get storeName() {
		return 'SourceStore';
	}

	gotSource(response) {
		this._model.sources = response.sources.map((sourceInfo) => ({
			html: new Source(sourceInfo).html,
		 }));
		this._model.isLoading = false;
		return this.emitChange();
	}

	togleCategoriesVisibility() {
		if (this._model.categoriesVisibility === 'hidden') {
			this._model.categoriesVisibility = 'visible';
		} else {
			this._model.categoriesVisibility = 'hidden';
		}
		return this.emitChange();
	}

	getSources(category) {
		this._model.category = category;
		this._model.categoriesVisibility = 'hidden';
		this._model.isLoading = true;
		return this.emitChange();
	}

	get sources() {
		return this._model;
	}
}
