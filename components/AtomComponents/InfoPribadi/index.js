export default function InfoPribadi({jabatan, url, nama, angkatan}) {
	return (
		<div className='flex items-center flex-col text-center'>
			<p className='font-archivo text-2xl '>{jabatan}</p>
			<img className='h-auto w-60 object-cover object-top' src={url} />
			<p className='font-archivo text-2xl '>{nama}</p>
			<p className='font-archivo text-lg text-gray-500'>{angkatan}</p>
		</div>
	);
}
