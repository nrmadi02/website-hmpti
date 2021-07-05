import Head from "next/head";
import aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

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
import {useEffect} from "react";

const fetchData = async (url) =>
	await axios
		.get(url)
		.then((res) => ({
			error: false,
			data: res.data,
		}))
		.catch(() => ({
			error: true,
			data: null,
		}));

export async function getStaticProps() {
	const apiUrl = "https://api-hmpti.herokuapp.com/feeds";
	const response = await fetchData(apiUrl);
	const data = response.data;

	return {
		props: {
			feedData: data,
		},
	};
}

export default function Home({feedData}) {
	useEffect(() => {
		aos.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className='font-quicksand'>
			<Head>
				<title>HMP-TI</title>
				<meta charset='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main className='box-border'>
				<div>
					<Navbar />
				</div>
				<section>
					<Jumbutron />
				</section>
				<section className='p-2'>
					<article data-aos='fade-right'>
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
				<section className='mt-10 overflow-x-hidden'>
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
