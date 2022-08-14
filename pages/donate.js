import { css } from '@emotion/css';
import React from 'react';
import Profile from '../components/profile';
import Social from '../components/social';
import db from '../db/db.json';

export default function Donate() {
	return (
		<div className={wrapProfile}>
			<Profile />

			<Social />

			<section>
				<div className='pt-5'>
					<div className='pb-4'>
						<h4 className='fw-bold'>Donate</h4>
						<small className='text-muted'>
							If you are helped by my product. I accept donations, so that all products can continue to operate and can continue create
							new products open source.
						</small>
					</div>

					{db.owner.donate.map((item, index) => {
						return (
							<details key={index} className='pb-2 pt-2'>
								<summary className='fw-bold'>{item.name}</summary>
								<div className='ps-3 pt-3'>
									{item.is_link ? (
										<a href={item.key}>
											<p>{item.key}</p>
										</a>
									) : (
										<p>{item.key}</p>
									)}
								</div>
							</details>
						);
					})}
				</div>
			</section>
		</div>
	);
}

const wrapProfile = css`
	padding-top: 60px;
`;
