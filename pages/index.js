import { css } from '@emotion/css';
import Image from 'next/image';
import db from '../db/db.json';
import ListProduct from '../components/list';

export default function Home() {
	return (
		<div className={wrapProfile}>
			<section>
				<div className='pb-2'>
					<Image src={db.owner.profile_url} width='125px' height='125px' alt='Profile Image' className={imgProfile} />
				</div>

				<div className='pb-2'>
					<h4 className='fw-bold'>{db.owner.full_name}</h4>
					<p className='text-muted pt-1'>{db.owner.desc}</p>
				</div>
			</section>

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

			<section>
				<div className='pt-5'>
					<div className='pb-4'>
						<h4 className='fw-bold'>Products</h4>
					</div>

					<div className=''>
						{db.products.map((item, index) => {
							return <ListProduct data={item} key={index} />;
						})}
					</div>
				</div>
			</section>
		</div>
	);
}

const imgProfile = css`
	object-fit: cover;
	border-radius: 100px;
`;

const wrapProfile = css`
	padding-top: 60px;
`;
