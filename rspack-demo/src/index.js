import TokenList from '@wordpress/token-list';

const tokens = new TokenList( 'abc def' );
tokens.add( 'ghi' );
tokens.remove( 'def' );
tokens.replace( 'abc', 'xyz' );
console.log( tokens.value ); // eslint-disable-line no-console
// "xyz ghi"
