export default class Applicaion {
    constructor({stores = [], dispatcher}) {
        this.dispatcher = dispatcher;
        this.stores = {};
        stores.forEach((Store) => {
            this.stores[Store.storeName] = new Store();
        });
        this._registerStores();
    }

    _registerStores() {
        for(const key in this.stores) {
            this.dispatcher.registerStore(this.stores[key]);
        }
    }
}