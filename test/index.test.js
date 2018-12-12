import removeDuplicatedSpaces from '../src/utils/remove-duplicated-spaces';
import toLowerCase from '../src/utils/to-lower-case';
import setHTMLTo from '../src/utils/set-html-to';
import getValueFrom from '../src/utils/get-value-from';

describe('function', function () {
	let stringWithManySpaces;
	let stringWithSingleSpaces;
	let upperCaseString;
	let mixedCasesString;
	let StringWithoutletters;

	beforeEach(function () {
		stringWithManySpaces = 'Old man     just was   singing...';
		stringWithSingleSpaces = 'Old man just was singing...';
		StringWithoutletters = '654454_-=$%&*!(){}|';
		upperCaseString = 'UPPER CASE STRING';
		mixedCasesString = 'UPPER And low CaSe STriNG';
	});

	describe('toLowerCase', function () {
		describe('can', function () {
			test('translate upper case string to lower case', function () {
				expect(toLowerCase(upperCaseString)).toEqual('upper case string');
			});
			test('translate string with mixed case to lower case', function () {
				expect(toLowerCase(mixedCasesString)).toEqual('upper and low case string');
			});
		});
		describe('work', function () {
			test('correctly with non letters symbols', function () {
				expect(toLowerCase(StringWithoutletters)).toEqual('654454_-=$%&*!(){}|');
			});
		});
	});

	describe('removeDuplicatedSpaces', function () {
		describe('can', function () {
			test('remove duplicate spaces from string', function () {
				expect(removeDuplicatedSpaces(stringWithManySpaces)).toEqual('Old man just was singing...');
			});
		});
		describe('work', function () {
			test('correctly with single spaces', function () {
				expect(removeDuplicatedSpaces(stringWithSingleSpaces)).toEqual('Old man just was singing...');
			});
		});
	});
});