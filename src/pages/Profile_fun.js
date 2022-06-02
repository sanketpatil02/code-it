import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile_fun = () => {
	const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

	return <div>{isAuthenticated && <h1>Nihkil</h1>}</div>;
};

export default Profile_fun;
