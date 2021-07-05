import aos from "aos";
import {useEffect} from "react";

export default function VisiMisi() {
	useEffect(() => {
		aos.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className='overflow-hidden w-11/12 p-2 sm:w-10/12 flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-10 mx-auto mt-4'>
			<div data-aos='fade-up-right'>
				<p className='font-archivo text-2xl sm:text-5xl text-center'>Visi</p>
				<div className='bg-blue-700 w-28 h-1 mx-auto'></div>
				<div className='bg-gray-200 p-4 mt-4 rounded-md shadow-md'>
					<p className='text-justify'>
						Menjadi pusat riset dan layanan yang professional, unggul, dan
						terdepan dibidang IPTEK dan pengembangannya bagi warga kampus dan
						masyarakat.
					</p>
				</div>
			</div>
			<div data-aos='fade-up-left'>
				<p className='font-archivo text-2xl sm:text-5xl text-center'>Misi</p>
				<div className='bg-blue-700 w-28 h-1 mx-auto'></div>
				<div className='bg-gray-200 px-4 mt-4 rounded-md shadow-md'>
					<ul className='list-misi p-4 text-justify'>
						<li>Mewujudkan organisasi HMP-TI yang handal dan terpercaya.</li>
						<li>
							Membudidayakan dan mengimplementasikan nilai-nilai IPTEK di
							kalangan warga kampus dan masyarakat.
						</li>
						<li>
							Menumbuh kembangkan kreatifitas mahasiswa di Fakultas Teknologi
							Informasi khususnya prodi Teknik Informatika.
						</li>
						<li>
							Mewujudkan pelaku wirausaha yang mandiri, produktif, inovatif, dan
							profesional.
						</li>
						<li>
							Menanamkan jiwa kepemimpinan yang berkarakter, bertanggung jawab,
							intelektual, solidaritas, dan berbasis keislaman.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
