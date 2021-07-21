import React, {useEffect, useState} from "react";
import {withSession} from "../../../middlewares/session";
import {NextSeo} from "next-seo";
import {
	Sidebar,
	DashNav,
	DashFooter,
	Loading,
	BlogsEdit,
} from "../../../components";
import axios from "axios";
import useSWR from "swr";
import Link from "next/link";
import {useRouter} from "next/router";

const fetcher = (url, token) =>
	axios
		.get(url, {headers: {Authorization: "Bearer " + token}})
		.then((res) => res.data);

export default function EditBlogs({idBlogs, user}) {
	const route = useRouter();
	const {data: resData} = useSWR(
		["https://api-hmpti.herokuapp.com/user-profiles/", user.strapiToken],
		fetcher
	);
	const {data: blogData} = useSWR(
		[`https://api-hmpti.herokuapp.com/blogs/${idBlogs}`, user.strapiToken],
		fetcher
	);

	const deleteBlogsHandle = async () => {
		setLoading(true);
		await axios
			.delete(`https://api-hmpti.herokuapp.com/blogs/${blogs.id}`)
			.then((res) => {
				route.push("/Profile/Blog");
				setLoading(false);
			})
			.catch((e) => {
				setLoading(false);
			});
	};

	const saveBlogsHandle = async () => {
		setLoading(true);
		await axios
			.put(`https://api-hmpti.herokuapp.com/blogs/${blogs.id}`, save, {
				headers: {Authorization: "Bearer " + user.strapiToken},
			})
			.then((data) => {
				setBlogs(data.data);
				setSave({
					judul: data.data.judul,
					subjudul: data.data.subjudul,
					content: data.data.content,
					waktu: data.data.waktu,
					tag_utama: data.data.tag_utama,
					penulis: data.data.penulis,
					sampul: data.data.sampul,
				});
				setLoading(false);
			});
	};

	const [dummy, setDummy] = useState([]);
	const [profile, setProfile] = useState([]);
	const [loading, setLoading] = useState(false);
	const [blogs, setBlogs] = useState([]);
	const [save, setSave] = useState({
		judul: "",
		subjudul: "",
		content: "",
		waktu: "",
		tag_utama: "",
		penulis: "",
		sampul: {},
	});
	useEffect(() => {
		if ((resData !== undefined && user) || resData) {
			if (blogData !== undefined) {
				setBlogs(blogData);
				setSave({
					judul: blogData.judul,
					subjudul: blogData.subjudul,
					content: blogData.content,
					waktu: blogData.waktu,
					tag_utama: blogData.tag_utama,
					penulis: blogData.penulis,
					sampul: blogData.sampul,
				});
			}
			setDummy(resData);
			const data = dummy.find((item) => item.email === user.email);
			if (data !== undefined) {
				setProfile(data);
				setLoading(false);
			}
		}
	}, [resData, user, dummy, blogData]);

	const SEO = {
		title: "HMP-TI || Edit Blog",
		description: "edit blog, tambah, dan hapus data blog HMP-TI UNISKA",
		openGraph: {
			title: "HMP-TI || Edit Blog",
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
					<div className='h-64 md:h-80 w-full bg-bg-logo bg-no-repeat bg-contain bg-center flex-col'>
						<div className='bg-indigo-800 bg-opacity-80 pb-5'>
							<div className='hidden md:block'>
								<DashNav profile={profile} title='EDIT BLOGS' />
							</div>
							<div className='px-5 pt-5'>
								<div className='hover:bg-gray-200 bg-white rounded-md shadow-lg flex flex-col justify-center p-2'>
									{blogs.length === 0 ? (
										<div className='text-center text-lg text-gray-500 py-10 flex items-center justify-center'>
											<p>Data Tidak Ada</p>
										</div>
									) : (
										<Link href={`/Post/${blogs.id}`}>
											<div>
												<img
													className='rounded-md'
													src={blogs.sampul.url}
													alt='_blank'
												/>
												<div className='md:px-2 px-0'>
													<p className='text-2xl font-bold text-gray-500 mt-2'>
														{blogs.judul}
													</p>
													{/* <p>{blogs.subjudul}</p> */}
													<p className='font-extrabold text-xs mt-1 pl-2'>
														- {blogs.waktu}
													</p>
												</div>
											</div>
										</Link>
									)}
								</div>
							</div>
						</div>
						<div className='bg-gray-200 px-4 pt-5 pb-5'>
							<div className='bg-gray-100 rounded-md shadow-lg flex flex-col justify-center pb-5 md:px-0'>
								<div className='bg-white rounded-t-md flex justify-between items-center w-full px-5 py-5'>
									<p className='text-sm md:text-xl font-bold text-gray-600'>
										Edit Blog
									</p>
									{loading ? (
										<Loading />
									) : (
										<div className='flex text-sm space-x-2'>
											<div
												onClick={saveBlogsHandle}
												className='shadow-lg cursor-pointer hover:bg-blue-200 rounded-md p-2 bg-blue-500 text-white'
											>
												<p>Edit Blog</p>
											</div>
											<div
												onClick={deleteBlogsHandle}
												className='shadow-lg cursor-pointer hover:bg-red-200 rounded-md p-2 bg-red-500 text-white'
											>
												<p>Hapus</p>
											</div>
										</div>
									)}
								</div>
								<BlogsEdit save={save} setSave={setSave} />
							</div>
						</div>
						<div className='bg-gray-200 px-5 md:px-5 pb-10 pt-5'>
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
	const user = req.session.get("user");

	return {
		props: {
			idBlogs: context.params.id,
			user: user,
		},
	};
});
