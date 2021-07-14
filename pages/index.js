import aos from "aos";
import "aos/dist/aos.css";
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
import {NextSeo} from "next-seo";

export default function Home() {
	useEffect(() => {
		aos.init({
			duration: 2000,
		});
	}, []);
	const SEO = {
		title: "HMP-TI UNISKA MAB",
		description:
			"Himpunan Mahasiswa Prodi Teknik Informatika Universitas Islam Kalimantan Muhammad Arsyad Al-banjary",
		openGraph: {
			title: "HMP-TI UNISKA MAB",
			type: "website",
			url: window.location.href,
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<div className='font-quicksand'>
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
						<Sosial />
					</section>
					<section>
						<Informasi />
					</section>
				</main>
				<footer className='mt-10'>
					<Footer />
				</footer>
			</div>
		</>
	);
}
