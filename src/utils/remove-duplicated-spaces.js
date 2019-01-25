import { trim } from 'lodash';

import splitBy from './split-by';
import joinWith from './join-with';

export default function removeDuplicatedSpaces (string) {
	let repeatedSpacesRegExp = /\s* \s*/;
	let joinerString = ' ';

	return joinWith(splitBy(string, repeatedSpacesRegExp), joinerString);
}