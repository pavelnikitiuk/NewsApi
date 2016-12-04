import Observer from './Observer';

export default class Dispatcher {
    constructor () {
        this._observer = new Observer();
    }

    registerStore(store) {
        this._observer.subscribe(store.handleAction.bind(store));
    }

    dispatch(actionType, payload) {
        this._observer.publish({actionType, payload});
    }
}