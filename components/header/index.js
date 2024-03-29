import { css } from '@emotion/css';
import Link from 'next/link';
import React, { memo } from 'react';
import { IconLink } from 'senirupa';
import { LogoApp } from '../../assets/svg';
import { CONTAINER_WIDTH } from '../../config';

export default memo(function Header() {
	return (
		<header className={headerApp}>
			<div className={wrapContent}>
				<Link href='/'>
					<div className={wrapLogo}>
						<LogoApp size='36' />
					</div>
				</Link>

				<nav className={`${wrapList} d-flex align-items-center justify-content-center`}>
					<ul>
						<Link href='/donate'>
							<li>
								<p className='pointer'>Donate</p>
							</li>
						</Link>

						<a target='_blank' href='https://pagespeed.web.dev/report?url=https%3A%2F%2Ffirmnardians.vercel.app' rel='noreferrer'>
							<li>
								<p>PageSpeed</p>
							</li>
						</a>
					</ul>
				</nav>
			</div>
		</header>
	);
});

const wrapList = css`
	ul {
		margin: 0;
		display: flex;
		align-items: center;

		li {
			list-style: none;
			padding-left: 25px;
			display: flex;
			align-items: center;

			p {
				color: #333333;
				font-weight: 500;
			}

			p:hover {
				color: black;
			}
		}
	}
`;
const headerApp = css`
	background: #fafafa;
	backdrop-filter: saturate(180%) blur(20px);
	background-color: hsla(0, 0%, 100%, 0.72);
	border-bottom: 1px solid #cacaca;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 10;
`;

const wrapContent = css`
	padding: 14px 20px;
	height: 60px;
	max-width: ${CONTAINER_WIDTH}px;
	align-items: center;
	justify-content: space-between;
	display: flex;
	margin: auto;
`;

const wrapLogo = css`
	display: inline-block;
	cursor: pointer;
`;
