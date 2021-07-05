import Link from "next/link";

export default function dashFooter() {
	return (
		<div className='flex justify-center flex-col md:flex-row md:justify-between items-center'>
			<p className='text-gray-500'>
				© 2021{" "}
				<span className='text-blue-500 font-bold hover:text-gray-500'>
					<Link href='/'>HMP-TI UNISKA</Link>
				</span>
			</p>
			<div className='flex flex-wrap justify-center space-x-5 text-gray-500 '>
				<Link href='/InfoPage'>
					<p className='hover:text-gray-900 cursor-pointer'>
						Divisi Pemrograman
					</p>
				</Link>
				<Link href='/'>
					<p className='hover:text-gray-900 cursor-pointer'>Website</p>
				</Link>
				<Link href='/Blog'>
					<p className='hover:text-gray-900 cursor-pointer'>Blog</p>
				</Link>
			</div>
		</div>
	);
}
