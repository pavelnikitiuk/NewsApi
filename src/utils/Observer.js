export default class Observer {
	constructor() {
		this._subscribers = {
			any: [],
		};
	}

	subscribe(fn, type = 'any') {
		const subscribes = this._subscribers;
		if (typeof (subscribes[type]) === undefined) {
			subscribes[type] = [];
		}
		subscribes[type].push(fn);
	}

	publish(payload, type) {
		this._visitSubscribers('publish', payload, type);
	}

	unsubscribe(fn, type) {
		this._visitSubscribers('unsubscribe', fn, type);
	}

	_visitSubscribers(action, arg, type = 'any') {
		const subscribers = this._subscribers[type] || [];
		for (const key in subscribers) {
			const subscriber = subscribers[key];
			if (action === 'publish') {
				subscriber(arg);
			} else {
				if (subscriber === arg) {
					subscribers.splice(key, 1);
				}
			}
		}
	}
}
