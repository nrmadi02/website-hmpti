import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";

export default function InfoContent({info}) {
	const [data, setData] = useState([]);
	useEffect(() => {
		setData(info[0]);
	}, []);
	return (
		<div className='-mt-8 h-screen'>
			<div className='text-white mt-5 max-w-md sm:max-w-2xl mx-auto'>
				<div className='body-content'>
					<ReactMarkdown>{data.isi}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}
