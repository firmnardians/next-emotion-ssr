import { css } from '@emotion/css';
import React from 'react';

export default function ErrorPage() {
	return (
		<div className={center}>
			<h5>Page Not Found</h5>
			<p>The page you are looking for does not exist.</p>
		</div>
	);
}

const center = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 400px;
`;
