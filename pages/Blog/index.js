import Head from "next/head";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Post} from "../../components";

export default function Blog({post}) {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(post);
		console.log(data);
	});
	return (
		<div className='font-quicksand px-5 bg-gray-700 w-auto max-h-full pt-20 pb-10 sm:px-0'>
			<Head>
				<title>Blog HMP-TI</title>
			</Head>
			<div className='fixed top-4 left-4'>
				<Link href='/'>
					<p className='underline text-white text-xs hover:text-gray-400'>
						Home
					</p>
				</Link>
			</div>
			<div className='max-w-sm m-auto mb-10'>
				<p className='text-5xl font-black text-center text-gray-200 mb-2'>
					HMP-TI Blog
				</p>
				<p className='text-gray-300 text-center'>
					" Berbagi ilmu dan juga pengetahuan, tidak akan mengurangi sedikitpun
					kemampuan kita. "
				</p>
			</div>
			{data.map((item) => {
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
					/>
				);
			})}
		</div>
	);
}

export async function getStaticProps() {
	const apiUrl = "https://api-hmpti.herokuapp.com/blogs";
	const response = await fetch(apiUrl);
	const data = await response.json();

	return {
		props: {
			post: data,
		},
		revalidate: 1,
	};
}
