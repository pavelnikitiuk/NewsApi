export function addHtml(querySelector, html) {
    const elements = document.querySelectorAll(querySelector);
    for(const element of elements) {
        element.innerHTML = html;
    }
}