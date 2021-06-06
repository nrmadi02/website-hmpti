import {DuplicateIcon} from "@heroicons/react/solid";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Loading} from "../../components";

const postFeed = 6;
let feed = [];

export default function Feed({feedData}) {
	const [dsc, setDsc] = useState([]);
	const [next, setNext] = useState(6);
	const [loading, setLoading] = useState(false);
	const postFeedHandler = async (start, end) => {
		const data = await feedData.sort((a, b) => b.id - a.id);
		const feedSliced = await data.slice(start, end);
		feed = [...feed, ...feedSliced];
		setDsc(feed);
	};
	useEffect(() => {
		if (feed.length === 0) {
			postFeedHandler(0, postFeed);
		} else {
			feed = [];
			postFeedHandler(0, postFeed);
		}
	}, []);
	const loadFeedHandler = () => {
		setLoading(true);
		setTimeout(() => {
			postFeedHandler(next, next + 3);
			setNext(next + 3);
			setLoading(false);
		}, 2000);
	};
	return (
		<div>
			<hr className='border border-gray-500' />
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2'>
				{dsc.map((data) => {
					return (
						<div className='relative' key={data.id}>
							<Link href={data.url}>
								<img
									className='h-72 w-72 md:h-44 md:w-44 lg:h-96 lg:w-96 object-cover object-center'
									src={data.sumber}
								/>
							</Link>
							<DuplicateIcon className='text-white w-8 absolute top-2 right-2 ' />
						</div>
					);
				})}
			</div>
			<div className='mt-5 justify-center flex'>
				{loading ? (
					<Loading />
				) : (
					<button
						onClick={loadFeedHandler}
						className='font-bold text-white bg-yellow-400  py-1 px-5 rounded-md hover:bg-blue-400'
					>
						Lihat Lainnya...
					</button>
				)}
			</div>
		</div>
	);
}
