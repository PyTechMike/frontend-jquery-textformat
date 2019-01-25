// export default function setHTMLTo (element) {
// 	return function (text) {
// 		return element.html(text);
// 	};
// }

import { curry } from 'ramda';

export default curry(function (element, text) {
	return element.html(text);
});