import $ from 'jquery';
import './styles/style.css';
import { compose } from 'ramda';
import { trim } from 'lodash';

import removeDuplicatedSpaces from './utils/remove-duplicated-spaces';
import setHTMLTo from './utils/set-html-to';
import getValueFrom from './utils/get-value-from';
import toLowerCase from './utils/to-lower-case';

let output = $('output'),
	textarea = $('textarea');

let handleInput = compose(
	setHTMLTo(output),
	trim,
	removeDuplicatedSpaces,
	toLowerCase,
	getValueFrom(textarea)
);

textarea.on('input', handleInput);