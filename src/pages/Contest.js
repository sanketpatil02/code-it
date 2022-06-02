import React from "react";
import { useState, useEffect } from "react";
import { Table, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contest = () => {
	const [contestList, setContestList] = useState([]);
	const [error, setError] = useState(false);
	const [fetchUrl, setFetchUrl] = useState("https://kontests.net/api/v1/all");
	const [loading, setLoading] = useState(true);

	function goToContestPage(item) {
		var win = window.open(item.url, "_blank");
		win.focus();
	}

	async function fetchData() {
		const res = await fetch(fetchUrl);
		res
			.json()
			.then((res) => setContestList(res), setLoading(false))
			.catch((err) => setError(error));
	}

	const handleChange = (e) => {
		setLoading(true);
		setFetchUrl(e.target.value);
	};

	useEffect(() => {
		fetchData();
	}, [fetchUrl]);

	return (
		<>
			<div className="banner">
				<h1>Know where you stand</h1>
				<div></div>
				<p>
					Currentaly we not hosting any contests.But we encourage you to
					participate in contests going on other platforms. You can filter all
					running and future contes below:
				</p>
			</div>

			<section className="filter-container">
				{/* <Title title="search rooms" /> */}
				<div className="section-title">
					<p>
						Green indicates all running contest and blue indicates upcoming
						contest
					</p>
					<h4>Filter Contest</h4>
					<div />
				</div>
				<form className="filter-form">
					<div
						className="form-group"
						style={{ width: "500px", margin: "1% auto" }}
					>
						<label htmlFor="tag">Select Platform</label>
						<select
							name="tag"
							id="tag"
							onChange={handleChange}
							className="form-control"
						>
							<option value="https://kontests.net/api/v1/all">All</option>
							<option value="https://kontests.net/api/v1/code_chef">
								CodeChef
							</option>
							<option value="https://kontests.net/api/v1/codeforces">
								CodeForces
							</option>
							<option value="https://kontests.net/api/v1/hacker_rank">
								HackerRank
							</option>
							<option value="https://kontests.net/api/v1/hacker_earth">
								HackerEarth
							</option>
							<option value="https://kontests.net/api/v1/top_coder">
								TopCoder
							</option>
						</select>
					</div>
				</form>
			</section>
			<div style={{ marginLeft: "10%", marginRight: "10%" }}>
				<Table bordered hover shadow>
					<thead class="thead-dark">
						<tr>
							<th>#</th>
							<th>Name</th>
							<th>
								Start Date <br /> and Time
							</th>
							<th>
								End Date <br /> and Time
							</th>
							{fetchUrl == "https://kontests.net/api/v1/all" ? (
								<th>Site</th>
							) : (
								<th></th>
							)}
						</tr>
					</thead>
					{loading ? (
						<Spinner animation="border" variant="primary" />
					) : (
						<tbody>
							{contestList.map((item, index) => (
								<tr
									scope="row"
									onClick={() => goToContestPage(item)}
									style={
										new Date(item.start_time).getTime() > new Date().getTime()
											? { color: "#0000FF" }
											: { color: "#32CD32" }
									}
								>
									{console.log(
										new Date(item.start_time).getTime() > new Date().getTime()
									)}
									<td>{index + 1}</td>
									<td>{item.name}</td>
									<td>
										Date = {new Date(item.start_time).getDate()}/
										{new Date(item.start_time).getMonth() + 1}/
										{new Date(item.start_time).getFullYear()}
										<br />
										Time = {new Date(item.start_time).getHours()}:
										{new Date(item.start_time).getMinutes()}{" "}
									</td>
									<td>
										Date = {new Date(item.end_time).getDate()}/
										{new Date(item.end_time).getMonth()}/
										{new Date(item.end_time).getFullYear()}
										<br />
										Time = {new Date(item.end_time).getHours()}:
										{new Date(item.end_time).getMinutes()}{" "}
									</td>
									<td>
										<a href={item.url} target="_blank">
											{item.site}
										</a>
									</td>
								</tr>
							))}
						</tbody>
					)}
				</Table>
			</div>
			{/* {contestList.map((item) => (
				<div>{item.site}</div>
			))} */}
		</>
	);
};

export default Contest;
