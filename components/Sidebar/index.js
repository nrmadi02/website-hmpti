import React, {useEffect, useState} from "react";
import Link from "next/link";
import {
	MenuIcon,
	UserCircleIcon,
	HomeIcon,
	UserIcon,
	BookOpenIcon,
	InformationCircleIcon,
	LogoutIcon,
} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import axios from "axios";
import {useAlert} from "react-alert";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const navigation = [
	{
		name: "Dashboard",
		href: "/Profile",
		current: false,
		icon: <HomeIcon className='h-6 w-6 text-red-500' />,
	},
	{
		name: "User",
		href: "/Profile/User",
		current: false,
		icon: <UserIcon className='h-6 w-6 text-yellow-500' />,
	},
	{
		name: "Blog",
		href: "/Profile/Blog",
		current: false,
		icon: <BookOpenIcon className='h-6 w-6 text-green-500' />,
	},
];

export default function Sidebar({profile}) {
	const alert = useAlert();
	const router = useRouter();
	const [menu, setMenu] = useState(false);
	const [data, setData] = useState([]);

	const logOutHandle = (e) => {
		e.preventDefault();
		axios.post("/api/logout").then(() => {
			router.push("/");
			alert.success("Logout Berhasil");
		});
	};

	useEffect(() => {
		if (profile) {
			setData(profile);
		}
	}, [profile]);
	return (
		<>
			<div className='flex md:hidden justify-between items-center p-5'>
				<div onClick={() => setMenu(true)} className='h-7 w-7 text-gray-700'>
					<MenuIcon />
				</div>
				<div className='flex items-center '>
					<img
						className='h-10 w-auto logo'
						src='/images/logo.png'
						alt='HmpTI'
					/>
					<p className='font-archivo block md:hidden text-4xl ml-2'>HMP-TI</p>
				</div>
				<div className='h-7 w-7'></div>
			</div>
			<div className={`md:hidden ${menu ? "" : "hidden"}`}>
				<div className='fixed inset-0 flex z-40'>
					<div className='fixed inset-0'>
						<div className='absolute inset-0 bg-gray-600 opacity-75'></div>
					</div>
					<div className='relative flex-1 flex flex-col max-w-xs w-full bg-white'>
						<div className='absolute top-0 right-0 -mr-14 p-1'>
							<button
								onClick={() => setMenu(false)}
								className='flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600'
								aria-label='Close sidebar'
							>
								<svg
									className='h-6 w-6 text-white'
									stroke='currentColor'
									fill='none'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</button>
						</div>
						<div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
							<div className='px-4 mx-auto'>
								<div className='flex-shrink-0 flex items-center justify-center'>
									<img
										className='h-10 w-auto logo'
										src='/images/logo.png'
										alt='HmpTI'
									/>
									<p className='font-archivo block text-4xl ml-2'>HMP-TI</p>
								</div>
							</div>
							<nav className='mt-10 flex-1 px-2 bg-white'>
								{navigation.map((item) => (
									<Link key={item.name} href={item.href}>
										<div
											className={classNames(
												router.asPath == item.href
													? "rounded-md text-black"
													: "text-gray-400 ",
												"mb-3 cursor-pointer px-2 hover:bg-gray-500 hover:text-white items-center py-2 rounded-md text-sm font-medium flex space-x-3"
											)}
										>
											{item.icon}
											<p>{item.name}</p>
										</div>
									</Link>
								))}
							</nav>
						</div>
						<div className='w-5/6 h-px bg-gray-500 mx-auto rounded-lg'></div>
						<div className='flex-shrink-0 flex flex-col p-2 justify-center'>
							<div
								onClick={(e) => logOutHandle(e)}
								className='flex items-center hover:bg-gray-500 text-gray-500 rounded-md p-2 hover:text-white '
							>
								<LogoutIcon className='h-6 w-6' />
								<p className='ml-3 font-medium'>Log Out</p>
							</div>
						</div>
					</div>
					<div className='flex-shrink-0 w-14'></div>
				</div>
			</div>

			<div className='hidden md:flex md:flex-shrink-0 md:h-screen'>
				<div className='flex flex-col w-64 bg-white'>
					<div className='h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
						<div className='px-4 mx-auto'>
							<div className='flex-shrink-0 flex items-center justify-center'>
								<img
									className='h-10 w-auto logo'
									src='/images/logo.png'
									alt='HmpTI'
								/>
								<p className='font-archivo block text-4xl ml-2'>HMP-TI</p>
							</div>
						</div>
						<nav className='mt-10 flex-1 px-2 bg-white'>
							{navigation.map((item) => (
								<Link key={item.name} href={item.href}>
									<div
										className={classNames(
											router.asPath == item.href
												? "rounded-md text-black"
												: "text-gray-400 ",
											"mb-3 cursor-pointer px-2 hover:bg-gray-500 hover:text-white items-center py-2 rounded-md text-sm font-medium flex space-x-3"
										)}
									>
										{item.icon}
										<p>{item.name}</p>
									</div>
								</Link>
							))}
						</nav>
					</div>
					<div className='w-5/6 h-px bg-gray-500 mx-auto rounded-lg'></div>
					<div className='flex-shrink-0 flex flex-col p-2 justify-center'>
						<div
							onClick={(e) => logOutHandle(e)}
							className='flex items-center hover:bg-gray-500 text-gray-500 rounded-md p-2 hover:text-white '
						>
							<LogoutIcon className='h-6 w-6' />
							<p className='ml-3 font-medium'>Log Out</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
