import {XIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";

export default function SearchModal({setClick, set, textSearch, data}) {
	const route = useRouter();
	const dataFilter = data.map((item) => (
		<div
			onClick={() => route.push(`/Post/${item.id}`)}
			key={item.id}
			className='bg-white mx-auto max-w-md sm:max-w-3xl mt-5 shadow-md rounded-md sm:flex p-2'
		>
			<img
				className='object-cover h-64 w-auto sm:w-64 sm:h-auto'
				alt='_post'
				src={item.sampul.url}
			/>
			<div className='flex flex-col sm:ml-2'>
				<span className='text-xs font-medium text-blue-400 uppercase'>
					{item.tag_utama}
				</span>
				<p className='block mt-2 text-2xl font-semibold text-black hover:text-gray-600 '>
					{item.judul}
				</p>
				<p className='mt-2 text-sm text-gray-400 '>{item.subjudul}</p>
				<div className='mt-4'>
					<div className='flex items-center'>
						<div className='flex items-center'>
							<a href='#' className='mx-2 font-semibold text-gray-600'>
								- {item.penulis}
							</a>
						</div>
						<span className='mx-1 text-xs text-gray-600'>{item.waktu}</span>
					</div>
				</div>
			</div>
		</div>
	));
	return (
		<div
			className={`overflow-scroll pb-10 h-full w-full bg-opacity-50 bg-gray-900 fixed z-50 top-0 left-0 ${
				set ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<XIcon
				onClick={setClick}
				className='hover:text-gray-600 text-white fixed top-10 right-10 h-10 w-10'
			/>
			<div className='mt-10 px-5 md:px-0'>
				<p className='text-white md:px-10 mb-20 '>
					Hasil Searching : {textSearch}
				</p>
				{data.length !== 0 ? (
					dataFilter
				) : (
					<p className='text-white text-center'>Data Tidak Ada</p>
				)}
			</div>
		</div>
	);
}
