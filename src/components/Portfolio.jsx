import { useState } from "react";
import { portfolioList } from "../data/DataPortfolio";
import "../styles/Portfolio.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("All");
	const [selectedProject, setSelectedProject] = useState(null);

	const categories = [
		"All",
		...new Set(portfolioList.map((item) => item.category)),
	];

	const filteredPortfolio =
		activeFilter === "All"
			? portfolioList
			: portfolioList.filter((item) => item.category === activeFilter);

	return (
		<section id="portfolio" className="portfolio-section">
			<div className="container">
				<div className="section-header">
					<h2 className="section-title">Project</h2>
					<div className="title-underline"></div>
				</div>

				{/* Filter Controls */}
				<div className="portfolio-filters">
					{categories.map((category) => (
						<button
							key={category}
							className={`filter-btn ${
								activeFilter === category ? "active" : ""
							}`}
							onClick={() => setActiveFilter(category)}>
							{category}
						</button>
					))}
				</div>

				{/* Portfolio Grid */}
				<div className="portfolio-grid">
					{filteredPortfolio.length === 0 ? (
						<div className="empty-state">
							<p>No projects available in this category</p>
						</div>
					) : (
						filteredPortfolio.map((item) => (
							<div className="portfolio-item" key={item.id}>
								<div className="item-image">
									<img src={item.image} alt={item.title} />
									<div className="item-overlay">
										<button
											className="view-details-btn"
											onClick={() => setSelectedProject(item)}>
											View Details
										</button>
									</div>
								</div>
								<div className="item-info">
									<h3>{item.title}</h3>
									<p className="category">{item.category}</p>
									<div className="item-links">
										{item.demoUrl && (
											<a
												href={item.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="link-icon"
												aria-label="Live demo">
												<FiExternalLink />
											</a>
										)}
										{item.githubUrl && (
											<a
												href={item.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="link-icon"
												aria-label="Source code">
												<FiGithub />
											</a>
										)}
									</div>
								</div>
							</div>
						))
					)}
				</div>

				{/* Project Modal */}
				{selectedProject && (
					<div className="project-modal">
						<div
							className="modal-backdrop"
							onClick={() => setSelectedProject(null)}></div>
						<div className="modal-container">
							<button
								className="close-modal"
								onClick={() => setSelectedProject(null)}
								aria-label="Close modal">
								<FaTimes />
							</button>

							<div className="modal-grid">
								<div className="modal-image">
									<img
										src={selectedProject.image}
										alt={selectedProject.title}
									/>
								</div>

								<div className="modal-content">
									<div className="modal-header">
										<h3>{selectedProject.title}</h3>
										<span className="project-category">
											{selectedProject.category}
										</span>
									</div>

									<div className="project-description">
										<p>{selectedProject.description}</p>
									</div>

									{selectedProject.technologies && (
										<div className="technologies">
											<h4>Technologies</h4>
											<div className="tech-tags">
												{selectedProject.technologies.map((tech) => (
													<span key={tech}>{tech}</span>
												))}
											</div>
										</div>
									)}

									<div className="project-links">
										{selectedProject.demoUrl && (
											<a
												href={selectedProject.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link">
												<FiExternalLink /> Visit Live Site
											</a>
										)}
										{selectedProject.githubUrl && (
											<a
												href={selectedProject.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="project-link">
												<FiGithub /> View Source Code
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Portfolio;
