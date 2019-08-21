import config from "../../configs";
import { g_Auth } from "../../graphql/auth.graphql";
const url = config.AUTH_MS;

export const previousUser = async userdata => {
    console.log("previous | user | requests ");
    try {
        const service = new g_Auth(url);
        const { data } = await service.previousUser({ ...userdata });
        const { error, gotMail, gotMobile, ok } = data.data.previousUser;

        if (ok) {
            return { gotMail, gotMobile };
        }

        if (!ok) {
            return { error };
        }
    } catch (error) {
        return {
            ok: false,
            error: [
                {
                    path: "network",
                    message: "An error occured while retrieving data"
                }
            ]
        };
    }
};
