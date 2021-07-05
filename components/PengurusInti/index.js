import {useEffect, useState} from "react";
import {InfoPribadi} from "..";

export default function PengurusInti({data}) {
	const [profile, setProfile] = useState([]);
	useEffect(() => {
		setProfile(data);
	}, []);
	return (
		<div className='mx-auto flex flex-col bg-white items-center justify-center -mt-5 p-5'>
			<div className='mb-10 border-b-2 border-yellow-500 text-2xl sm:text-4xl flex flex-col text-center font-archivo'>
				<p className='mt-3'>
					PENGURUS <span className='text-red-500'>INTI</span>
				</p>
			</div>
			<div className='grid gap-4 grid-cols-1 sm:grid-cols-2'>
				{profile.map((item) => {
					if (item.jabatan.jabatan === "Ketua umum") {
						return (
							<div key={item.id}>
								<InfoPribadi
									nama={item.nama.toUpperCase()}
									url={item.url}
									jabatan={item.jabatan.jabatan}
									angkatan={item.angkatan}
								/>
								<div className='bg-indigo-400 flex h-1'></div>
							</div>
						);
					}
				})}
				{profile.map((item) => {
					if (item.jabatan.jabatan === "Wakil ketua umum") {
						return (
							<div key={item.id}>
								<InfoPribadi
									nama={item.nama.toUpperCase()}
									url={item.url}
									jabatan={item.jabatan.jabatan}
									angkatan={item.angkatan}
								/>
								<div className='bg-indigo-400 flex h-1'></div>
							</div>
						);
					}
				})}
				{profile.map((item) => {
					if (item.jabatan.jabatan === "Sekretaris") {
						return (
							<div key={item.id}>
								<InfoPribadi
									nama={item.nama.toUpperCase()}
									url={item.url}
									jabatan={item.jabatan.jabatan}
									angkatan={item.angkatan}
								/>
								<div className='bg-indigo-400 flex h-1'></div>
							</div>
						);
					}
				})}

				{profile.map((item) => {
					if (item.jabatan.jabatan === "Bendahara") {
						return (
							<div key={item.id}>
								<InfoPribadi
									nama={item.nama.toUpperCase()}
									url={item.url}
									jabatan={item.jabatan.jabatan}
									angkatan={item.angkatan}
								/>
								<div className='bg-indigo-400 flex h-1'></div>
							</div>
						);
					}
				})}

				{/* <div>
					<InfoPribadi
						nama='MUHAMMAD ALVIANNOR'
						url='https://i.ibb.co/mXtSF4d/Foto-22.jpg'
						jabatan='KETUA UMUM'
						angkatan='FTI 2018'
					/>
					<div className='bg-indigo-400 flex h-1'></div>
				</div>
				<div>
					<InfoPribadi
						nama='M. DONY MUBARAK'
						url='https://i.ibb.co/HGXN5pV/Foto-3.jpg'
						jabatan='WAKIL KETUA UMUM'
						angkatan='FTI 2019'
					/>
					<div className='bg-indigo-400 flex h-1'></div>
				</div>
				<div>
					<InfoPribadi
						nama='M. DONY MUBARAK'
						url='https://i.ibb.co/HGXN5pV/Foto-3.jpg'
						jabatan='WAKIL KETUA UMUM'
						angkatan='FTI 2019'
					/>
					<div className='bg-indigo-400 flex h-1'></div>
				</div>
				<div>
					<InfoPribadi
						nama='M. DONY MUBARAK'
						url='https://i.ibb.co/HGXN5pV/Foto-3.jpg'
						jabatan='WAKIL KETUA UMUM'
						angkatan='FTI 2019'
					/>
					<div className='bg-indigo-400 flex h-1'></div>
				</div> */}
			</div>
		</div>
	);
}
