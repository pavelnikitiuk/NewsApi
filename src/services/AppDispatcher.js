import Dispatcher from './Dispatcher';

export default class AppDispatcher extends Dispatcher {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action,
        });
    }
}
