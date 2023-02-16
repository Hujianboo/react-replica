// ReactDOM.createRoot(root).render(<App/>)

import {
	createContainer,
	updateContainer
} from 'react-reconciler/src/fiberReconciler';
import { ReactElementType } from 'shared/ReactTypes';
import { Container } from './hostConfig';
import { initEvent } from './SyntheticEvent';

export function createRoot(container: Container) {
	const root = createContainer(container);
	// debugger;
	return {
		render(element: ReactElementType) {
			console.log(element);
			// 尝试先绑定一个click先,可用一个map遍历所有事件
			initEvent(container, 'click');
			updateContainer(element, root);
		}
	};
}
