import Link from "next/link";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import axios from "axios";
import {NextSeo} from "next-seo";

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

export default function ViewPost({blogData}) {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(blogData);
	}, []);

	const SEO = {
		title: "HMP-TI || " + blogData.judul,
		description: blogData.subjudul,
		openGraph: {
			title: "HMP-TI || " + blogData.judul,
			type: "website",
			url: window.location.href,
		},
	};
	return (
		<>
			<NextSeo {...SEO} />
			<div className='font-quicksand px-5 bg-gray-700 w-auto max-h-full pt-20 pb-10 sm:px-0'>
				<div className='fixed top-4 left-4'>
					<Link href='/Blog'>
						<p className='underline text-white text-xs hover:text-gray-400'>
							Kembali
						</p>
					</Link>
				</div>
				<div className=' mx-auto'>
					<p className='text-gray-300 text-center'>Publish on {data.waktu}</p>
					<p className='text-3xl font-extrabold text-center text-gray-200 mt-2'>
						{data.judul}
					</p>
					<p className='text-gray-300 text-center'>Post by - {data.penulis}</p>
					<div className='flex justify-center mt-5'>
						<div>
							<div className='bg-gray-300 rounded-md px-2 font-bold text-center'>
								<p>{blogData.tag_utama}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='mt-5 max-w-md sm:max-w-2xl mx-auto'>
					<img
						className='rounded-lg object-cover w-full sm:w-full sm:max-w-screen-md h-auto'
						alt='_post'
						src={blogData.sampul.url}
					/>
					<div className='p-3'>
						<p className='text-gray-300 font-bold text-sm'>{data.subjudul}</p>
						<div className='body-content text-white mt-3'>
							<ReactMarkdown>{data.content}</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getStaticProps(context) {
	const data = await fetchData(
		`https://api-hmpti.herokuapp.com/blogs/${context.params.id}`
	);
	const article = await data.data;

	return {
		props: {
			blogData: article,
		},
		revalidate: 5,
	};
}
export async function getStaticPaths() {
	const res = await fetchData(`https://api-hmpti.herokuapp.com/blogs`);
	const articles = await res.data;

	const paths = articles.map((item) => ({
		params: {id: item.id.toString()},
	}));

	return {paths, fallback: false};
}
