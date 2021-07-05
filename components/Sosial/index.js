import {Feed} from "../../components";
import {useRouter} from "next/router";

export default function Sosial({feedData}) {
	const route = useRouter();
	const handleToIG = () => {
		route.push("https://www.instagram.com/hmpti.uniska/");
	};
	return (
		<div className='mt-7'>
			<p className='text-center'>Kepo tentang HMP-TI ?</p>
			<p className='text-2xl sm:text-5xl text-center mt-2'>
				Yuk ke<span className='font-archivo text-red-500'> Instagram Kita</span>
			</p>
			<div className='mt-8 px-5 sm:p-0 sm:ml-36 sm:mt-20'>
				<div className='flex items-center space-x-6'>
					<div>
						<img
							className='w-20 sm:w-40 h-auto'
							src='/images/logo.png'
							alt='HmpTI'
						/>
					</div>
					<div className='text-sm sm:text-base'>
						<p>HMP-TI UNISKA</p>
						<p className='text-gray-500'>Perguruan Tinggi & Universitas</p>
						<p>Himpunan Mahasiswa Prodi Teknik Informatika</p>
						<p>Universitas Islam Kalimantan MAB</p>
						<p className='text-blue-600'>#hmptiuniska</p>
						<p className='text-blue-600'>#hmptibisa</p>
						<p className='text-blue-600'>@hmpti.uniska</p>
					</div>
				</div>
				<div className='flex space-x-4 mt-4 ml-3'>
					<button
						onClick={handleToIG}
						className='cursor-pointer bg-blue-500 text-white py-1 px-5 rounded-md hover:bg-gray-800'
					>
						Ikuti
					</button>
					<button
						onClick={handleToIG}
						className='cursor-pointer ring-1 ring-gray-300 bg-gray-100  py-1 px-5 rounded-md hover:bg-blue-400'
					>
						Kirim Pesan
					</button>
				</div>
			</div>
			<div className='flex justify-center mt-5'>
				<Feed feedData={feedData} />
			</div>
		</div>
	);
}
