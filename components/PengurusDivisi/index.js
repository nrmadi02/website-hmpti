import {InfoAnggota, InfoPribadi} from "..";
import {Disclosure, Popover, Transition} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/solid";
import {useEffect, useState, Fragment} from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function PengurusDivisi({
	divisi,
	pengurus,
	title,
	detail,
	program,
}) {
	const [data, setData] = useState([]);
	const [dvs, setDvs] = useState("");
	useEffect(() => {
		setData(pengurus);
		setDvs(divisi);
	});
	return (
		<div className='mx-auto flex flex-col bg-white items-center justify-center p-5'>
			<div className='mb-5 border-b-2 border-yellow-500 text-2xl sm:text-4xl flex flex-col text-center font-archivo'>
				<p className='mt-3'>
					{title} <span className='text-red-500'>{divisi.toUpperCase()}</span>
				</p>
			</div>
			<div>
				{data.map((item) => {
					if (item.jabatan.jabatan === dvs && item.status.status === "Ketua") {
						return (
							<div key={item.id}>
								<InfoPribadi
									nama={item.nama.toUpperCase()}
									url={item.url}
									jabatan={`CO ${item.jabatan.jabatan}`}
									angkatan={item.angkatan}
								/>
							</div>
						);
					}
				})}
				<div className='flex justify-center'>
					<div className='w-full max-w-sm'>
						<Popover className='relative'>
							{({open}) => (
								<>
									<Popover.Button className='text-center flex justify-between w-full px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 mt-1'>
										<span className='font-archivo'>INFORMASI</span>
										<ChevronUpIcon
											className={`${
												open ? "transform rotate-180" : ""
											} w-5 h-5 text-purple-500`}
										/>
									</Popover.Button>
									<Transition
										as={Fragment}
										enter='transition ease-out duration-200'
										enterFrom='opacity-0 translate-y-1'
										enterTo='opacity-100 translate-y-0'
										leave='transition ease-in duration-150'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 translate-y-1'
									>
										<Popover.Panel className='absolute  z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl'>
											<div className='overflow-hidden font-medium text-yellow-700 bg-yellow-100 p-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5'>
												<p className='text-justify'>{detail}</p>
											</div>
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>
					</div>
				</div>
				<div className='mt-2'>
					<Disclosure>
						{({open}) => (
							<>
								<Disclosure.Button className='text-center flex justify-between w-full px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
									<span className='font-archivo'>POGRAM KERJA</span>
									<ChevronUpIcon
										className={`${
											open ? "transform rotate-180" : ""
										} w-5 h-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
									<div>
										{program.map((item) => {
											if (item.divisi === dvs) {
												return (
													<ReactMarkdown
														key={item.id}
														remarkPlugins={[gfm]}
														children={item.program}
													/>
												);
											}
										})}
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
				<div className='mt-2'>
					<Disclosure>
						{({open}) => (
							<>
								<Disclosure.Button className='text-center flex justify-between w-full px-4 py-2 text-sm font-medium text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
									<span className='font-archivo'>ANGGOTA</span>
									<ChevronUpIcon
										className={`${
											open ? "transform rotate-180" : ""
										} w-5 h-5 text-purple-500`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
									<InfoAnggota pengurus={pengurus} divisi={divisi} />
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			</div>
		</div>
	);
}
