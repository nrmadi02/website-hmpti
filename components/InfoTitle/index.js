import React, {useEffect} from "react";
import aos from "aos";
import "aos/dist/aos.css";

export default function InfoTitle({title}) {
	useEffect(() => {
		aos.init({
			duration: 2000,
		});
	}, []);
	return (
		<div className=' overflow-hidden text-white bg-yellow-400 flex mx-auto px-5 md:px-20 xl:px-52 items-center flex-col sm:flex-row sm:px-20 justify-between pt-28'>
			<div
				data-aos='fade-right'
				className='text-4xl flex flex-col text-center font-archivo'
			>
				<p>PENGURUS {title}</p>
				<p>HMP-TI UNISKA</p>
			</div>
			<div
				data-aos='fade-left'
				className='flex items-center space-x-2 mt-10 sm:mt-0'
			>
				<img className='h-auto w-16' src='/images/logo.png' alt='HmpTI' />
				<div>
					<p className='text-3xl font-archivo'>HMP-TI UNISKA</p>
					<p className='text-xs'>Himpunan Mahasiswa Prodi Teknik Informatika</p>
				</div>
			</div>
		</div>
	);
}
