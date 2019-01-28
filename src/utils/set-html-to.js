import { curry } from 'ramda';

export default curry(function (element, text) {
	return element.html(text);
});