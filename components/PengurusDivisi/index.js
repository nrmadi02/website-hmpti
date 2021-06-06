import {InfoAnggota, InfoPribadi} from "..";
import {Disclosure} from "@headlessui/react";
import {ChevronUpIcon} from "@heroicons/react/solid";
import {useEffect, useState} from "react";

export default function PengurusDivisi({divisi, pengurus}) {
	const [data, setData] = useState([]);
	const [dvs, setDvs] = useState("");
	useEffect(() => {
		setData(pengurus);
		setDvs(divisi);
	});
	return (
		<div className='mx-auto flex flex-col bg-white items-center justify-center p-5'>
			<div className='mb-5 border-b border-yellow-500 text-4xl flex flex-col text-center font-archivo'>
				<p className='mt-3'>DIVISI {divisi.toUpperCase()}</p>
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
									<InfoAnggota />
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			</div>
		</div>
	);
}
