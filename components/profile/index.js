import { css } from '@emotion/css';
import Image from 'next/image';
import React from 'react';
import db from '../../db/db.json';

export default function Profile() {
	return (
		<section>
			<div className='pb-2'>
				<Image src={db.owner.profile_url} width='125px' height='125px' alt='Profile Image' className={imgProfile} />
			</div>

			<div className='pb-2'>
				<h4 className='fw-bold'>{db.owner.full_name}</h4>
				<p className='text-muted pt-1'>{db.owner.desc}</p>
			</div>
		</section>
	);
}

const imgProfile = css`
	object-fit: cover;
	border-radius: 100px;
`;
