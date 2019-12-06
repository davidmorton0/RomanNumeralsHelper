class RomanNumerals{
	constructor(){};

	static toRoman(number) {
		let string = ('M').repeat(Math.floor(number / 1000));
		string += this.addNumeral(number, 100);
		string += this.addNumeral(number, 10);
		string += this.addNumeral(number, 1);
		return string;
	}

	static addNumeral(number, factor) {
	  const numberToNume =  {
			1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M' };
		let string = '';
		number = Math.floor(number / factor);
		let unit1 = numberToNume[factor];
		let unit5 = numberToNume[factor * 5];
		let unit10 = numberToNume[factor * 10];
		if (number % 10 == 9) {
			string = unit1 + unit10;
		} else if (number % 10 >= 5) {
			string = unit5;
		} else if ((number % 5) == 4) {
			string = unit1 + unit5;
		}
		if (Math.floor((number % 5) / 1) <= 3) {
			string += unit1.repeat(number % 5);
		};
		return string;
	}

	static fromRoman(numeral) {
		const numeralToNumb = {
			'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
		return numeral.split('').reverse().reduce((sum, num, i, arr) => {
			return sum +
					 	 numeralToNumb[num] *
				 		 ((numeralToNumb[num] > sum || arr[i] == arr[i-1]) ? 1 : -1);
	  }, 0)
	}
}

var assert = require('assert');
assert.equal(RomanNumerals.toRoman(1000), 'M')
assert.equal(RomanNumerals.toRoman(999), "CMXCIX")
assert.equal(RomanNumerals.toRoman(4), 'IV')
assert.equal(RomanNumerals.toRoman(1), 'I')
assert.equal(RomanNumerals.toRoman(1991), 'MCMXCI')
assert.equal(RomanNumerals.toRoman(2006), 'MMVI')
assert.equal(RomanNumerals.toRoman(2020), 'MMXX')
assert.equal(RomanNumerals.fromRoman('XXI'), 21)
assert.equal(RomanNumerals.fromRoman('I'), 1)
assert.equal(RomanNumerals.fromRoman('III'), 3)
assert.equal(RomanNumerals.fromRoman('IV'), 4)
assert.equal(RomanNumerals.fromRoman('MMVII'), 2007)
assert.equal(RomanNumerals.fromRoman('MDCLXIX'), 1669)
