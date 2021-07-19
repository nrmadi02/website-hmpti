import {useState} from "react";
import {Input, TextareaInput} from "../index";
import axios from "axios";

/**
 *
 * @param {int} value
 * @param {int} total
 *
 */
const calculatePercent = (value, total) => Math.round((value / total) * 100);
export default function UserProfile({profile, saveData, save}) {
	const [photos, setPhotos] = useState();
	const [persen, setPersen] = useState();
	const [submit, setSubmit] = useState(false);
	const [sukses, setSukses] = useState("");
	function handleChange(event) {
		const value = event.target.value;
		saveData({
			...save,
			[event.target.name]: value,
		});
	}
	const profileHandleChange = async () => {
		setSubmit(true);
		setSukses("uploading...");
		const data = new FormData();
		data.append("files", photos);

		const upload_res = await axios({
			url: "https://api-hmpti.herokuapp.com/upload",
			method: "POST",
			data,
			onUploadProgress: (progress) =>
				setPersen(calculatePercent(progress.loaded, progress.total)),
		})
			.then((res) => {
				setSukses("Sukses");
				saveData({
					...save,
					foto: res.data[0],
				});
			})
			.catch((e) => {
				setSukses("Gagal");
			});
	};
	return (
		<div className='px-5 pt-8 pb-4'>
			<p className='font-bold text-gray-500 mb-10'>USER INFORMATION</p>
			<div className='md:pl-10'>
				<Input
					type='file'
					label='Foto Profile'
					nama='foto'
					onChange={(e) => {
						setSukses("");
						setSubmit(false);
						setPhotos(e.target.files[0]);
					}}
				/>
				{submit && (
					<>
						<div
							style={{width: `${persen}%`}}
							className='h-1 rounded-md bg-green-500'
						></div>
						<p>{sukses}</p>
					</>
				)}
				<button
					disabled={photos === undefined}
					onClick={profileHandleChange}
					className='disabled:opacity-50 focus:outline-none mt-4 shadow-lg cursor-pointer hover:bg-blue-200 rounded-md p-2 bg-blue-500 text-white text-sm'
				>
					Submit Foto
				</button>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4'>
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
