import {
	BriefcaseIcon,
	UserGroupIcon,
	AcademicCapIcon,
	ShoppingCartIcon,
	ChipIcon,
	CodeIcon,
	PhotographIcon,
} from "@heroicons/react/outline";

export default function Bidang() {
	return (
		<div className='mt-5 p-4 sm:pt-20 bg-yellow-400 w-full sm:h-auto'>
			<p className='text-2xl sm:text-5xl text-center'>
				Divisi <span className='font-archivo'>HMP-TI</span>
			</p>
			<div className='bg-white w-48 sm:w-96 h-1 mx-auto'></div>
			<div className='flex flex-col sm:mt-16'>
				<div className='grid-rows-2 grid-cols-2 gap-x-20 md:gap-x-24 gap-y-2 grid sm:grid-cols-4 w-1/2 mx-auto mt-10 sm:mt-20'>
					<div className='flex items-center flex-col'>
						<div className='w-24 ring-4 ring-white p-3 hover:bg-white'>
							<BriefcaseIcon className='text-white hover:text-yellow-400' />
						</div>
						<p className='text-center mt-2'>Divisi</p>
						<span className='font-archivo'>Humas</span>
					</div>
					<div className='flex items-center flex-col'>
						<div className='w-24 ring-4 ring-white p-3 hover:bg-white'>
							<UserGroupIcon className='text-white hover:text-yellow-400' />
						</div>
						<p className='text-center mt-2'>Divisi</p>
						<span className='font-archivo'>PSDM</span>
					</div>
					<div className='flex items-center flex-col'>
						<div className='w-24 ring-4 ring-white p-3 hover:bg-white'>
							<AcademicCapIcon className='text-white hover:text-yellow-400' />
						</div>
						<p className='text-center mt-2'>Divisi</p>
						<span className='font-archivo'>Litbang</span>
					</div>
					<div className='flex items-center flex-col'>
						<div className='w-24 ring-4 ring-white p-3 hover:bg-white'>
							<ShoppingCartIcon className='text-white hover:text-yellow-400' />
						</div>
						<p className='text-center mt-2'>Divisi</p>
						<span className='font-archivo'>Kewirausahaan</span>
					</div>
				</div>
				<div className='mx-auto grid-rows-3 mt-4 sm:-mt-20 md:gap-x-20 lg:gap-x-0 grid sm:grid-cols-3 w-2/5'>
					<div className='flex items-center flex-col'>
						<div className='w-24 ring-4 ring-white p-3 hover:bg-white'>
							<ChipIcon className='text-white hover:text-yellow-400' />
						</div>
						<p className='text-center mt-2'>Subdivisi</p>
						<span className='font-archivo'>Mikrojar</span>
					</div>
					<div className='flex items-center flex-col mt-4 sm:mt-0'>
						<div className='w-24 ring-4 ring-white p-3 hover:bg-white'>
							<PhotographIcon className='text-white hover:text-yellow-400' />
						</div>
						<p className='text-center mt-2'>Subdivisi</p>
						<span className='font-archivo'>Multimedia</span>
					</div>
					<div className='flex items-center flex-col mt-4 sm:mt-0'>
						<div className='w-24 ring-4 ring-white p-3 hover:bg-white'>
							<CodeIcon className='text-white hover:text-yellow-400' />
						</div>
						<p className='text-center mt-2'>Subdivisi</p>
						<span className='font-archivo'>Pemrograman</span>
					</div>
				</div>
			</div>
		</div>
	);
}
