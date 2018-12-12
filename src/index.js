import $ from 'jquery';
import { compose } from 'ramda';

import removeDuplicatedSpaces from './utils/remove-duplicated-spaces';
import toLowerCase from './utils/to-lower-case';
import setHTMLTo from './utils/set-html-to';
import getValueFrom from './utils/get-value-from';

let output = $('output'),
	textarea = $('textarea');

let handleInput = compose(
	setHTMLTo(output),
	removeDuplicatedSpaces,
	toLowerCase,
	getValueFrom(textarea)
);

textarea.on('input', handleInput);