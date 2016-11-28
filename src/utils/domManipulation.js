export function addHtml(querySelector, html) {
    manipulateWithElements(querySelector, (element) => element.innerHTML = html);
}

export function subscribeOnClick(querySelector, callback){
    manipulateWithElements(querySelector, (element) => element.onclick = callback);
}

export function remove(elentSelector) {
    manipulateWithElements(querySelector, (element) => element.parentNode.removeChild(element));
}

export function manipulateWithElements(querySelector, callback) {
    const elements = document.querySelectorAll(querySelector);
    for(const element of elements) {
        callback(element);
    }
}

export function find(querySelector) {
    return document.querySelectorAll(querySelector);
}
