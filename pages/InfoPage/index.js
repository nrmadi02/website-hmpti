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
	const apiDivisi = "https://api-hmpti.herokuapp.com/programs";
	const response = await fetch(apiUrl);
	const res = await fetch(apiDivisi);
	const data = await response.json();
	const dataDivisi = await res.json();

	return {
		props: {
			pengurus: data,
			programs: dataDivisi,
		},
	};
}

export default function InfoPage({pengurus, programs}) {
	return (
		<div className='font-quicksand'>
			<Head>
				<title>Profile HMP-TI</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div>
				<Navbar />
			</div>
			<InfoTitle title='INTI' />
			<div className='bg-yellow-400 -mt-2'>
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
				<PengurusDivisi
					detail='Subdivisi Pemrograman adalah divisi yang berfokuskan pada kegiatan pembelajaran dalam bidang pemrograman dan merupakan dan merupakan bagian divisi Penelitian dan Pengembangan (LITBANG).'
					title='SUBDIVISI'
					divisi='Pemrograman'
					pengurus={pengurus}
					program={programs}
				/>
			</div>
			<footer className='mt-10'>
				<Footer />
			</footer>
		</div>
	);
}
