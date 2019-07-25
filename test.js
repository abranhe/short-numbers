import test from 'ava';
import shortNumbers from '.';

test('Invalid input', t => {
	const error = t.throws(() => shortNumbers({}), TypeError);
	t.is(error.message, 'Expected an String/Number, got object');
});

test('Non numerical string', t => {
	const error = t.throws(() => shortNumbers('abc'), TypeError);
	t.is(error.message, 'Expected an valid number, or a valid numerical string, got \'abc\'');
});

test('Negative numbers', t => {
	t.is(shortNumbers(-1), -1);
	t.is(shortNumbers('-1'), '-1');
});

test('Regular Numbers', t => {
	t.is(shortNumbers(0), 0);
	t.is(shortNumbers(100), 100);
	t.is(shortNumbers(1000), '1K');
	t.is(shortNumbers(10300), '10.3K');
	t.is(shortNumbers(100300), '100.3K');
	t.is(shortNumbers(302970), '303K');
	t.is(shortNumbers(1000000), '1M');
	t.is(shortNumbers(1000000000), '1B');
	t.is(shortNumbers(1000000000000), '1T');
});

test('String Numbers', t => {
	t.is(shortNumbers('0'), '0');
	t.is(shortNumbers('100'), '100');
	t.is(shortNumbers('1000'), '1K');
	t.is(shortNumbers('10300'), '10.3K');
	t.is(shortNumbers('100300'), '100.3K');
	t.is(shortNumbers('302970'), '303K');
	t.is(shortNumbers('1000000'), '1M');
	t.is(shortNumbers('1000000000'), '1B');
	t.is(shortNumbers('1000000000000'), '1T');
});

test('Options', t => {
	t.is(shortNumbers('1000', {k: 'k'}), '1k');
	t.is(shortNumbers('10300', {space: true}), '10.3 K');
	t.is(shortNumbers('1000000', {m: 'million', space: true}), '1 million');
	t.is(shortNumbers('1000000000', {b: 'billion', space: true}), '1 billion');
	t.is(shortNumbers('1000000000000', {t: 'trillion', space: true}), '1 trillion');
});
