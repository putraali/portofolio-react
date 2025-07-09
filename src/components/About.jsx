import "../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
	SiAdobeillustrator,
	SiAdobephotoshop,
	SiCoreldraw,
	SiFigma,
	SiNodedotjs,
	SiReact,
} from "react-icons/si";

function About() {
	return (
		<section id="about" className="about-section py-5">
			<div className="container">
				<div className="section-header text-center mb-5">
					<h2 className="section-title display-4 fw-bold">About Me</h2>
					<div className="title-underline mx-auto"></div>
				</div>

				<div className="about-content row g-4">
					<div className="about-text col-lg-6">
						<p className="lead-text fs-5">
							Hello, I'm{" "}
							<span className="highlight fw-bold">Putra Ali Perdana</span>,
							currently pursuing my Bachelor's degree in Computer Science at a
							university in Bandung. With three years of professional design
							experience, I've developed a strong foundation in both technical
							and creative aspects of digital design.
						</p>

						<p className="fs-5">
							Currently, I'm enhancing my skills through the Infinite Learning
							program, specializing in{" "}
							<span className="highlight fw-bold">
								Web Development & UI/UX Design
							</span>
							. This combination allows me to bridge the gap between aesthetic
							design and functional implementation, creating seamless user
							experiences.
						</p>

						<p className="fs-5">
							My approach combines technical precision with creative
							problem-solving, ensuring designs are not only visually appealing
							but also highly usable and accessible.
						</p>
					</div>

					<div className="skills-section col-lg-6">
						<div className="bg-white p-4 rounded-3 shadow-sm">
							<h3 className="skills-title text-center mb-4 fs-3">
								Skills & Tools
							</h3>
							<div className="tools-grid row g-3">
								<div className="tool-card col-md-4 col-6">
									<div className="p-3 text-center border rounded-3 h-100">
										<SiAdobeillustrator className="tool-icon fs-1 text-primary mb-2" />
										<span className="d-block">Illustrator</span>
									</div>
								</div>
								<div className="tool-card col-md-4 col-6">
									<div className="p-3 text-center border rounded-3 h-100">
										<SiAdobephotoshop className="tool-icon fs-1 text-primary mb-2" />
										<span className="d-block">Photoshop</span>
									</div>
								</div>
								<div className="tool-card col-md-4 col-6">
									<div className="p-3 text-center border rounded-3 h-100">
										<SiCoreldraw className="tool-icon fs-1 text-primary mb-2" />
										<span className="d-block">CorelDraw</span>
									</div>
								</div>
								<div className="tool-card col-md-4 col-6">
									<div className="p-3 text-center border rounded-3 h-100">
										<SiFigma className="tool-icon fs-1 text-primary mb-2" />
										<span className="d-block">Figma</span>
									</div>
								</div>
								<div className="tool-card col-md-4 col-6">
									<div className="p-3 text-center border rounded-3 h-100">
										<SiNodedotjs className="tool-icon fs-1 text-success mb-2" />
										<span className="d-block">Node.js</span>
									</div>
								</div>
								<div className="tool-card col-md-4 col-6">
									<div className="p-3 text-center border rounded-3 h-100">
										<SiReact className="tool-icon fs-1 text-info mb-2" />
										<span className="d-block">React.js</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
