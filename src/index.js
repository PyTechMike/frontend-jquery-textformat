import $ from 'jquery';
import './styles/style.css';
import { compose } from 'ramda';
import { toLower, trim } from 'lodash';

import removeDuplicatedSpaces from './utils/remove-duplicated-spaces';
import setHTMLTo from './utils/set-html-to';
import getValueFrom from './utils/get-value-from';

let output = $('output'),
	textarea = $('textarea');

let handleInput = compose(
	setHTMLTo(output),
	trim,
	removeDuplicatedSpaces,
	toLower,
	getValueFrom(textarea)
);

textarea.on('input', handleInput);