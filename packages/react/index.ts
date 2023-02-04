import { resolveDispatcher, Dispatcher } from './src/currentDispatcher';
import currentDispatcher from './src/currentDispatcher';
import { jsxDEV } from './src/jsx';

export const useState: Dispatcher['useState'] = (initialState) => {
	const currentDispatcher = resolveDispatcher();
	return currentDispatcher.useState(initialState);
};
export const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = {
	currentDispatcher
};
export default {
	version: '1.0.0',
	createElement: jsxDEV
};
