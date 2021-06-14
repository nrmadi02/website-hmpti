import {LockClosedIcon} from "@heroicons/react/solid";
import {useRouter} from "next/router";
import axios from "axios";
import {useState} from "react";
import {useAlert} from "react-alert";

export default function FormLogin() {
	const router = useRouter();
	const alert = useAlert();
	const [message, setMessage] = useState(null);
	// const [username, setUsername] = useState("");
	// const [password, SetPassword] = useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setMessage(null);
		const body = {
			username: event.currentTarget.username.value,
			password: event.currentTarget.password.value,
		};
		try {
			await axios.post("/api/login", body);
			router.push("/Profile");
			alert.success("Success Login");
		} catch (error) {
			if ((error.response.status = 400)) {
				setMessage("NPM atau Password anda salah");
				alert.error("NPM or Password wrong");
			}
			// router.push("/Profile");
		}
	};
	return (
		<div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-md w-full space-y-8'>
				<div>
					<img
						className='mx-auto h-12 sm:h-28 w-auto'
						src='/icons/man.svg'
						alt='Workflow'
					/>
					<h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
						Selamat Datang Sahabat
					</h2>
					<p className='mt-2 text-center text-sm text-gray-600'>
						Di{" "}
						<a
							href='/'
							className='font-medium text-indigo-600 hover:text-indigo-500'
						>
							HMP-TI UNISKA
						</a>
					</p>
				</div>
				<form
					className='mt-8 space-y-6'
					method='post'
					// action='/api/login'
					onSubmit={onSubmit}
				>
					{/* <input type='hidden' name='remember' defaultValue='true' /> */}
					<div className='rounded-md shadow-sm -space-y-px'>
						<div>
							<label htmlFor='nama' className='sr-only'>
								NPM
							</label>
							<input
								// onChange={(event) => setUsername(event.target.value)}
								// value={username}
								id='username'
								name='username'
								type='text'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='NPM Anda'
							/>
						</div>
						<div>
							<label htmlFor='password' className='sr-only'>
								Password
							</label>
							<input
								// onChange={(event) => SetPassword(event.target.value)}
								// value={password}
								id='password'
								name='password'
								type='password'
								required
								className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
								placeholder='Password'
							/>
						</div>
					</div>
					<div>
						{message && <p className='text-sm text-red-500'>{message}</p>}
					</div>
					<div className='flex items-center justify-end'>
						<div className='text-sm'>
							<a
								href='#'
								className='font-medium text-indigo-600 hover:text-indigo-500'
							>
								Lupa Password?
							</a>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
						>
							<span className='absolute left-0 inset-y-0 flex items-center pl-3'>
								<LockClosedIcon
									className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
									aria-hidden='true'
								/>
							</span>
							Login
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
