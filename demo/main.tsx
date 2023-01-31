/* eslint-disable no-debugger */
import React from 'react';
import ReactDom from 'react-dom/client';

const jsx = (
	<div>
		<h1>
			<span>jsx</span>
		</h1>
	</div>
);
const element = document.getElementById('root');
ReactDom.createRoot(element as Element).render(jsx);
