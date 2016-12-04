import Application from './../utils/Application';
import SourceStore from './../stores/SourceStore';
import Dispatcher from './../utils/Dispatcher';

export default new Application ({
    stores: [SourceStore],
    dispatcher: new Dispatcher(),
})