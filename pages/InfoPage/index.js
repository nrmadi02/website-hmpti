import {
	InfoTitle,
	Navbar,
	PengurusInti,
	Footer,
	PengurusDivisi,
} from "../../components";
import Wave from "react-wavify";
import {NextSeo} from "next-seo";

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
	const SEO = {
		title: "HMP-TI || PROFILE",
		description:
			"Divisi HMP-TI Uniska, Ketua UMUM HMP-TI UNISKA, Wakik Ketua UMUM HMP-TI UNISKA, struktur HMP-TI UNISKA, Kepengurusan HMP-TI UNISKA",
		openGraph: {
			title: "HMP-TI || PROFILE",
			type: "website",
			url: window.location.href,
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<div className='font-quicksand'>
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
					<PengurusInti data={pengurus} />
					<PengurusDivisi
						detail='Merupakan divisi yang menangani hal-hal yang berhubungan dengan penginformasian dan sosialisasi HMP-TI Uniska dan segala aktivitasnya kepada khalayak ramai pada umumnya dan Mahasiswa Uniska pada khususnya dalam bentuk media cetak dan elektronik, melakukan pengembangan sistem media komunikasi dan propaganda HMP-TI Uniska, melakukan penerbitan media kampus yang dinamis dan objektif terhadap kondisi diluar kampus Uniska pada umunya dan kondisi FTI Uniska secara khusus dengan mengutamakan aspek aspek terbentuknya persatuan dan kesatuan.'
						title='DIVISI'
						divisi='Humas'
						pengurus={pengurus}
						program={programs}
					/>
					<PengurusDivisi
						detail='Divisi ini adalah wadah bagi anggota HMP-TI untuk menyalurkan dan mengapresiasikan minat dan bakatnya anggota HMPTI. Pada dasarnya departemen ini berupaya untuk membentuk bakat mengapresiasi di kalangan anggota HMPTI. Proses kaderisasi sangatlah penting dalam suatu lembaga, maka divisi Pengembangan SDM berperan dan melaksanakan fungsinya dalam proses pengkaderan untuk menggali potensi diri yaitu dengan melakukan kegiatan-kegiatan pengkaderan untuk menghasilkan  anggota – anggota HMPTI yang handal dalam hal manajemen diri. Sebuah organisasi perlu pengembangan serta penguatan dalam tubuh organisasi itu sendiri maka untuk menjalankan peran serta fungsinya dalam mengembangkan organisasi yaitu dengan melakukan kegiatan-kegiatan sebagai upaya untuk meningkatkan dan melakukan pengontrolan serta assesment terhadap kinerja HMP-TI pada umumnya dan Anggota Muda (AM) dan pengurus HMP-TI secara khusus.'
						title='DIVISI'
						divisi='PSDM'
						pengurus={pengurus}
						program={programs}
					/>
					<PengurusDivisi
						detail='Kewirausaan  adalah  Divisi dari HMP-TI  yang bergerak dibidang  jasa dan  penjualan barang.  Pengembangan khususnya media, baik media cetak maupun media elektronik, dengan adanya IT-Solution ini mahasiswa dapat lebih menambah ilmu pengetahuan dan wawasan  tentang wirausaha yang  ada pada masing-masing anggota HPT-TI  dan  Mahasiswa.'
						title='DIVISI'
						divisi='Kewirausahaan'
						pengurus={pengurus}
						program={programs}
					/>
					<PengurusDivisi
						detail='Divisi yang berada dibawah naungan HMP-TI dengan mengemban tugas untuk mengembangkan bakat-bakat dan minat yang terdapat pada anggota HMP-TI baik dari anggota biasa, anggota muda (AM) maupun kepengurusan. Didivisi ini juga, kita akan meneliti perkembangan teknologi apa saja yang sedang berkembang maupun yg sedang ramai dibicarakan di masyarakat umum.'
						title='DIVISI'
						divisi='Litbang'
						pengurus={pengurus}
						program={programs}
					/>
					<PengurusDivisi
						detail='Subdivisi multimedia adalah tempat atau sarana untuk belajar multimedia baik itu desaingrafis, fotografi, maupun videografi. Pada divisi ini kita juga saling sharing terhadap pengetahuan tentang multimedia baik sesama anggota maupun luar anggota.'
						title='SUBDIVISI'
						divisi='Multimedia'
						pengurus={pengurus}
						program={programs}
					/>
					<PengurusDivisi
						detail='Subdivisi Pemrograman adalah divisi yang berfokuskan pada kegiatan pembelajaran dalam bidang pemrograman dan merupakan bagian dari divisi Penelitian dan Pengembangan (LITBANG). Selain pembelajaran, divisi ini juga menjadi wadah untuk berbagi pengetahuan, informasi, mengembangkan kreatifitas, dan lain-lain yang berkaitan dengan bidang pemrograman bagi seluruh anggota HMP-TI.'
						title='SUBDIVISI'
						divisi='Pemrograman'
						pengurus={pengurus}
						program={programs}
					/>
					<PengurusDivisi
						detail='Subdivisi Mikrokontroler dan Jaringan (MIKROJAR) adalah Subdivisi yang berfokuskan pada kegiatan pembelajaran dalam bidang Mikrokontroler dan Jaringan yang merupakan bagian dari divisi Penelitian dan Pengembangan (LITBANG). Selain pembelajaran, Subdivisi ini juga menjadi wadah untuk berbagi pengetahuan, informasi, mengembangkan kreatifitas, minat serta bakat dan lain-lain yang berkaitan dengan bidang Mikrokontroler dan Jaringan bagi seluruh anggota HMP-TI.'
						title='SUBDIVISI'
						divisi='Mikrojar'
						pengurus={pengurus}
						program={programs}
					/>
				</div>
				<footer className='mt-10'>
					<Footer />
				</footer>
			</div>
		</>
	);
}
