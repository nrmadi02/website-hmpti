export default function Jumbutron() {
	return (
		<div className='bg-bg-uniska bg-no-repeat bg-cover h-screen bg-center'>
			<div className='bg-indigo-900 bg-opacity-80 h-screen items-center justify-center'>
				<div className='flex text-center h-screen items-center justify-center'>
					<div className='flex-col mb-28'>
						<p className='text-white font-archivo font-extrabold sm:text-8xl text-6xl'>
							HMP-TI
						</p>
						<p className='text-yellow-400 text-sm font-extrabold sm:text-lg -mt-3'>
							Himpunan Mahasiswa Prodi Teknik Informatika
						</p>
						<div className='bg-white w-full h-1'></div>
						<p className='text-white font-extrabold text-lg mt-4'>
							Universitas Islam Kalimatan Selatan
						</p>
						<p className='text-white font-extrabold text-lg'>
							Muhammad Arsyad Al-Banjary
						</p>
						<div className='sm:absolute sm:top-24 sm:right-2 w-full z-10'>
							<div className='flex flex-row w-full mt-2 justify-between sm:w-auto sm:justify-end'>
								<img
									className='h-20 logo mr-4'
									src='/images/uniska.png'
									alt='_hmpti'
								/>
								<img
									className='h-20 logo mr-4'
									src='/images/bem.png'
									alt='_hmpti'
								/>
								<img
									className='h-20 logo mr-2'
									src='/images/logo.png'
									alt='_hmpti'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
