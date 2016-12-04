import Store from './../utils/Store';
import {UPDATE_SOURCE} from './../constants/sources';

export default class SourceStore extends Store {
    constructor() {
        super();
        this.handlers = {
            [UPDATE_SOURCE]: 'updateSource'
        };
        this._sources = [];
    }

    static get storeName () {
        return 'SourceStore';
    }

    updateSource(sources) {
        this._sources = sources;
        return this.emitChange();
    }

    get sources () {
        return this._sources;
    }

}
