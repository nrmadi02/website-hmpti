import Head from "next/head";
import Link from "next/link";
import Wave from "react-wavify";
import {InfoContent} from "../../components";
import axios from "axios";
import useSWR from "swr";
import {useEffect, useState} from "react";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function Informasi() {
	const [info, setInfo] = useState([]);
	const {data: resData} = useSWR(
		"https://api-hmpti.herokuapp.com/informasis",
		fetcher
	);
	useEffect(() => {
		if (resData !== undefined) {
			setInfo(resData);
		}
	}, [resData]);
	return (
		<div className='font-quicksand'>
			<Head>
				<title>Informasi HMP-TI</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='fixed top-4 left-4'>
				<Link href='/'>
					<p className='underline text-xs cursor-pointer hover:text-gray-400'>
						Home
					</p>
				</Link>
			</div>
			<div className='max-w-md m-auto mt-20 px-4'>
				<p className='text-5xl font-black text-center  mb-2'>
					Informasi HMP-TI
				</p>
				<p className=' text-center'>
					Berisi info-info terkait pendaftaran, lomba-lomba dan hal penting yang
					di buat oleh HMP-TI
				</p>
			</div>
			<div className='-mt-2'>
				<Wave
					fill='rgb(251, 191, 36)'
					paused={false}
					options={{
						height: 50,
						amplitude: 40,
						speed: 0.15,
						points: 3,
					}}
				/>
			</div>
			<div
				className={`bg-yellow-400 -mt-2 px-4 pb-7 ${!info ? "h-screen" : ""}`}
			>
				{info.length !== 0 ? (
					<InfoContent info={info} />
				) : (
					<div className='h-screen flex justify-center items-center'>
						<p className='text-2xl font-extrabold text-center'>
							Info belum tersedia untuk saat ini
						</p>
					</div>
				)}
				<div className='mt-5 text-center'>
					<p className='text-white'>
						© 2021{" "}
						<span className='text-black font-bold hover:text-gray-500'>
							<Link href='/'>HMP-TI UNISKA</Link>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
