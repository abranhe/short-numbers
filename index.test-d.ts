import { expectType } from 'tsd';
import shortNumbers = require('.');

const options: shortNumbers.Options = {};

expectType<String>(shortNumbers('100'));
expectType<String>(shortNumbers('1000', { k: 'k' }));
expectType<String>(shortNumbers('1000000', { m: 'M' }));
expectType<String>(shortNumbers('1000000000', { b: 'B' }));
expectType<String>(shortNumbers('1000000000000', { t: 'T' }));
expectType<String>(shortNumbers('1000', { space: true }));