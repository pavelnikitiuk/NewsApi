import Observer from './Observer';

export default class Store {
	constructor() {
		this._observer = new Observer();
	}

	static get storeName() {
		return 'Store';
	}

	addListener(callback) {
		this._observer.subscribe(callback);
	}

	removeListener(callback) {
		this._observer.unsubscribe(callback);
	}

	emitChange() {
		this._observer.publish(this);
	}

	handleAction({ actionType, payload }) {
		const handler = this.handlers[actionType];
		this[handler] && this[handler](payload);
	}
}
