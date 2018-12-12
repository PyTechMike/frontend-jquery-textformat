export default function setHTMLTo (text) {
	return function (element) {
		return element.html(text);
	};
}