export function manipulateWithElements(querySelector, callback) {
	const elements = document.querySelectorAll(querySelector);
	for (const element of elements) {
		callback(element);
	}
}

export function addHtml(querySelector, html) {
	manipulateWithElements(querySelector, (element) => element.innerHTML = html);
}

export function subscribeOnClick(querySelector, callback) {
	manipulateWithElements(querySelector, (element) => element.onclick = callback);
}

export function remove(querySelector) {
	manipulateWithElements(querySelector, (element) => element.parentNode.removeChild(element));
}

export function find(querySelector) {
	return document.querySelectorAll(querySelector);
}

export function setText(querySelector, text) {
	manipulateWithElements(querySelector, (element) => element.textContent = text);
}

export function delegateClick(parentClassName, targetClassName, callback) {
	subscribeOnClick(parentClassName, (event) => {
		let target = event.target;
		while (target.className !== parentClassName) {
			if (target.className === targetClassName) {
				callback(target);
				return;
			}
			target = target.parentNode;
			if (!target) {
				return;
			}
		}
	});
}
