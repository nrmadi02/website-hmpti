import {SearchIcon} from "@heroicons/react/outline";

export default function Search({setFilter, filter, search}) {
	return (
		<div className=' flex max-w-md sm:max-w-2xl mx-auto mb-10'>
			<span className='w-auto flex justify-end items-center text-white p-2 mr-2'>
				<SearchIcon className='h-5 w-5' />
			</span>
			<input
				className='text-white border-b-2 border-t-0 border-r-0 border-l-0 bg-transparent border-white w-full py-2 px-0 mr-4 focus:border-white focus:outline-none focus:ring-0 focus:ring-white'
				type='text'
				placeholder='Search judul atau isi...'
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
			<button
				disabled={filter.length === 0}
				onClick={search}
				className='disabled:opacity-50 bg-gray-700 focus:outline-none focus:ring-0 focus:ring-white hover:shadow-md rounded text-white p-2 pl-6 pr-6'
			>
				<p className='font-semibold text-xs'>Search</p>
			</button>
		</div>
	);
}
