export default class Dispather {
    constructor() {
        this._callbacks = [];
    }

    register(callback) {
        this._callbacks.push(callback);
        return this;
    }

    dispatch(payload) {
        const resolves = [];
        const rejects = [];
        const promises = this._callbacks.map((callback, index) => {
            new Promise((resolve, reject) => {
                resolves[index] = resolve;
                rejects[index] = reject;
            })
        });
        this._callbacks.forEach((callback, index) => {
            Promise.resolve(callback(payload))
                .then(() => resolves[index](payload), 
                      () => rejects[index](new Error('Dispatcher callback unsuccessful')));
        });
    }
}