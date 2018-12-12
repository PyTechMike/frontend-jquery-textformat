export default function removeDuplicatedSpaces (string) {
	let repeatedSpacesRegExp = /\s* \s*/;

	return string.split(repeatedSpacesRegExp).join(' ');
}