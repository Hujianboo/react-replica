/* eslint-disable no-debugger */
import React from 'react';
import { ReactElementType } from 'shared/ReactTypes';
import ReactDom from 'react-dom/client';
import { useState } from 'react';
const App = () => {
	const [num, setNum] = useState(100);
	const [num1, setNum1] = useState(100);
	return (
		<p>
			<span>
				<h1>{num}</h1>
			</span>
		</p>
	);
};

const element = document.getElementById('root');
ReactDom.createRoot(element as Element).render((<App />) as ReactElementType);
