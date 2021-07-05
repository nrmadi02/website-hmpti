import {useState, Fragment, useLayoutEffect} from "react";
import {Disclosure, Menu, Transition} from "@headlessui/react";
import {XIcon, MenuIcon, UserCircleIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";
import Link from "next/link";
import axios from "axios";
import {useAlert} from "react-alert";

const navigation = [
	{name: "Home", href: "/", current: true},
	{name: "Profile", href: "/InfoPage", current: false},
	{name: "Blog", href: "/Blog", current: false},
	{name: "Informasi", href: "/Informasi", current: false},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
	const router = useRouter();
	const alert = useAlert();
	const [sticky, setSticky] = useState(false);
	const handleScroll = () => {
		if (window.scrollY > 80) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	};
	const onLogout = (e) => {
		e.preventDefault();
		axios.post("/api/logout").then(() => {
			router.push("/");
			alert.success("Logout Berhasil");
		});
	};
	useLayoutEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{sticky ? (
				<div
					className={
						sticky
							? "fixed top-0 z-30 opacity-90 w-full border-b-2 border-white navbar-sticky"
							: "absulote w-full"
					}
				>
					<Disclosure as='nav' className='bg-gray-800'>
						{({open}) => (
							<>
								<div className='max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8'>
									<div className='relative flex items-center justify-between h-16'>
										<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
											<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
												<span className='sr-only'>Open main menu</span>
												{open ? (
													<XIcon className='block h-6 w-6' aria-hidden='true' />
												) : (
													<MenuIcon
														className='block h-6 w-6'
														aria-hidden='true'
													/>
												)}
											</Disclosure.Button>
										</div>
										<div className='flex-1 flex items-center justify-center sm:items-center sm:justify-between'>
											<div className='flex-shrink-0 flex items-center '>
												<img
													className='h-10 w-auto logo'
													src='/images/logo.png'
													alt='HmpTI'
												/>
												<p className='font-archivo block sm:hidden text-lg ml-2 text-white'>
													HMP-TI
												</p>
												<p className='font-archivo hidden sm:block text-lg ml-2 text-white font-bold'>
													HMP-TI UNISKA
												</p>
											</div>
											<div className='hidden sm:block sm:ml-6'>
												<div className='flex space-x-4'>
													{navigation.map((item) => (
														<Link key={item.name} href={item.href}>
															<p
																className={classNames(
																	router.asPath == item.href
																		? "bg-gray-900 text-white"
																		: "text-gray-300 hover:bg-gray-700 hover:text-white",
																	"cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
																)}
															>
																{" "}
																{item.name}
															</p>
														</Link>
													))}
												</div>
											</div>
										</div>
										<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
											<Menu as='div' className='ml-3 relative'>
												{({open}) => (
													<>
														<div>
															<Menu.Button className='bg-gray-800 p-1 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
																<span className='sr-only'>Open user menu</span>
																<UserCircleIcon className='h-6 w-6 text-gray-400 hover:text-white' />
															</Menu.Button>
														</div>
														<Transition
															show={open}
															as={Fragment}
															enter='transition ease-out duration-100'
															enterFrom='transform opacity-0 scale-95'
															enterTo='transform opacity-100 scale-100'
															leave='transition ease-in duration-75'
															leaveFrom='transform opacity-100 scale-100'
															leaveTo='transform opacity-0 scale-95'
														>
															<Menu.Items
																static
																className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20'
															>
																<Menu.Item>
																	{({active}) => (
																		<Link href='/Login'>
																			<p
																				className={classNames(
																					active ? "bg-gray-100" : "",
																					"cursor-pointer block px-4 py-2 text-sm text-gray-700"
																				)}
																			>
																				Profile Kamu
																			</p>
																		</Link>
																	)}
																</Menu.Item>
																<Menu.Item>
																	{({active}) => (
																		<a
																			onClick={onLogout}
																			className={classNames(
																				active ? "bg-gray-100" : "",
																				"cursor-pointer block px-4 py-2 text-sm text-gray-700"
																			)}
																		>
																			Keluar
																		</a>
																	)}
																</Menu.Item>
															</Menu.Items>
														</Transition>
													</>
												)}
											</Menu>
										</div>
									</div>
								</div>
								<Disclosure.Panel className='sm:hidden'>
									<div className='px-2 pt-2 pb-3 space-y-1'>
										{navigation.map((item) => (
											<Link key={item.name} href={item.href}>
												<p
													className={classNames(
														router.asPath == item.href
															? "bg-gray-900 text-white"
															: "text-gray-300 hover:bg-gray-700 hover:text-white",
														"cursor-pointer block px-3 py-2 rounded-md text-sm font-medium"
													)}
												>
													{" "}
													{item.name}
												</p>
											</Link>
										))}
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			) : null}
			<Disclosure as='nav' className='bg-gray-800'>
				{({open}) => (
					<>
						<div className='max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8'>
							<div className='relative flex items-center justify-between h-16'>
								<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
									<Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XIcon className='block h-6 w-6' aria-hidden='true' />
										) : (
											<MenuIcon className='block h-6 w-6' aria-hidden='true' />
										)}
									</Disclosure.Button>
								</div>
								<div className='flex-1 flex items-center justify-center sm:items-center sm:justify-between'>
									<div className='flex-shrink-0 flex items-center '>
										<img
											className='h-10 w-auto logo'
											src='/images/logo.png'
											alt='HmpTI'
										/>
										<p className='font-archivo block sm:hidden text-lg ml-2 text-white'>
											HMP-TI
										</p>
										<p className='font-archivo hidden sm:block text-lg ml-2 text-white font-bold'>
											HMP-TI UNISKA
										</p>
									</div>
									<div className='hidden sm:block sm:ml-6'>
										<div className='flex space-x-4'>
											{navigation.map((item) => (
												<Link key={item.name} href={item.href}>
													<p
														className={classNames(
															router.asPath == item.href
																? "bg-gray-900 text-white"
																: "text-gray-300 hover:bg-gray-700 hover:text-white",
															" cursor-pointer px-3 py-2 rounded-md text-sm font-medium"
														)}
													>
														{" "}
														{item.name}
													</p>
												</Link>
											))}
										</div>
									</div>
								</div>
								<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
									<Menu as='div' className='ml-3 relative'>
										{({open}) => (
											<>
												<div>
													<Menu.Button className='bg-gray-800 p-1 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
														<span className='sr-only'>Open user menu</span>
														<UserCircleIcon className='h-6 w-6 text-gray-400 hover:text-white' />
													</Menu.Button>
												</div>
												<Transition
													show={open}
													as={Fragment}
													enter='transition ease-out duration-100'
													enterFrom='transform opacity-0 scale-95'
													enterTo='transform opacity-100 scale-100'
													leave='transition ease-in duration-75'
													leaveFrom='transform opacity-100 scale-100'
													leaveTo='transform opacity-0 scale-95'
												>
													<Menu.Items
														static
														className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-20'
													>
														<Menu.Item>
															{({active}) => (
																<Link href='/Login'>
																	<p
																		className={classNames(
																			active ? "bg-gray-100" : "",
																			"cursor-pointer block px-4 py-2 text-sm text-gray-700"
																		)}
																	>
																		Profile Kamu
																	</p>
																</Link>
															)}
														</Menu.Item>

														<Menu.Item>
															{({active}) => (
																<a
																	onClick={onLogout}
																	className={classNames(
																		active ? "bg-gray-100" : "",
																		"cursor-pointer block px-4 py-2 text-sm text-gray-700"
																	)}
																>
																	Keluar
																</a>
															)}
														</Menu.Item>
													</Menu.Items>
												</Transition>
											</>
										)}
									</Menu>
								</div>
							</div>
						</div>
						<Disclosure.Panel className='sm:hidden'>
							<div className='px-2 pt-2 pb-3 space-y-1'>
								{navigation.map((item) => (
									<Link key={item.name} href={item.href}>
										<p
											className={classNames(
												router.asPath == item.href
													? "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white",
												"cursor-pointer block px-3 py-2 rounded-md text-sm font-medium"
											)}
										>
											{" "}
											{item.name}
										</p>
									</Link>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
}
