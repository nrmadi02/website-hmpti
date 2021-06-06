import Head from "next/head";
import {
	InfoTitle,
	Navbar,
	PengurusInti,
	Footer,
	PengurusDivisi,
} from "../../components";
import Wave from "react-wavify";

export async function getStaticProps() {
	const apiUrl = "https://api-hmpti.herokuapp.com/kepengurusans";
	const response = await fetch(apiUrl);
	const data = await response.json();

	return {
		props: {
			pengurus: data,
		},
	};
}

export default function InfoPage({pengurus}) {
	return (
		<div className='font-quicksand'>
			<Head>
				<title>Informasi HMP-TI</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<Navbar />
			</div>
			<InfoTitle title='INTI' />
			<div className='bg-yellow-500 -mt-2'>
				<Wave
					fill='#FFFFFF'
					paused={false}
					options={{
						height: 50,
						amplitude: 40,
						speed: 0.15,
						points: 3,
					}}
				/>
			</div>
			<div>
				<PengurusInti />
				<PengurusDivisi divisi='Pemrograman' pengurus={pengurus} />
			</div>
			<footer className='mt-10'>
				<Footer />
			</footer>
		</div>
	);
}
