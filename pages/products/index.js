import React, { Fragment } from 'react';
import ListProduct from '../../components/list';
import db from '../../db/db.json';
import DefaultMeta from '../../meta/default';

export default function ProductPage() {
	return (
		<Fragment>
			<DefaultMeta
				title='Discover Products - Firmnardians'
				description='Best products every day. Discover the latest mobile apps, websites and package products from Ade Firman Ardiansyah.'
			/>
			<div className='pt-4'>
				<div className='pb-4'>
					<h4 className='fw-bold'>Products</h4>
				</div>

				<div className=''>
					{db.products.map((item, index) => {
						return <ListProduct data={item} key={index} />;
					})}
				</div>
			</div>
		</Fragment>
	);
}
