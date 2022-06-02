import React from "react";
import "./Question.css";
import { Card, Button } from "react-bootstrap";

const Question = () => {
	return (
		<Card className="card-container">
			<Card.Title className="card-title">First Duplicate Value</Card.Title>
			<Card.Body className="card-body-container">
				Difficulty= Easy
				<Card.Text>
					Tags= Dynamic Programming, Recursion,RecursionRecursion
				</Card.Text>
				<Button className="btn-solve" variant="primary">
					Solve Challenge
				</Button>
			</Card.Body>
		</Card>
	);
};

export default Question;
