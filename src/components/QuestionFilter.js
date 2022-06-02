import React from "react";

const QuestionFilter = () => {
	const handleChange = (event) => {
		console.log("handel change");
	};
	return (
		<>
			<section className="filter-container">
				{/* <Title title="search rooms" /> */}
				<div className="section-title">
					<h4>Search Problems</h4>
					<div />
				</div>
				<form className="filter-form">
					{/* select type */}
					<div className="form-group">
						<label htmlFor="difficulty">Difficulty Level</label>
						<select
							name="difficulty"
							id="difficulty"
							onChange={handleChange}
							className="form-control"
						>
							<option value="Any">Any</option>
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
							onChange={handleChange}
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
			</section>
		</>
	);
};

export default QuestionFilter;
