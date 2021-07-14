import {useEffect, useState} from "react";
import {Input, TextareaInput} from "../index";

export default function UserProfile({profile, saveData, save}) {
	const [data, setData] = useState([]);
	useEffect(() => {
		if (profile !== null) {
			setData(profile);
		}
	}, [profile, save]);
	function handleChange(event) {
		const value = event.target.value;
		saveData({
			...save,
			[event.target.name]: value,
		});
	}
	return (
		<div className='px-5 pt-8 pb-4'>
			<p className='font-bold text-gray-500 mb-10'>USER INFORMATION</p>
			<div className='md:pl-10'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
					<Input
						type='text'
						label='Nama'
						nama='nama'
						placeholder='Nama kamu..'
						onChange={handleChange}
						value={save.nama}
					/>
					<Input
						type='number'
						label='Umur'
						nama='umur'
						placeholder='Umur kamu..'
						onChange={handleChange}
						value={save.umur}
					/>
				</div>
				<div>
					<Input
						type='email'
						label='Email'
						nama='email'
						placeholder='Email kamu..'
						onChange={handleChange}
						value={save.email}
						disabled={true}
					/>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4'>
					<Input
						type='text'
						label='Kota'
						nama='kota'
						placeholder='Kota kamu..'
						onChange={handleChange}
						value={save.kota}
					/>
					<Input
						type='text'
						label='Provinsi'
						nama='provinsi'
						placeholder='Provinsi kamu..'
						onChange={handleChange}
						value={save.provinsi}
					/>
				</div>
				<TextareaInput
					onChange={handleChange}
					value={save.qoutes}
					label='Qoutes'
					nama='qoutes'
					placeholder='Qoutes kamu..'
				/>
			</div>
		</div>
	);
}
