import nc from "next-connect";
import {sessionMiddleware} from "../../middlewares/session";
import {createStrapiAxios} from "../../utils/strapi";

export default nc()
	.use(sessionMiddleware)
	.post(async (req, res) => {
		const {username, password} = req.body;
		const body = JSON.stringify({
			identifier: username,
			password: password,
		});
		try {
			const user = await createStrapiAxios()
				.post(`https://api-hmpti.herokuapp.com/auth/local`, body, {
					headers: {"Content-Type": "application/json"},
				})
				.then((res) => ({
					...res.data.user,
					strapiToken: res.data.jwt,
				}));
			if (!user.confirmed) {
				return res.status(401).json({
					statusCode: 401,
					message: "User not confirmed",
				});
			}

			req.session.set("user", user);
			await req.session.save();
			res.json(user);
		} catch (error) {
			const {response: fetchResponse} = error;
			if (fetchResponse) {
				return res
					.status(fetchResponse?.status || 500)
					.json(error.response?.data);
			}
			res.status(500).json(error);
		}
	});
