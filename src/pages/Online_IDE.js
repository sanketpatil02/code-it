import React from "react";
import "./Online_IDE.css";
import { useEffect } from "react";
const axios = require("axios");
const Online_IDE = () => {
	const code_str = 'print("NIKHIL")';
	useEffect(() => {
		var program = {
			script: code_str,
			language: "python3",
			versionIndex: "0",
			clientId: "d905c53c5330920d50e79face1243b95",
			clientSecret:
				"943c704c5f3ce40e29ef3f470fc4f06083e6800dfd54d8e3250b241884ee6f50",
		};

		axios
			.post("https://api.jdoodle.com/v1/execute", program)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});

		console.log("LOAD DATA");
	}, []);
	return <h1>Coming Soon</h1>;
};

export default Online_IDE;
