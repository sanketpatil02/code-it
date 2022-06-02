import React from "react";
import {
	FaListOl,
	FaLaptopCode,
	FaStackOverflow,
	FaBookReader,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
	const [data, setData] = React.useState([
		{
			name: "Quality Question",
			description:
				"If you want to ace the coding , solve all common data structures and popular  handpicked questions of different categories and different difficulty levels.",
			icon: <FaListOl />,
		},
		{
			name: "Integrated IDE",
			description:
				"Solve questions in integrated IDE in your browser itself dont need any installed ide. We currently support four languages C, C++, Java and Python.",
			icon: <FaLaptopCode />,
		},
		{
			name: "Contest Filtering",
			description:
				"To know where you stand, participate in different compitions held online. We provide you all the compitions currently ongoing and future contest in realtime.",
			icon: <FaStackOverflow />,
		},
		{
			name: "Career opportunities",
			description:
				"Get updates about latest internship and placement opportunities at one place. Get placement opportunities according to your passing year.",
			icon: <FaBookReader />,
		},
	]);
	return (
		<>
			<section className="services">
				<div className="section-title">
					<h4>Features</h4>
					<div />
				</div>
				<div className="services-center">
					{data.map((item) => {
						return (
							<article key={`item-${item.name}`} className="service">
								<span>{item.icon}</span>
								<h6>{item.name}</h6>
								<p>{item.description}</p>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default Services;
