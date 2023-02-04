import { Action } from 'shared/ReactTypes';
export interface Dispatcher {
	useState: <T>(initialState: (() => T) | T) => [T, Dispatch<T>];
}
export type Dispatch<T> = (action: Action<T>) => void;
const currentDispatcher: { current: Dispatcher | null } = {
	current: null
};
export const resolveDispatcher = () => {
	const dispatcher = currentDispatcher.current;
	if (dispatcher === null) {
		throw new Error('Dispatcher is null');
	} else {
		return dispatcher;
	}
};
export default currentDispatcher;
