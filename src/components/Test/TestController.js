import {addHtml} from './../../utils/domManipulation';
import json from './../../test.json';

export default class TestController {

    render(elementSelector) {
        addHtml(elementSelector,`<pre>${JSON.stringify(json, null, 4)}</pre>`);
    }
}