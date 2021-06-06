import {useEffect, useState} from "react";
import "../styles/globals.css";
import {Loading} from "../components";

function MyApp({Component, pageProps}) {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 5000);
	});
	return (
		<>
			{loading ? (
				<div className='h-screen bg-indigo-400 flex flex-col justify-center items-center'>
					<div className='flex flex-col justify-start items-center space-y-4'>
						<img
							className='w-20 sm:w-40 h-auto'
							src='/images/logo.png'
							alt='HmpTI'
						/>
						<Loading />
					</div>
				</div>
			) : (
				<Component {...pageProps} />
			)}
		</>
	);
}

export default MyApp;
