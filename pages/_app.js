import {useEffect, useState} from "react";
import "../styles/globals.css";
import {Loading} from "../components";
import {transitions, positions, Provider as AlertProvider} from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import PageTransition from "../utils/PageTransition";
import axios from "axios";

function MyApp({Component, pageProps}) {
	const [loading, setLoading] = useState(true);
	useEffect(async () => {
		await axios.get("https://api-hmpti.herokuapp.com/").then((res) => {
			if (res.data) {
				setTimeout(() => {
					setLoading(false);
				}, [2000]);
			}
		});
	}, []);
	const options = {
		// you can also just use 'bottom center'
		position: positions.BOTTOM_CENTER,
		timeout: 5000,
		offset: "30px",
		// you can also just use 'scale'
		transition: transitions.SCALE,
	};
	return (
		<>
			<AlertProvider template={AlertTemplate} {...options}>
				{loading ? (
					<PageTransition>
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
					</PageTransition>
				) : (
					<PageTransition>
						<Component {...pageProps} />
					</PageTransition>
				)}
			</AlertProvider>
		</>
	);
}

export default MyApp;
