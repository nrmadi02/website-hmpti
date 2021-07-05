import Head from "next/head";
import {FormLogin, Loading} from "../../components";
import {ChevronLeftIcon} from "@heroicons/react/solid";
import Link from "next/link";
import {withSession} from "../../middlewares/session";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

export default function Login({user}) {
	const [loading, setLoading] = useState(true);
	const router = useRouter();
	useEffect(() => {
		if (user) {
			router.push("/Profile");
		} else {
			setLoading(false);
		}
	}, []);
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
				<div className='font-quicksand'>
					<Head>
						<title>Profile HMP-TI</title>
						<link rel='icon' href='/favicon.ico' />
					</Head>
					<div className='bg-bg-login bg-no-repeat bg-cover h-screen bg-center'>
						<div className='h-screen items-center justify-center'>
							<div className='flex justify-center h-screen items-center'>
								<div className='absolute top-20 sm:left-20 lg:left-56 sm:top-auto'>
									<img
										className='w-24 sm:w-36 md:w-40 lg:w-60'
										src='/images/logo.png'
										alt='_hmpti'
									/>
								</div>
								<div className='absolute sm:right-11 lg:right-20 sm:mb-10'>
									<FormLogin />
								</div>
								<div className='h-auto w-7 sm:w-12 absolute top-2 left-2'>
									<Link href='/'>
										<span>
											<ChevronLeftIcon className='text-gray-800 rounded-md sm:text-white bg-white sm:bg-transparent hover:text-blue-700' />
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export const getServerSideProps = withSession((context) => {
	const {req} = context;
	return {
		props: {
			user: req.session.get("user") || null,
		},
	};
});
