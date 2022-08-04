import React from 'react';
import db from '../../db/db.json';

export default function Social() {
	return (
		<section>
			<div className='pt-2'>
				{db.owner.media.map((item, index) => {
					return (
						<a target='_blank' key={index} href={item.url} rel='noreferrer'>
							<button type='button' className='btn btn-secondary btn-sm me-1 px-4'>
								{item.name}
							</button>
						</a>
					);
				})}
			</div>
		</section>
	);
}
