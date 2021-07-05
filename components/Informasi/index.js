import {useRouter} from "next/router";

export default function Informasi() {
	const router = useRouter();
	const handleClick = () => {
		router.push("/Informasi");
	};
	return (
		<div className='mt-7'>
			<p className='text-center'>Mau bergabung bersama kami ?</p>
			<div className='flex mt-5 justify-center'>
				<button
					onClick={handleClick}
					className='cursor-pointer bg-blue-500 text-white py-1 px-5 rounded-md hover:bg-gray-800'
				>
					Informasi Pendaftaran
				</button>
			</div>
		</div>
	);
}
