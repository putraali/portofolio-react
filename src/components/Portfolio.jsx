import { useState } from "react";
import { portfolioList } from "../data/DataPortfolio";
import "../styles/Portfolio.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

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
					<h2 className="section-title">My Portfolio</h2>
					<div className="title-underline"></div>
					<p className="section-subtitle">
						Explore my collection of projects showcasing my skills in design and
						development. Each project represents a unique challenge and
						solution.
					</p>
				</div>

				{/* Filter Controls with description */}
				<div className="portfolio-filters-container">
					<p className="filter-description">
						Filter projects by category to find specific types of work:
					</p>
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
				</div>

				{/* Portfolio Grid with hover instructions */}
				{filteredPortfolio.length === 0 ? (
					<div className="no-projects-message">
						<p>
							No projects found in this category. Please try another filter.
						</p>
					</div>
				) : (
					<>
						<p className="grid-instruction">
							Hover over project thumbnails to view options or click for details
						</p>
						<div className="portfolio-grid">
							{filteredPortfolio.map((item) => (
								<div className="portfolio-item" key={item.id}>
									<div className="portfolio-img-container">
										<img
											src={item.image}
											alt={item.title}
											className="portfolio-img"
										/>
										<div className="portfolio-overlay">
											<div className="portfolio-overlay-content">
												<h4>{item.title}</h4>
												<p className="overlay-description">
													{item.shortDescription ||
														"Click to view project details"}
												</p>
												<div className="portfolio-links">
													{item.demoUrl && (
														<a
															href={item.demoUrl}
															target="_blank"
															rel="noopener noreferrer"
															className="portfolio-link"
															title="View Live Demo">
															<FiExternalLink />
															<span className="link-tooltip">Live Demo</span>
														</a>
													)}
													{item.githubUrl && (
														<a
															href={item.githubUrl}
															target="_blank"
															rel="noopener noreferrer"
															className="portfolio-link"
															title="View Source Code">
															<FiGithub />
															<span className="link-tooltip">Source Code</span>
														</a>
													)}
													<button
														className="portfolio-link view-btn"
														onClick={() => setSelectedProject(item)}
														title="View Project Details">
														<FaSearchPlus />
														<span className="link-tooltip">Details</span>
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="portfolio-info">
										<h3>{item.title}</h3>
										<p className="project-category">{item.category}</p>
										<p className="project-tech">
											{item.technologies?.join(" • ") || "Various technologies"}
										</p>
									</div>
								</div>
							))}
						</div>
					</>
				)}

				{/* Enhanced Project Modal */}
				{selectedProject && (
					<div className="portfolio-modal">
						<div
							className="modal-overlay"
							onClick={() => setSelectedProject(null)}></div>
						<div className="modal-content">
							<button
								className="close-btn"
								onClick={() => setSelectedProject(null)}
								title="Close">
								&times;
							</button>

							<div className="modal-image-container">
								<img
									src={selectedProject.image}
									alt={selectedProject.title}
									className="modal-image"
								/>
							</div>

							<div className="modal-info">
								<h3>{selectedProject.title}</h3>
								<p className="modal-category">
									{selectedProject.category} Project
								</p>

								<div className="modal-section">
									<h4>Project Overview</h4>
									<p>{selectedProject.description}</p>
								</div>

								{selectedProject.features && (
									<div className="modal-section">
										<h4>Key Features</h4>
										<ul className="feature-list">
											{selectedProject.features.map((feature, index) => (
												<li key={index}>{feature}</li>
											))}
										</ul>
									</div>
								)}

								<div className="modal-section">
									<h4>Technologies Used</h4>
									<div className="modal-tags">
										{selectedProject.tags?.map((tag) => (
											<span key={tag} className="tag">
												{tag}
											</span>
										))}
									</div>
								</div>

								<div className="modal-links">
									{selectedProject.demoUrl && (
										<a
											href={selectedProject.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="modal-link demo-link">
											<FiExternalLink /> View Live Demo
										</a>
									)}
									{selectedProject.githubUrl && (
										<a
											href={selectedProject.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="modal-link code-link">
											<FiGithub /> View Source Code
										</a>
									)}
								</div>

								{selectedProject.notes && (
									<div className="modal-section notes">
										<h4>Project Notes</h4>
										<p>{selectedProject.notes}</p>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Portfolio;
