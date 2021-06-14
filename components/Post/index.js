import Link from "next/link";

export default function Post({
	sampul,
	judul,
	subjudul,
	waktu,
	penulis,
	tagUtama,
	id,
}) {
	return (
		<div className='max-w-md sm:max-w-2xl mx-auto mb-7 overflow-hidden bg-gray-800 rounded-lg shadow-md '>
			<Link href={`/Post/${id}`}>
				<img className='object-cover w-full h-64' alt='_post' src={sampul} />
			</Link>
			<div className='p-6'>
				<div>
					<span className='text-xs font-medium text-blue-400 uppercase'>
						{tagUtama}
					</span>
					<Link href={`/Post/${id}`}>
						<a
							href='#'
							className='block mt-2 text-2xl font-semibold text-white hover:text-gray-600 hover:underline'
						>
							{judul}
						</a>
					</Link>
					<p className='mt-2 text-sm text-gray-400 '>{subjudul}</p>
				</div>

				<div className='mt-4'>
					<div className='flex items-center'>
						<div className='flex items-center'>
							<a href='#' className='mx-2 font-semibold text-gray-200'>
								- {penulis}
							</a>
						</div>
						<span className='mx-1 text-xs text-gray-300'>{waktu}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
