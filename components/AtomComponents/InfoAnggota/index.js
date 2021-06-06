import InfoPribadi from "../InfoPribadi";

export default function InfoAnggota() {
	return (
		<div className='flex space-y-4 flex-col sm:flex-row sm:space-x-10 sm:space-y-0'>
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
		</div>
	);
}
