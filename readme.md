# short-numbers [![Build Status](https://travis-ci.com/abranhe/short-numbers.svg?branch=master)](https://travis-ci.com/abranhe/short-numbers)

> Make short numbers from long numbers

### Why?

- Actively maintained.
- Supports space before sufix.
- Include type definitions.

## Install

```
$ npm install short-numbers
```

## Usage

```js
const shortNumbers = require('short-numbers');

shortNumbers('1000')
// => '1K'

shortNumbers(1000)
// => '1K'

shortNumbers('10300')
// => '10.3K'

shortNumbers('1000000')
// => '1M'

shortNumbers('1000000000')
// => '1B'

shortNumbers('1000000000000')
// => '1T'

shortNumbers('10300', { space: true })
// => '10.3 K'

shortNumbers('1000000', { m: 'million', space: true })
// => '1 million'
```

## API

### shortNumbers(input, [options])

#### input

Type: `string` | `number`

The input number you'd like to convert to a short number. It must be a parsable to `number` string or a number.

#### options

Type: `object`

##### k

Type: `string`<br>
Default: `'K'`

Set the value of the k which is the prefix 'kilo'.

##### m

Type: `string`<br>
Default: `'M'`

Set the value of the m  which is the prefix 'million'.

##### b

Type: `string`<br>
Default: `'B'`

Set the value of the b which is the prefix 'billion'.

##### t

Type: `string`<br>
Default: `'T'`

Set the value of the t which is the prefix 'trillion'.

##### space

Type: `string`<br>
Default: `true`

Specify if the contains space before sufix.

## Todo

- Supports for plural sufixes.

> Current behavior

```js
shortNumbers('2000000', { m: 'million', space: true })
// => 2 million
```

> Desired behavior

```
// => 2 millions
```

- Suport for prefix. An optional string to prepend to the value, e.g. `'$'`.

## License

MIT © [Abraham Hernandez](http://abranhe.com)
