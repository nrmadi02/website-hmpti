import {useEffect, useState} from "react";
import {withSession} from "../../middlewares/session";
import {NextSeo} from "next-seo";
import {
	Sidebar,
	DashNav,
	DashFooter,
	Loading,
	BlogsEdit,
} from "../../components";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";

const fetcher = (url, token) =>
	axios
		.get(url, {headers: {Authorization: "Bearer " + token}})
		.then((res) => res.data);

export default function User({user}) {
	const {data: resData} = useSWR(
		["https://api-hmpti.herokuapp.com/user-profiles", user.strapiToken],
		fetcher
	);
	const {data: blogData} = useSWR(
		["https://api-hmpti.herokuapp.com/blogs", user.strapiToken],
		fetcher
	);

	let no = 1;
	const [contentLoad, setContentLoad] = useState(true);
	const [loading, setLoading] = useState(false);
	const [dummy, setDummy] = useState([]);
	const [profile, setProfile] = useState([]);
	const [listBlog, setListBlog] = useState([]);
	const [btn, setBtn] = useState(true);
	const [save, setSave] = useState({
		judul: "",
		subjudul: "",
		content: "",
		waktu: "",
		tag_utama: "",
		penulis: "",
		sampul: {},
	});

	const newBlogsHandle = async () => {
		setLoading(true);
		await axios
			.post("https://api-hmpti.herokuapp.com/blogs", save)
			.then((res) => {
				setLoading(false);
				setSave({
					judul: "",
					subjudul: "",
					content: "",
					waktu: "",
					tag_utama: "",
					penulis: "",
					sampul: {},
				});
			})
			.catch((e) => {
				setLoading(false);
			});
	};
	useEffect(() => {
		if ((resData !== undefined && user) || resData) {
			setDummy(resData);
			const data = dummy.find((item) => item.email === user.email);
			if (data !== undefined && blogData) {
				setProfile(data);
				const blogDummy = blogData.filter((item) =>
					item.penulis.toLowerCase().includes(data.nama.toLowerCase())
				);
				setListBlog(blogDummy);
				setContentLoad(false);
				setLoading(false);
			}
		}
		if (
			save.waktu.length !== 0 &&
			save.penulis.length !== 0 &&
			save.judul.length !== 0 &&
			save.tag_utama.length !== 0 &&
			Object.keys(save.sampul).length !== 0
		) {
			setBtn(false);
		}
		if (
			save.waktu.length === 0 ||
			save.penulis.length === 0 ||
			save.judul.length === 0 ||
			save.tag_utama.length === 0 ||
			Object.keys(save.sampul).length === 0
		) {
			setBtn(true);
		}
	}, [resData, user, dummy, blogData, save]);

	const SEO = {
		title: "HMP-TI || Data Blog",
		description: "edit blog, tambah, dan hapus data blog HMP-TI UNISKA",
		openGraph: {
			title: "HMP-TI || Data Blog",
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
					<div className='h-dashuser w-full bg-bg-logo bg-no-repeat bg-contain bg-center flex-col'>
						<div className='bg-indigo-800 bg-opacity-80 h-dashuser'>
							<div className='hidden md:block'>
								<DashNav title='BLOGS' profile={profile} />
							</div>
							<div className='max-w-lg text-base pt-40 md:pt-40 pl-10 pr-10 md:pr-0 text-white'>
								<p className='text-2xl md:text-4xl font-extrabold mb-2'>
									Hello, {profile.length !== 0 ? profile.nama : ""}
								</p>
								<p>
									Kreasikan dirimu sebebas mungkin disini, tuliskan dan
									kembangkan ide-ide briliant dirimu, serta apapun itu.
								</p>
							</div>
						</div>
						<div className='relative bg-gray-200 px-5 md:px-10 flex flex-col'>
							<div className='bg-white rounded-md shadow-lg -mt-28 flex flex-col justify-center pb-5 md:px-0'>
								<div className='bg-gray-200 rounded-t-md flex items-center w-full px-5 py-5 mb-5'>
									<p className='text-xl font-bold text-gray-600'>
										Daftar Blog Kamu
									</p>
								</div>
								{contentLoad ? (
									<div className='text-center text-lg text-gray-500 py-10 flex items-center justify-center'>
										<p>Loading...</p>
									</div>
								) : listBlog.length !== 0 ? (
									listBlog.map((item) => (
										<Link href={`/Profile/Blogs/${item.id}`} key={item.id}>
											<p className='text-gray-500 text-base hover:text-blue-500 px-5'>
												{no++}. {item.judul}
											</p>
										</Link>
									))
								) : (
									<div className='text-center text-lg text-gray-500 py-10 flex items-center justify-center'>
										<p>Blog Belum Ada</p>
									</div>
								)}
							</div>
							<div className='bg-gray-100 rounded-md shadow-lg mt-10 flex flex-col justify-center pb-5 md:px-0 mb-5'>
								<div className='bg-white rounded-t-md flex justify-between items-center w-full px-5 py-5'>
									<p className='text-xl font-bold text-gray-600'>
										Buat Blog Baru
									</p>
									{loading ? (
										<Loading />
									) : (
										<button
											onClick={newBlogsHandle}
											disabled={btn}
											className='disabled:opacity-50 focus:outline-none shadow-lg cursor-pointer hover:bg-blue-200 rounded-md p-2 bg-blue-500 text-white text-xs'
										>
											<p>Tambah Blog</p>
										</button>
									)}
								</div>
								<BlogsEdit save={save} setSave={setSave} />
							</div>

							<div className='bg-gray-200 pt-5 pb-10'>
								<DashFooter />
							</div>
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
