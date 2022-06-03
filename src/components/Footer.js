import React from "react";
import "./Footer.css";
import logo from "../images/logo.svg";
const Footer = () => {
	return (
		<>
			<footer class="footer-container">
				<div className="footer-links-container">
					<p class="footer-links">
						<a href="https://www.linkedin.com/in/pravin-patil-8536341a0/" target="_blank">
							Contact Us
						</a>
						
						{/* <a href="https://forms.gle/hms5V9jYpRPswsz29" target="_blank">
							Contribute
						</a>
						|
						<a href="https://forms.gle/hms5V9jYpRPswsz29" target="_blank">
							Sponser Us
						</a> */}
						|
						<a href="https://www.instagram.com/pravinp_/" target="_blank">
							Feedback
						</a>
					</p>
				</div>
				<div className="footer-copyright">
					copyright@2021 All rights reserved
				</div>
			</footer>
		</>
	);
};

export default Footer;
