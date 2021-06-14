import {withIronSession, ironSession} from "next-iron-session";

const sessionConfig = {
	password: "qYQUE8Kb2qzAjsvJ6Ctp0CAcbudq0Bga",
	cookieName: "next-session",
	cookieOptions: {
		secure: false,
	},
};

export const sessionMiddleware = ironSession(sessionConfig);

export function withSession(handler) {
	return withIronSession(handler, sessionConfig);
}
