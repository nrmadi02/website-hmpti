import Head from "next/head";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Post, Search, SearchModal} from "../../components";
import {useRouter} from "next/router";
import axios from "axios";

const fetchData = async (url) =>
	await axios
		.get(url)
		.then((res) => ({
			error: false,
			data: res.data,
		}))
		.catch(() => ({
			error: true,
			data: null,
		}));

export default function Blog({post, page, numberOfBlog, hasilSearch}) {
	const route = useRouter();
	const [filter, setFilter] = useState("");
	const [data, setData] = useState([]);
	const [filterData, setDataFilter] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchData, setSearchData] = useState(false);
	const [dataTag, setDataTag] = useState({
		Pemrograman: false,
		Umum: false,
		Mikrojar: false,
		Multimedia: false,
	});

	const lastPage = Math.ceil(numberOfBlog / 5);

	useEffect(() => {
		setData(post);
		setLoading(false);
	}, [setData, post]);

	const handleClickPost = (id) => {
		route.push(`/Post/${id}`);
		realdata = [];
	};

	const pushLink = (data) => {
		const link = `${
			route.asPath === "/Blog" ? route.asPath + "?" : route.asPath + "&"
		}tag=${data}`;
		route.push(link);
		setLoading(false);
	};

	const searchByTag = (type, typeCheck) => {
		setLoading(true);
		const category = [
			{nama: "Umum"},
			{nama: "Pemrograman"},
			{nama: "Multimedia"},
			{nama: "Mikrojar"},
		];

		category.map((item) => {
			if (typeCheck === true && type === item.nama) {
				pushLink(type);
				if (item.nama === "Pemrograman") {
					setDataTag({
						Pemrograman: false,
						Umum: true,
						Multimedia: true,
						Mikrojar: true,
					});
				}
				item.nama === "Umum" &&
					setDataTag({
						Pemrograman: true,
						Umum: false,
						Multimedia: true,
						Mikrojar: true,
					});
				item.nama === "Multimedia" &&
					setDataTag({
						Pemrograman: true,
						Umum: true,
						Multimedia: false,
						Mikrojar: true,
					});
				item.nama === "Mikrojar" &&
					setDataTag({
						Pemrograman: true,
						Umum: true,
						Multimedia: true,
						Mikrojar: false,
					});
			} else if (typeCheck === false && type === item.nama) {
				route.push("/Blog");
				setDataTag({
					Pemrograman: false,
					Umum: false,
					Multimedia: false,
					Mikrojar: false,
				});
			}
		});
	};

	const handleSearch = () => {
		setSearchData(true);
		const lowercasedFilter = filter.toLowerCase();
		const filteredData = hasilSearch.filter((item) => {
			return (
				item.judul.toLowerCase().includes(lowercasedFilter) ||
				item.subjudul.toLowerCase().includes(lowercasedFilter)
			);
		});
		setDataFilter(filteredData);
	};

	return (
		<>
			<SearchModal
				set={searchData}
				setClick={() => setSearchData(false)}
				textSearch={filter}
				data={filterData}
			/>
			<div className='font-quicksand px-5 bg-gray-700 w-auto max-h-full pt-20 pb-5 sm:px-0'>
				<Head>
					<title>Blog HMP-TI</title>
				</Head>

				<div className='fixed top-4 left-4'>
					<Link href='/'>
						<p className='underline text-white text-xs cursor-pointer hover:text-gray-400'>
							Home
						</p>
					</Link>
				</div>
				<div className='max-w-sm m-auto mb-10'>
					<p className='text-5xl font-black text-center text-gray-200 mb-2'>
						HMP-TI Blog
					</p>
					<p className='text-gray-300 text-center'>
						" Berbagi ilmu dan juga pengetahuan, tidak akan mengurangi
						sedikitpun kemampuan kita. "
					</p>
				</div>
				<Search setFilter={setFilter} filter={filter} search={handleSearch} />

				<div>
					<div className='mt-2 mx-auto max-w-lg flex flex-wrap mb-10 justify-center'>
						<div>
							<label className='inline-flex items-center'>
								<input
									type='checkbox'
									disabled={dataTag.Umum || loading}
									className='disabled:opacity-50 form-checkbox rounded-md text-indigo-600'
									defaultChecked={false}
									onChange={(e) => searchByTag("Umum", e.target.checked)}
								/>
								<span className='ml-2 text-white'>Umum</span>
							</label>
						</div>
						<div>
							<label className='inline-flex items-center ml-3'>
								<input
									type='checkbox'
									disabled={dataTag.Pemrograman || loading}
									className='disabled:opacity-50 form-checkbox rounded-md text-green-500'
									defaultChecked={false}
									onChange={(e) => searchByTag("Pemrograman", e.target.checked)}
								/>
								<span className='ml-2 text-white'>Pemrograman</span>
							</label>
						</div>
						<div>
							<label className='inline-flex items-center ml-3'>
								<input
									type='checkbox'
									disabled={dataTag.Multimedia || loading}
									className=' disabled:opacity-50 form-checkbox rounded-md text-pink-600'
									defaultChecked={false}
									onChange={(e) => searchByTag("Multimedia", e.target.checked)}
								/>
								<span className='ml-2 text-white'>Multimedia</span>
							</label>
						</div>
						<div>
							<label className='inline-flex items-center ml-3'>
								<input
									type='checkbox'
									disabled={dataTag.Mikrojar || loading}
									className='disabled:opacity-50 form-checkbox rounded-md text-yellow-500'
									defaultChecked={false}
									onChange={(e) => searchByTag("Mikrojar", e.target.checked)}
								/>
								<span className='ml-2 text-white'>Mikrojar</span>
							</label>
						</div>
					</div>
				</div>
				{loading === true && (
					<div
						className={`font-bold text-center text-green-500 mb-5 ${
							loading ? "block" : "hidden"
						}`}
					>
						<p>Loading ...</p>
					</div>
				)}
				{data.length !== 0 ? (
					data.map((item) => {
						return (
							<Post
								key={item.id}
								id={item.id}
								tagUtama={item.tag_utama}
								sampul={item.sampul.url}
								judul={item.judul}
								subjudul={item.subjudul}
								penulis={item.penulis}
								waktu={item.waktu}
								clickPost={handleClickPost}
							/>
						);
					})
				) : (
					<p className='text-white text-center font-bold text-xl'>
						Blog Belum Ada
					</p>
				)}

				<div className='flex max-w-md sm:max-w-2xl mx-auto mb-10 justify-between'>
					<button
						disabled={page <= 1}
						onClick={() => {
							let setLink = route.asPath;
							let link = route.asPath;
							if (setLink.includes(`page=${page}`)) {
								link = setLink.replaceAll(`page=${page}`, `page=${page - 1}`);
							}
							route.push(link);
						}}
						className='disabled:opacity-50 outline-none focus:outline-none shadow-md hover:text-black hover:bg-white text-white px-4 py-2 rounded-md'
					>
						Prev
					</button>
					<button
						disabled={page >= lastPage}
						onClick={() => {
							let setLink = route.asPath;
							let link = `${
								route.asPath === "/Blog"
									? route.asPath + "?"
									: route.asPath + "&"
							}page=${page + 1}`;
							if (setLink.includes(`page=${page}`)) {
								link = setLink.replaceAll(`page=${page}`, `page=${page + 1}`);
							}
							route.push(link);
						}}
						className='disabled:opacity-50 outline-none focus:outline-none shadow-md hover:text-black hover:bg-white text-white px-4 py-2 rounded-md'
					>
						Next
					</button>
				</div>
				<div className='mt-5 text-center'>
					<p className='text-white'>
						© 2021{" "}
						<span className='text-blue-500 font-bold hover:text-gray-500'>
							<Link href='/'>HMP-TI UNISKA</Link>
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps({query: {page = 1, tag}}) {
	const apiUrl = "https://api-hmpti.herokuapp.com/blogs";
	const start = +page === 1 ? 0 : (+page - 1) * 5;

	const akhir = +page * 5;

	let numberOfBlog = 0;
	let finalData = [];

	const dataSearch = await fetchData(`${apiUrl}?_sort=id:DESC`);

	if (tag) {
		const data = await fetchData(
			`https://api-hmpti.herokuapp.com/tag-posts?_sort=id:ASC&tag=${tag}`
		);
		finalData = data.data;
		data.data?.map((item) => {
			const dummy = item.blogs.sort((a, b) => b.id - a.id);
			const dummyData = dummy.slice(start, akhir);
			const number = dummy.length;
			numberOfBlog = number;
			finalData = dummyData;
		});
	} else {
		const number = await fetchData(`${apiUrl}/count`);
		const data = await fetchData(
			`${apiUrl}?_sort=id:DESC&_limit=5&_start=${start}`
		);
		finalData = data.data;
		numberOfBlog = number.data;
	}

	return {
		props: {
			post: finalData,
			numberOfBlog: numberOfBlog,
			page: +page,
			hasilSearch: dataSearch.data,
		},
	};
}
