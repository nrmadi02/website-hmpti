import {useEffect} from "react";
import {withSession} from "../../middlewares/session";
import Head from "next/head";

export default function Login({user}) {
	return (
		<div className='font-quicksand'>
			<Head>
				<title>Profile Saya</title>
			</Head>
			<p>test</p>
		</div>
	);
}

export const getServerSideProps = withSession((context) => {
	const {req} = context;
	return {
		props: {
			user: req.session.get("user"),
		},
	};
});
