export default class AbstractClass {
	constructor(methods = [], getProperties = [], setProperties = []) {
		this._checkMethods(methods);
		this._checkGetProperties(getProperties);
		this._checkSetProperties(setProperties)
	}
	_checkMethods(methods) {
		for (const method of methods) {
			if (typeof (this[method]) !== 'function') {
				throw new TypeError(`Method ${method} doesn't implemented`);
			}
		}
	}

	_checkGetProperties(properties) {
		for (const property of properties) {
			if (typeof (this.__lookupGetter__(property)) !== 'function') {
				throw new TypeError(`Getter property ${property} doesn't exist`);
			}
		}
	}

	_checkSetProperties(properties) {
		for (const property of properties) {
			if (typeof (this.__defineSetter__(property)) !== 'function') {
				throw new TypeError(`Getter property ${property} doesn't exist`);
			}
		}
	}
}


