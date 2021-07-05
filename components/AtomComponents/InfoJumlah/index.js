import {UserGroupIcon} from "@heroicons/react/outline";

export default function InfoJumlah({infoJml, jml, color}) {
	return (
		<div className='bg-white shadow-lg rounded-md p-5'>
			<div className='flex justify-between'>
				<div>
					<p className='font-bold text-gray-400'>{infoJml}</p>
					<p className='font-bold text-gray-800'>{jml}</p>
				</div>
				<div
					className={`flex items-center justify-center h-10 w-10 ${color} p-2 rounded-full`}
				>
					<UserGroupIcon className='h-8 w-8 text-white' />
				</div>
			</div>
		</div>
	);
}
