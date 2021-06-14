import Image from "next/image";
import LazyLoad from "react-lazyload";

export default function InfoPribadi({jabatan, url, nama, angkatan}) {
	return (
		<div className='flex items-center flex-col text-center'>
			<p className='font-archivo text-2xl '>{jabatan}</p>
			<LazyLoad height={240}>
				<Image
					className='object-cover object-top'
					src={url}
					quality={75}
					loading='eager'
					width={240}
					height={240}
				/>
			</LazyLoad>
			<p className='font-archivo text-2xl '>{nama}</p>
			<p className='font-archivo text-lg text-gray-500'>{angkatan}</p>
		</div>
	);
}
