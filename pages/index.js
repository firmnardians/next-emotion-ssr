import { css } from '@emotion/css';
import db from '../db/db.json';
import ListProduct from '../components/list';
import Profile from '../components/profile';
import Social from '../components/social';

export default function Home() {
	return (
		<div className={wrapProfile}>
			<Profile />

			<Social />

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

const wrapProfile = css`
	padding-top: 60px;
`;
