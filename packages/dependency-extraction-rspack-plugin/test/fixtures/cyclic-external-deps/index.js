/**
 * WordPress dependencies
 */
import { store } from '@wordpress/interactivity';

/**
 * Internal dependencies
 */
import { a } from './a';

export const someFunction = () => {
	store( 'test', {
		state: {
			a,
		},
	} );
	return a;
};
