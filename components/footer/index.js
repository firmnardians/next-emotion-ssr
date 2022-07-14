import { css } from '@emotion/css';
import React from 'react';

const getYear = new Date().getFullYear();

export default function Footer() {
	return (
		<footer className={footer}>
			<div className={wrapFooter}>
				<p className='fw-normal'>Built with love 🖤</p>
				<small>&#169; {getYear} by firmnardians</small>
			</div>
		</footer>
	);
}

const wrapFooter = css`
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
`;

const footer = css`
	position: relative;
	padding: 20px;
`;
