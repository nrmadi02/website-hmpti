import axios from "axios";

export function createStrapiAxios(user) {
	return axios.create({
		baseURL: "https://api-hmpti.herokuapp.com",
		headers: user && {
			Authorization: `Bearer ${user?.strapiToken}`,
		},
	});
}
