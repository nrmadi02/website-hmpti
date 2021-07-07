import React, {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import ReactPlayer from "react-player/lazy";

export default function InfoContent({info}) {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(info[0]);
	}, [info]);
	return (
		<>
			<div className='-mt-8 flex flex-col items-center'>
				<div className='mb-8 pb-2 border-b-2 border-white text-2xl sm:text-4xl flex flex-col text-center font-archivo'>
					<p>{data.judul}</p>
				</div>
				{data.link_video ? (
					<div className='container-video mx-auto w-11/12 md:h-96 md:max-w-2xl'>
						{/* <ReactPlayer url='https://drive.google.com/file/d/1F0wpyDAR3HIegYYxHCtVM2moHaHUP76m/view?usp=sharing' /> */}
						<iframe
							src={data.link_video}
							className='responsive-iframe'
							allow='autoplay'
							allowFullScreen={true}
						/>
					</div>
				) : null}
			</div>
			<div className='h-screen'>
				<div className='text-white mt-5 max-w-md sm:max-w-2xl mx-auto'>
					<div className='body-content'>
						<ReactMarkdown>{data.isi}</ReactMarkdown>
					</div>
				</div>
			</div>
		</>
	);
}
