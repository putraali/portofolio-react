import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function Footer() {
	return (
		<footer className="bg-dark text-white py-4 mt-5">
			<div className="container">
				<div className="row">
					<div className="col-md-4 mb-4 mb-md-0">
						<h5>Putra Ali Perdana</h5>
						<p className="text-muted">
							Professional portfolio and projects showcase.
						</p>
					</div>

					<div className="col-md-4 mb-4 mb-md-0">
						<h5>Quick Links</h5>
						<ul className="list-unstyled">
							<li>
								<a
									href="#home"
									className="text-white text-decoration-none hover-white">
									Home
								</a>
							</li>
							<li>
								<a
									href="#about"
									className="text-white text-decoration-none hover-white">
									About
								</a>
							</li>
							<li>
								<a
									href="#portfolio"
									className="text-white text-decoration-none hover-white">
									Projects
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="text-white text-decoration-none hover-white">
									Contact
								</a>
							</li>
						</ul>
					</div>

					<div className="col-md-4">
						<h5>Connect</h5>
						<div className="d-flex gap-3">
							<a
								href="https://www.linkedin.com/in/putra-ali-perdana-37166330a/"
								className="text-white hover-white-icon"
								target="_blank"
								rel="noopener noreferrer">
								<FaLinkedin size={24} />
							</a>
							<a
								href="https://github.com"
								className="text-white hover-white-icon"
								target="_blank"
								rel="noopener noreferrer">
								<FaGithub size={24} />
							</a>
							<a
								href="mailto:putraaliperdana@gmail.com"
								className="text-white hover-white-icon">
								<FaEnvelope size={24} />
							</a>
						</div>
					</div>
				</div>

				<hr className="my-4 bg-secondary" />

				<div className="row">
					<div className="col-md-6 text-center text-md-start">
						<p className="mb-0">
							&copy; {new Date().getFullYear()} Putra Ali Perdana. All rights
							reserved.
						</p>
					</div>
					<div className="col-md-6 text-center text-md-end">
						<a
							href="/privacy"
							className="text-white me-3 text-decoration-none hover-white">
							Privacy Policy
						</a>
						<a
							href="/terms"
							className="text-white text-decoration-none hover-white">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
