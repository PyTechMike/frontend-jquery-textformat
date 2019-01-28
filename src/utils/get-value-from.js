import { curryN } from 'ramda';

export default curryN(2, function (element) {
	return element.val();
});