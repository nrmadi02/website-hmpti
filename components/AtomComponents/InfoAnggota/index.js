import {useEffect, useState} from "react";
import InfoPribadi from "../InfoPribadi";

export default function InfoAnggota({divisi, pengurus}) {
	const [dvs, setDvs] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		setDvs(divisi);
		setData(pengurus);
	}, []);
	return (
		<div className='flex space-y-4 flex-col sm:flex-row sm:space-x-10 sm:space-y-0'>
			{data.map((item) => {
				if (item.jabatan.jabatan === dvs && item.status.status === "Anggota") {
					return (
						<div key={item.id}>
							<InfoPribadi
								nama={item.nama.toUpperCase()}
								url={item.url}
								jabatan='Anggota'
								angkatan={item.angkatan}
							/>
						</div>
					);
				}
			})}
		</div>
	);
}
