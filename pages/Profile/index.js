import {useEffect, useState} from "react";
import {withSession} from "../../middlewares/session";
import {NextSeo} from "next-seo";
import {Sidebar, DashNav, InfoJumlah, DashFooter} from "../../components";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url, token) =>
	axios
		.get(url, {headers: {Authorization: "Bearer " + token}})
		.then((res) => res.data);

export default function Login({user}) {
	const {data: resData} = useSWR(
		["https://api-hmpti.herokuapp.com/user-profiles", user.strapiToken],
		fetcher
	);
	const {data: dataSeluruh} = useSWR(
		["https://api-hmpti.herokuapp.com/data-seluruhs", user.strapiToken],
		fetcher
	);
	const {data: anggotaMuda} = useSWR(
		["https://api-hmpti.herokuapp.com/anggota-mudas", user.strapiToken],
		fetcher
	);
	const {data: kepengurusan} = useSWR(
		["https://api-hmpti.herokuapp.com/kepengurusans", user.strapiToken],
		fetcher
	);

	const [jml, setJml] = useState([]);
	const [dummy, setDummy] = useState([]);
	const [profile, setProfile] = useState([]);
	const no = 1;

	useEffect(() => {
		if (resData && dataSeluruh && user) {
			setDummy(resData);
			const test = dummy.find((item) => item.email === user.email);
			setProfile(test);
			dataSeluruh.map((item) => {
				setJml(item);
			});
		}
	}, [dummy, setDummy, setProfile, resData, dataSeluruh, jml, setJml, user]);

	const SEO = {
		title: "HMP-TI || DASHBOARD",
		description:
			"DASHBOARD HMP-TI UNISKA MAB, menampilkan semua tentang infomasi internal hmpti",
		openGraph: {
			title: "HMP-TI || DASHBOARD ",
			type: "website",
			url: window.location.href,
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<div className='font-quicksand'>
				<div className='flex flex-col md:flex-row'>
					<div className='z-30 fixed hidden md:block'>
						<Sidebar profile={profile} />
					</div>
					<div className='z-10 opacity-100 md:opacity-0'>
						<Sidebar profile={profile} />
					</div>
					<div className='h-96 w-full bg-bg-logo bg-no-repeat bg-contain bg-center flex-col'>
						<div className='bg-indigo-800 bg-opacity-80'>
							<div className='hidden md:block'>
								<DashNav profile={profile} title='DASHBOARD' />
							</div>
							<div className='px-5 md:px-10 pt-10 md:pt-20 pb-40'>
								<div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5 '>
									<InfoJumlah
										infoJml='Kepengurusan'
										jml={jml.kepengurusan + " Anggota"}
										color='bg-green-400'
									/>
									<InfoJumlah
										infoJml='Anggota Muda'
										jml={jml.anggota_muda + " Anggota"}
										color='bg-blue-400'
									/>
									<InfoJumlah
										infoJml='Jumlah Angkatan'
										jml={jml.angkatan + " Angkatan"}
										color='bg-yellow-400'
									/>
									<InfoJumlah
										infoJml='Semua Anggota'
										jml={jml.seluruh_anggota + " Anggota"}
										color='bg-red-400'
									/>
								</div>
							</div>
						</div>
						<div className='bg-gray-200 -mt-1 grid grid-cols-1 md:grid-cols-2 px-5 md:px-10 gap-5 pb-10'>
							<div className=' bg-white rounded-md shadow-lg -mt-32 p-4'>
								<p className='text-gray-600 text-xl md:text-3xl font-black mb-2'>
									HMP-TI Angkatan Ke-9
								</p>
								<div>
									<div>
										<p className='text-base font-black'>Kepegurusan :</p>
										{kepengurusan ? (
											kepengurusan.map((item, index) => (
												<p key={item.id}>
													{no + index++}. {item.nama}
												</p>
											))
										) : (
											<p>Data Tidak Ada</p>
										)}
									</div>
								</div>
							</div>
							<div className='bg-white rounded-md shadow-lg md:-mt-32 p-4'>
								<p className='text-gray-600 text-xl md:text-3xl font-black mb-2'>
									HMP-TI Angkatan Ke-10
								</p>
								<div>
									<div>
										<p className='text-base font-black'>Anggota Muda :</p>
										{anggotaMuda ? (
											anggotaMuda.map((item, index) => (
												<p key={item.id}>
													{no + index++}. {item.nama}
												</p>
											))
										) : (
											<p>Data Tidak Ada</p>
										)}
									</div>
								</div>
							</div>
						</div>
						<div className='bg-gray-200 px-5 md:px-10 pb-10'>
							<DashFooter />
						</div>
					</div>
				</div>
			</div>
		</>
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
