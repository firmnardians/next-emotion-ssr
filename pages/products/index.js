import React from 'react';
import ListProduct from '../../components/list';
import db from '../../db/db.json';

export default function ProductPage() {
	return (
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
	);
}
