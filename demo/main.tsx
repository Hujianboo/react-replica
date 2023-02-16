/* eslint-disable no-debugger */
import React from 'react';
import { ReactElementType } from 'shared/ReactTypes';
import ReactDom from 'react-dom/client';
import { useState } from 'react';
const App = () => {
	const [num, setNum] = useState(10000);
	const [num1, setNum1] = useState(100086);
	return (
		<p>
			<div
				onClick={() => {
					console.log('父亲被冒泡触发');
				}}
			>
				<div
					onClick={(e) => {
						console.log('点击');
						e.stopPropagation();
					}}
				>
					点击
				</div>
			</div>
		</p>
	);
};

const element = document.getElementById('root');
ReactDom.createRoot(element as Element).render((<App />) as ReactElementType);
