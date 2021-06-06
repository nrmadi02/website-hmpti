export default function Footer() {
	return (
		<div className='flex bg-red-500 justify-center flex-col'>
			<div className='flex flex-col sm:flex-row items-center  justify-center sm:items-center mt-5 sm:space-x-2'>
				<div className='px-10 w-full sm:w-2/5 text-white'>
					<p className='text-white text-base sm:text-3xl text-center mt-2 mb-2'>
						HMP-TI<span className='font-archivo text-white'> UNISKA</span>
					</p>
					<p className='text-justify sm:text-left'>
						Himpunan Mahasiswa Prodi Teknik Informatika adalah organisasi
						mahasiswa jurusan Teknik Informatika di Fakultas Teknologi
						Informasi, UNISKA.
					</p>
				</div>
				<div className='w-full sm:w-2/5 text-center text-white'>
					<p className='text-white text-base sm:text-3xl text-center mt-2 mb-2'>
						Hubungi<span className='font-archivo text-white'> HMP-TI</span>
					</p>
					<div className='text-sm sm:text-base'>
						<p>@hmpti.uniska</p>
						<p>primary.hmptiuniska@gmail.com</p>
						<p>Gedung B.2 FTI UNISKA, Banjarmasin</p>
					</div>
				</div>
			</div>
			<div className='mt-5'>
				<p className='text-center text-white'>
					© 2021 <span className='font-bold'>HMP-TI UNISKA</span>
				</p>
				<p className='text-center text-white'>subdivisi pemrograman</p>
			</div>
		</div>
	);
}
