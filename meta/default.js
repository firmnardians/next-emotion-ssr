import Head from 'next/head';
import React from 'react';

export default function DefaultMeta({ title = 'Firmnardians', description = 'Ade Firman Ardiansyah' }) {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content={description} />
			<link rel='icon' href='/favicon.ico' />
			<meta property='og:url' content='https://firmnardians.vercel.app' />
			<meta property='og:type' content='website' />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content='/img/preview.png' />
			<meta property='og:locale' content='id_ID' />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content='/img/preview.png' />
		</Head>
	);
}
