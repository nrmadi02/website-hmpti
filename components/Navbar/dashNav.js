import {UserCircleIcon} from "@heroicons/react/outline";
import {useEffect, useState} from "react";

export default function dashNav({profile, title}) {
	const [data, setData] = useState([]);
	useEffect(() => {
		if (profile) {
			setData(profile);
		}
	}, [profile]);
	return (
		<div className='flex justify-between px-10 pt-5 text-white'>
			<p className='text-lg font-black'>{title}</p>
			<div className='flex items-center space-x-2'>
				{data.length !== 0 ? (
					data.foto ? (
						<img
							src={data.foto.url}
							alt='_profile'
							className='h-9 w-9 rounded-full'
						/>
					) : (
						<UserCircleIcon className='h-9 w-9' />
					)
				) : (
					<UserCircleIcon className='h-9 w-9' />
				)}

				<p>{profile ? profile.nama : "Nama kamu"}</p>
			</div>
		</div>
	);
}
