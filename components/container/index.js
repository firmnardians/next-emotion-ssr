import { css } from '@emotion/css';
import React, { memo } from 'react';
import { CONTAINER_WIDTH } from '../../config';

export default memo(function Container({ children }) {
	return (
		<main className={containerApp}>
			<div className='p-4'>{children}</div>
		</main>
	);
});

const containerApp = css`
	max-width: ${CONTAINER_WIDTH}px;
	margin: auto;
	padding-top: 50px;
`;
