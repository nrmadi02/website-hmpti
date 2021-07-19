import {useState} from "react";
import {Input, TextareaInput} from "../index";
import axios from "axios";
import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
	ssr: false,
});
/**
 *
 * @param {int} value
 * @param {int} total
 *
 */
const calculatePercent = (value, total) => Math.round((value / total) * 100);
export default function BlogsEdit({save, setSave}) {
	const [photos, setPhotos] = useState();
	const [persen, setPersen] = useState();
	const [submit, setSubmit] = useState(false);
	const [sukses, setSukses] = useState("");
	function handleChange(event) {
		const value = event.target.value;
		setSave({
			...save,
			[event.target.name]: value,
		});
	}
	const cancelPhotosHandle = () => {
		setPhotos(undefined);
		setSubmit(false);
		setSave({
			...save,
			sampul: {},
		});
	};
	const profileHandleChange = async () => {
		setSubmit(true);
		setSukses("uploading...");
		const data = new FormData();
		data.append("files", photos);
		await axios({
			url: "https://api-hmpti.herokuapp.com/upload",
			method: "POST",
			data,
			onUploadProgress: (progress) =>
				setPersen(calculatePercent(progress.loaded, progress.total)),
		})
			.then((res) => {
				setSukses("Sukses");
				setSave({
					...save,
					sampul: res.data[0],
				});
			})
			.catch((e) => {
				setSukses("Gagal");
			});
	};
	return (
		<div className='px-5 pt-8 pb-4'>
			<p className='font-bold text-gray-500 mb-10'>Blogs</p>
			<div className='md:pl-10'>
				<Input
					type='file'
					label='Sampul Blogs'
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
				<div className='flex space-x-2 items-center'>
					<button
						disabled={photos === undefined}
						onClick={profileHandleChange}
						className='disabled:opacity-50 focus:outline-none mt-4 shadow-lg cursor-pointer hover:bg-blue-200 rounded-md p-2 bg-blue-500 text-white text-sm'
					>
						Submit Foto
					</button>
					<button
						disabled={photos === undefined}
						onClick={cancelPhotosHandle}
						className='disabled:opacity-50 focus:outline-none mt-4 shadow-lg cursor-pointer hover:bg-red-200 rounded-md p-2  text-gray-800 text-sm'
					>
						Batal Pilih
					</button>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4'>
					<Input
						type='text'
						label='Judul'
						nama='judul'
						placeholder='Judul Blog kamu...'
						onChange={handleChange}
						value={save.judul}
					/>
					<div>
						<Input
							type='text'
							label='Tag Utama'
							nama='tag_utama'
							placeholder='Pemrograman, Mikrojar, Multimedia dan Umum'
							onChange={handleChange}
							value={save.tag_utama}
						/>
						<p className='text-gray-500 pl-2 mt-1'>Contoh : Pemrograman</p>
					</div>
				</div>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4'>
					<div>
						<Input
							type='text'
							label='Waktu'
							nama='waktu'
							placeholder='Waktu kamu menulis...'
							onChange={handleChange}
							value={save.waktu}
						/>
						<p className='text-gray-500 pl-2 mt-1'>
							Contoh : Senin. 21 Juli 2021
						</p>
					</div>

					<Input
						type='text'
						label='Penulis'
						nama='penulis'
						placeholder='Nama kamu...'
						onChange={handleChange}
						value={save.penulis}
					/>
				</div>
				<TextareaInput
					onChange={handleChange}
					value={save.subjudul}
					label='Subjudul'
					nama='subjudul'
					placeholder='Subjudul Kamu...'
				/>
				<div className='mt-4'>
					<p className='mb-2 font-bold text-sm text-gray-600'>Content Blogs</p>
					<MdEditor
						value={save.content}
						style={{height: "500px"}}
						onChange={(value) => setSave({...save, content: value.text})}
						renderHTML={(text) => <ReactMarkdown children={text} />}
					/>
				</div>
			</div>
		</div>
	);
}
