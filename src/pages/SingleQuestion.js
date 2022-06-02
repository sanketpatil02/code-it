import React from "react";
import { useState, useEffect } from "react";
import AceEditor from "react-ace";
import { useParams } from "react-router-dom";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "./SingleQuestion.css";
import ReactLoading from "react-loading";
import { question_data } from "./question_data";

const SingleQuestion = (props) => {
  const [code, setCode] = React.useState("");
  const [lang, setLang] = React.useState("c");

  const [checkAns, setCheckAns] = React.useState(false);
  const [verdict, setVerdict] = React.useState(
    "Your Code verdict will appear here after submission"
  );
  const [output, setOutput] = React.useState("OUTPUT");
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState({});
  const problem_id = useParams();

  function onChange(newValue) {
    setCode(newValue);
  }

  function evaluateCode() {}

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      let temp = question_data.filter(
        (q) => q._id === Number(problem_id.problem_id)
      );
      setQuestion(temp[0]);
      setLoading(false);
    }, 1000);
  }, [problem_id.problem_id]);

  function handleChange(event) {
    setLang(event.target.value);
  }
  console.log(question);
  return (
    <>
      {loading ? (
        <div className="question-container">
          <div style={{ marginLeft: "48%" }}>
            <ReactLoading type={"spokes"} color={"blue"} />
          </div>
        </div>
      ) : (
        <>
          <div className="question-cotainer">
            <div className="question-title">{question.question_name}</div>
            {console.log(question[0])}
            <hr />
            <div className="question-extras">
              <div className="question-difficulty">
                Difficulty: {question.difficulty}
              </div>
              <div className="question-tags">Tags:Coming Soon</div>
            </div>
            <hr />
            <div className="question-description">
              <h6>Description:</h6>
              <p>{question.description}</p>
            </div>
            <hr />
            <div>
              <h6>Input:</h6>
              <p>{question.input}</p>
            </div>
            <hr />
            <div>
              <h6>Output:</h6>
              <p>{question.output}</p>
            </div>
            <hr />
            <div>
              <h6>Constraint:</h6>
              <p>{question.constraints}</p>
            </div>
            <hr />
            <div>
              <h6>Sample Input:</h6>
              <p>{question.sample_input}</p>
            </div>
            <hr />
            <div>
              <h6>Sample Output:</h6>
              <p>{question.sample_output}</p>
            </div>
            <hr />
            <div>
              <form
                className="filter-form"
                style={{ width: "100px", marginLeft: "0px" }}
              >
                <div className="form-group">
                  <label htmlFor="difficulty">Select Language</label>
                  <select
                    name="difficulty"
                    id="difficulty"
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="C">C</option>
                    <option value="CPP14">Cpp</option>
                    <option value="JAVA">Java</option>
                    <option value="PYTHON">Python</option>
                  </select>
                </div>
              </form>
              <hr />
              <h6>Write Code here:</h6>
              <div className="editor-container">
                <AceEditor
                  mode="cpp"
                  theme="solarized_dark"
                  onChange={onChange}
                  name="editor"
                  fontSize="18px"
                  width="80%"
                  height="600px"
                  placeholder="write your code here"
                  enableBasicAutocompletion="true"
                  enableLiveAutocompletion="true"
                  editorProps={{ $blockScrolling: true }}
                  value={code}
                />
                <button
                  onClick={evaluateCode}
                  className="btn btn-primary btn-submit"
                >
                  Submit
                </button>
                {checkAns ? (
                  <ReactLoading type={"bars"} color={"blue"} />
                ) : (
                  <p>{output}</p>
                )}
              </div>
            </div>
            <hr />
            <div>
              <h6>Code Verdict:</h6>
              <p>{verdict}</p>
            </div>
            <hr />
          </div>
        </>
      )}
      {/* <div className="question-cotainer">
				{slug}
				{console.log(question.data.input)}
				<div className="question-title">Even Sum</div>
				<hr />
				<div className="question-extras">
					<div className="question-difficulty">Difficulty: Medium</div>
					<div className="question-tags">Tags:Resursion</div>
				</div>
				<hr />
				<div className="question-description">
					<h6>Description:</h6>
					<p>
						There are N integers in an array A. Two players take turns
						alternatively in placing signs (+ or -) before them, and then they
						all are added. The sign can be placed before any element of the
						array that has not been assigned a sign yet. All elements must be
						assigned a sign. Player 1 wins if the resulting sum is even, else
						player 2 wins. Find out who shall win if they both play optimally.
					</p>
				</div>
				<hr />
				<div>
					<h6>Input:</h6>
					<p>
						First line will contain T, number of testcases. Then the testcases
						follow. <br />
						Each testcase contains 2 lines of input. <br />
						First line contains a single integer N, size of the array. <br />
						Second line contains N space separated integers - A1,A2,…,AN,
						denoting the array elements"
					</p>
				</div>
				<hr />
				<div>
					<h6>Output:</h6>
					<p>
						For each testcase, output in a single line "1", if the first person
						wins or "2" if the second person wins.
					</p>
				</div>
				<hr />
				<div>
					<h6>Constraint:</h6>
					<p>
						1≤T≤10 <br /> 1≤N≤105 <br /> 1≤Ai≤109
					</p>
				</div>
				<hr />
				<div>
					<h6>Sample Input:</h6>
					<p>
						3 <br />2 <br /> 1 2 <br /> 3 <br /> 1 1 2 <br /> 3 <br /> 1 2 4
					</p>
				</div>
				<hr />
				<div>
					<h6>Sample Output:</h6>
					<p>
						2 <br />1 <br /> 2
					</p>
				</div>
				<hr />
				<div>
					<h6>Write Code here:</h6>
					<div className="editor-container">
						<AceEditor
							mode="java"
							theme="solarized_dark"
							onChange={onChange}
							name="editor"
							fontSize="18px"
							width="80%"
							height="600px"
							placeholder="write your code here"
							enableBasicAutocompletion="true"
							enableLiveAutocompletion="true"
							editorProps={{ $blockScrolling: true }}
							value={code}
							onChange={onChange}
							// setOptions={{
							// 	enableBasicAutocompletion: true,
							// 	enableLiveAutocompletion: true,
							// 	enableSnippets: true,
							// }}
						/>
						<button
							onClick={evaluateCode}
							className="btn btn-primary btn-submit"
						>
							Submit
						</button>
					</div>
				</div>
				<hr />
			</div> */}
    </>
  );
};

export default SingleQuestion;
