/* eslint-disable no-debugger */
import React from 'react';
import { ReactElementType } from 'shared/ReactTypes';
import ReactDom from 'react-dom/client';
import { useState } from 'react';
const App = () => {
	const [num, setNum] = useState(10000);
	window.setNum = setNum;
	const arr =
		num % 2 === 0
			? [<div key="1">你</div>, <div key="2">我</div>, <div key="3">他</div>]
			: [<div key="3">他</div>, <div key="2">我</div>];

	return <ul onClickCapture={() => setNum((num) => num + 1)}>{arr}</ul>;
};

const element = document.getElementById('root');
ReactDom.createRoot(element as Element).render((<App />) as ReactElementType);
