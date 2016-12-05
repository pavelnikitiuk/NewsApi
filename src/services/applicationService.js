import Application from './../utils/Application';
import stores from './../stores';
import Dispatcher from './../utils/Dispatcher';

export default new Application ({
    stores,
    dispatcher: new Dispatcher(),
})