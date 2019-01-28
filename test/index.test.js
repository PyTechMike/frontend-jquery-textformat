import removeDuplicatedSpaces from '../src/utils/remove-duplicated-spaces';
import toLowerCase from '../src/utils/to-lower-case';

describe('function', function () {
	let stringWithManySpaces;
	let stringWithSingleSpaces;
	let upperCaseString;
	let mixedCasesString;
	let stringWithoutletters;
	let allCasesSrting;

	beforeEach(function () {
		stringWithManySpaces = 'Old man     just was   singing...';
		stringWithSingleSpaces = 'Old man just was singing...';
		stringWithoutletters = '654454_-=$%&*!(){}|';
		upperCaseString = 'UPPER CASE STRING';
		mixedCasesString = 'UPPER And low CaSe STriNG';
		allCasesSrting = 'UPPER And    low CaSe STriNG  with    34545 and 654454_-=$%&*!(){}|., also  some whitespaces to trim';
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
		describe('work correctly with', function () {
			test('non letters symbols', function () {
				expect(toLowerCase(stringWithoutletters)).toEqual('654454_-=$%&*!(){}|');
			});
			test('any string difficulty', function () {
				expect(toLowerCase(allCasesSrting)).toEqual('upper and    low case string  with    34545 and 654454_-=$%&*!(){}|., also  some whitespaces to trim');
			});
		});
	});

	describe('removeDuplicatedSpaces', function () {
		describe('can', function () {
			test('remove duplicate spaces from string', function () {
				expect(removeDuplicatedSpaces(stringWithManySpaces)).toEqual('Old man just was singing...');
			});
		});
		describe('work correctly with', function () {
			test('single spaces', function () {
				expect(removeDuplicatedSpaces(stringWithSingleSpaces)).toEqual('Old man just was singing...');
			});
			test('any string difficulty', function () {
				expect(removeDuplicatedSpaces(allCasesSrting)).toEqual('UPPER And low CaSe STriNG with 34545 and 654454_-=$%&*!(){}|., also some whitespaces to trim');
			});
		});
	});
});