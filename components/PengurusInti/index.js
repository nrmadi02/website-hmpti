import {InfoPribadi} from "..";

export default function PengurusInti() {
	return (
		<div className='mx-auto flex bg-white items-center justify-center -mt-5 p-5'>
			<div className='grid grid-flow-col gap-4 grid-rows-4 grid-cols-1 sm:grid-cols-2 sm:grid-rows-2'>
				<div>
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
				</div>
			</div>
		</div>
	);
}
