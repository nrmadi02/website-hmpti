import Head from "next/head";

import {
	Informasi,
	Footer,
	Sosial,
	Bidang,
	Visimisi,
	Profile,
	Jumbutron,
	Navbar,
} from "../components";

export async function getStaticProps() {
	const apiUrl = "https://api-hmpti.herokuapp.com/feeds";
	const response = await fetch(apiUrl);
	const data = await response.json();

	return {
		props: {
			feedData: data,
		},
	};
}

export default function Home({feedData}) {
	return (
		<div className='font-quicksand'>
			<Head>
				<title>HMP-TI</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<div>
					<Navbar />
				</div>
				<section>
					<Jumbutron />
				</section>
				<section className='p-4'>
					<article>
						<p className='text-2xl sm:text-5xl text-center mt-5'>
							Profile <span className='font-archivo'>HMP-TI</span>
						</p>
						<div className='bg-blue-700 w-48 sm:w-96 h-1 mx-auto'></div>
						<Profile />
					</article>
					<article>
						<Visimisi />
					</article>
				</section>
				<section className='mt-10'>
					<Bidang />
				</section>
				<section className='px-10'>
					<Sosial feedData={feedData} />
				</section>
				<section>
					<Informasi />
				</section>
			</main>
			<footer className='mt-10'>
				<Footer />
			</footer>
		</div>
	);
}
