import React from "react";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionFilter from "../components/QuestionFilter";
import ReactLoading from "react-loading";

const Practise = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [difficulty, setDifficulty] = useState("All");
	const [tag, setTag] = useState("All");

	useEffect(() => {
		setLoading(true);
		const apiUrl = "https://codekit-backend.herokuapp.com/api/questions";
		fetch(apiUrl)
			.then((res) => res.json())
			.then((questions) => {
				setLoading(false);
				setData(questions);
			});
	}, []);

	function handleDifficultyChange(event) {
		setDifficulty(event.target.value);
	}

	function handleTagChange(event) {
		setTag(event.target.value);
	}

	return (
		<div>
			<div className="banner">
				<h1>Pick > Write > Submit</h1>
				<div></div>
				<p>
					Best HandPicked Coding Questions The practice you need to ace the
					coding .Solve them and Check you knowledge.
				</p>
			</div>

			{/* <QuestionFilter /> */}

			<form className="filter-form">
				{/* select type */}
				<div className="form-group">
					<label htmlFor="difficulty">Difficulty Level</label>
					<select
						name="difficulty"
						id="difficulty"
						onChange={handleDifficultyChange}
						className="form-control"
					>
						<option value="All">All</option>
						<option value="Easy">Easy</option>
						<option value="Medium">Medium</option>
						<option value="Hard">Hard</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="tag">Select Tag</label>
					<select
						name="tag"
						id="tag"
						onChange={handleTagChange}
						className="form-control"
					>
						<option value="All">All</option>
						<option value="Array">Array</option>
						<option value="String">String</option>
						<option value="Math">Math</option>
						<option value="Dynamic Programming">Dynamic Programming</option>
						<option value="Algorithms">Algorithms</option>
					</select>
				</div>
			</form>

			{loading ? (
				<div className="question-container">
					<div style={{ marginLeft: "48%" }}>
						<ReactLoading type={"bars"} color={"blue"} />
					</div>
				</div>
			) : (
				<div style={{ width: "70%", margin: "10px auto" }}>
					<Table bordered hover shadow>
						<thead class="thead-dark">
							<tr>
								<th>#</th>
								<th>Question</th>
								<th>Difficulty</th>
								<th>Submissions</th>
								<th>Status</th>
							</tr>
						</thead>

						<tbody>
							{difficulty === "All"
								? tag === "All"
									? data.map((question, index) => (
											<tr scope="row">
												<td>{index + 1}</td>
												<td>{question.question_name}</td>
												<td>{question.difficulty}</td>
												<td>{question.submissions}</td>
												<td>
													<Link to={`/problems/${question._id}`}>
														<button type="button" class="btn btn-success">
															Solve
														</button>
													</Link>
												</td>
											</tr>
									  ))
									: data.map((question, index) =>
											question.tag === tag ? (
												<tr scope="row">
													<td>{index + 1}</td>
													<td>{question.question_name}</td>
													<td>{question.difficulty}</td>
													<td>{question.submissions}</td>
													<td>
														<Link to={`/problems/${question._id}`}>
															<button type="button" class="btn btn-success">
																Solve
															</button>
														</Link>
													</td>
												</tr>
											) : (
												<div></div>
											)
									  )
								: tag === "All"
								? data.map((question, index) =>
										question.difficulty === difficulty ? (
											<tr scope="row">
												<td>{index + 1}</td>
												<td>{question.question_name}</td>
												<td>{question.difficulty}</td>
												<td>{question.submissions}</td>
												<td>
													<Link to={`/problems/${question._id}`}>
														<button type="button" class="btn btn-success">
															Solve
														</button>
													</Link>
												</td>
											</tr>
										) : (
											<div></div>
										)
								  )
								: data.map((question, index) =>
										question.difficulty === difficulty &&
										question.tag === tag ? (
											<tr scope="row">
												<td>{index + 1}</td>
												<td>{question.question_name}</td>
												<td>{question.difficulty}</td>
												<td>{question.submissions}</td>
												<td>
													<Link to={`/problems/${question._id}`}>
														<button type="button" class="btn btn-success">
															Solve
														</button>
													</Link>
												</td>
											</tr>
										) : (
											<div></div>
										)
								  )}
						</tbody>
					</Table>
				</div>
			)}

			{/* <div style={{ width: "70%", margin: "10px auto" }}>
				<Table bordered hover shadow>
					<thead class="thead-dark">
						<tr>
							<th>#</th>
							<th>Question</th>
							<th>Difficulty</th>
							<th>Submissions</th>
							<th>Status</th>
						</tr>
					</thead>

					<tbody>
						{data.map((question, index) => (
							<tr scope="row">
								<td>{index + 1}</td>
								<td>{question.question_name}</td>
								<td>{question.difficulty}</td>
								<td>{question.submissions}</td>
								<td>
									<Link to={`/problems/${question._id}`}>
										<button type="button" class="btn btn-success">
											Solve
										</button>
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div> */}
		</div>
	);
};

export default Practise;
