import React from "react";
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
const axios = require("axios");

const Profile = () => {
	const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
	const [problems, setProblems] = React.useState([]);
	const [points, setPoints] = React.useState(0);
	useEffect(() => {
		alert("GOING INSIDE");
		if (isAuthenticated) {
			var in_data = {
				email: user.email,
			};

			var in_user = {
				email: user.email,
				problemsolved: [],
			};

			axios
				.post(
					"https://codekit-user-registration.herokuapp.com/api/auth/getuser",
					in_data
				)
				.then((response) => {
					console.log(response.data);
					// var temp_arr = [];
					// for (var i = 0; i < response.data.problemsolved.length; i++) {
					// 	temp_arr.push(response.data.problemsolved[i]);
					// 	console.log("COUNT = " + i);
					// }
					setPoints(response.data.problemsolved.length);
					setProblems(response.data);
				})
				.catch((error) => {
					alert(error);
				});
		}
	}, []);

	return (
		<div>
			{isAuthenticated && (
				<div>
					<div style={{ width: "100%" }} className="padding">
						<div className="row container d-flex justify-content-center">
							<div className="col-xl-6 col-md-12">
								<div className="card user-card-full">
									<div className="row m-l-0 m-r-0">
										<div className="col-sm-4 bg-c-lite-green user-profile">
											<div class="card-block text-center text-white">
												<div class="m-b-25">
													{" "}
													<img
														class="img-radius"
														src={user.picture}
														alt="User-Profile-Image"
													/>
												</div>
												<h6 class="f-w-600">{user.name}</h6>
												<p>Rating Will Display Here</p>{" "}
												<p>Points = {points * 10}</p>
												<i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
											</div>
										</div>

										<div class="col-sm-8">
											<div class="card-block">
												<h6 class="m-b-20 p-b-5 b-b-default f-w-600"></h6>
												<div class="row">
													<div class="col-sm-10">
														<p class="m-b-10 f-w-600">Name</p>
														<h6 class="text-muted f-w-400">{user.name}</h6>
													</div>
												</div>
												<h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
												<div class="row">
													<div class="col-sm-10">
														<p class="m-b-10 f-w-600">Email</p>
														<h6 class="text-muted f-w-400">{user.email}</h6>
													</div>
												</div>
												<h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
												<div class="row">
													<div class="col-sm-10">
														<p class="m-b-10 f-w-600">Problems Solved</p>
														<ul>{problems.problemsolved}</ul>
													</div>
												</div>
												<h6 class="m-b-20 p-b-5 b-b-default f-w-600"></h6>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
