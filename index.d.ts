declare namespace shortNumbers {
  interface Options {
		/**
		Set the value of the k which is the prefix 'kilo'
		@default 'K'
		*/
    readonly k?: string;

		/**
		Set the value of the m  which is the prefix 'million'
		@default 'M'
		*/
    readonly m?: string;

    /**
		Set the value of the b which is the prefix 'billion'
		@default 'B'
		*/
    readonly b?: string;

		/**
		Set the value of the m  which is the prefix 'trillion'
		@default 'T'
		*/
    readonly t?: string;

		/**
		Specify if the prefix contains an extra space
		*/
    readonly space?: boolean;
  }
}

/**
Make short numbers from long numbers

@param input - The input you want to convert
@returns The input converted to string if it is formatted

@example
```
import shortNumbers from 'short-numbers';

shortNumbers('10300', { space: true })
// => '10.3 K'
```
*/
declare function shortNumbers(
  input: string | number,
  options?: shortNumbers.Options,
): string;

export = shortNumbers;