import {useEffect, useState} from "react";
import {withSession} from "../../middlewares/session";
import Head from "next/head";
import {
	Sidebar,
	DashNav,
	UserProfile,
	DashFooter,
	Loading,
} from "../../components";
import {UserCircleIcon} from "@heroicons/react/outline";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url, token) =>
	axios
		.get(url, {headers: {Authorization: "Bearer " + token}})
		.then((res) => res.data);

export default function User({user}) {
	const {data: resData} = useSWR(
		["https://api-hmpti.herokuapp.com/user-profiles", user.strapiToken],
		fetcher
	);
	const saveProfilHandle = async () => {
		const sendData = await axios.put(
			`https://api-hmpti.herokuapp.com/user-profiles/${profile.id}`,
			save,
			{headers: {Authorization: "Bearer " + user.strapiToken}}
		);
		setLoading(true);
		return sendData?.data;
	};

	const [dummy, setDummy] = useState([]);
	const [profile, setProfile] = useState([]);
	const [loading, setLoading] = useState(false);
	const [save, setSave] = useState({
		nama: "",
		umur: "",
		email: "",
		kota: "",
		provinsi: "",
		qoutes: "",
	});

	useEffect(() => {
		if (resData !== undefined && user) {
			setDummy(resData);
			const data = dummy.find((item) => item.email === user.email);
			if (data !== undefined) {
				setProfile(data);
				setSave({
					nama: data.nama,
					umur: data.umur,
					email: data.email,
					kota: data.kota,
					provinsi: data.provinsi,
					qoutes: data.qoutes,
				});
				setLoading(false);
			}
		}
	}, [profile, dummy, setDummy, setProfile, resData, setSave]);

	return (
		<div className='font-quicksand'>
			<Head>
				<title>Profile</title>
			</Head>
			<div className='flex flex-col md:flex-row'>
				<div className='z-30 fixed hidden md:block'>
					<Sidebar profile={profile} />
				</div>
				<div className='z-10 opacity-100 md:opacity-0'>
					<Sidebar profile={profile} />
				</div>
				<div className='h-dashuser w-full bg-bg-logo bg-no-repeat bg-contain bg-center flex-col'>
					<div className='bg-indigo-800 bg-opacity-80 h-dashuser'>
						<div className='hidden md:block'>
							<DashNav title='USER PROFILE' profile={profile} />
						</div>
						<div className='max-w-lg text-base pt-40 md:pt-40 pl-10 pr-10 md:pr-0 text-white'>
							<p className='text-2xl md:text-4xl font-extrabold mb-2'>
								Hello, {profile.length !== 0 ? profile.nama : ""}
							</p>
							<p>
								Selamat datang di Himpunan Mahasiswa Teknik Informatika,
								Universitas Islam Kalimantan Selatan
							</p>
						</div>
					</div>
					<div className='relative bg-gray-200 grid px-5 md:px-10'>
						<div className='bg-white rounded-md shadow-lg -mt-28 flex justify-center pb-5 px-5 md:px-0'>
							<div className='flex flex-col items-center w-full'>
								{profile.length !== 0 && profile.foto ? (
									<img
										className='bg-white h-40 w-40 -mt-14 ring-4 ring-gray-500 rounded-full'
										src={profile.foto.url}
										alt='_blank'
									/>
								) : (
									<UserCircleIcon className='bg-white h-40 w-40 -mt-14 ring-4 ring-gray-400 rounded-full' />
								)}
								<div className='text-lg text-gray-500 mt-5 flex flex-col items-center'>
									<p>
										<span className='font-bold'>
											{profile.length !== 0 ? profile.nama : ""}
										</span>
										, {profile.length !== 0 ? profile.umur : ""}
									</p>
									<p className='text-sm'>
										{profile.length !== 0 ? profile.kota : ""}, Indonesia
									</p>
								</div>
								<div className='text-base text-gray-500 mt-5 flex flex-col items-center'>
									<p>
										<span className='font-bold'>
											UNISKA - Teknik Informatika
										</span>
									</p>
									<p className='text-sm'>{profile ? profile.provinsi : ""}</p>
								</div>
								<div className='h-px w-11/12 bg-gray-500 mt-3 mb-3'></div>
								<div>
									<p className='text-lg text-gray-500 text-center px-4'>
										"{profile.length !== 0 ? profile.qoutes : ""}"
									</p>
								</div>
							</div>
						</div>
						<div className='bg-gray-100 rounded-md shadow-lg mt-10  flex flex-col justify-center pb-5 md:px-0 mb-5'>
							<div
								onClick={saveProfilHandle}
								className='bg-white rounded-t-md flex justify-between items-center w-full px-5 py-5'
							>
								<p className='text-xl font-bold text-gray-600'>Akun Saya</p>
								{loading ? (
									<Loading />
								) : (
									<div className='shadow-lg cursor-pointer hover:bg-blue-200 rounded-md p-2 bg-blue-500 text-white'>
										<p>Save Profile</p>
									</div>
								)}
							</div>
							<UserProfile profile={profile} saveData={setSave} save={save} />
						</div>
						<div className='bg-gray-200 px-5 pt-5 pb-10'>
							<DashFooter />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export const getServerSideProps = withSession((context) => {
	const {req} = context;
	const data = req.session.get("user");
	if (!data) {
		return {
			redirect: {
				destination: "/Login",
				permanent: false,
			},
		};
	}
	return {
		props: {
			user: data,
		},
	};
});
