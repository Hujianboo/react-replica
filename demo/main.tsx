/* eslint-disable no-debugger */
import React from 'react';
import ReactDom from 'react-dom/client';

const App = () => {
	return (
		<p>
			<span>
				<h1>Content</h1>
				{/* <TestComponent /> */}
			</span>
		</p>
	);
};
const TestComponent = () => {
	return <h1>test</h1>;
};
const element = document.getElementById('root');
ReactDom.createRoot(element as Element).render(<App />);
