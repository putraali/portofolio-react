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
					<h2 className="section-title">Projects</h2>
					<div className="title-underline"></div>
					<p className="section-subtitle">
						A collection of my recent design and development projects with
						detailed information
					</p>
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
										<h3>{item.title}</h3>
										<p className="short-description">
											{item.shortDescription ||
												item.description.substring(0, 100) + "..."}
										</p>
										<div className="tech-tags">
											{item.tags?.slice(0, 3).map((tag) => (
												<span key={tag} className="tech-tag">
													{tag}
												</span>
											))}
										</div>
									</div>
									<div className="portfolio-links">
										{item.demoUrl && (
											<a
												href={item.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="portfolio-link"
												title="Live Demo">
												<FiExternalLink />
											</a>
										)}
										{item.githubUrl && (
											<a
												href={item.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="portfolio-link"
												title="View Code">
												<FiGithub />
											</a>
										)}
										<button
											className="portfolio-link view-btn"
											onClick={() => setSelectedProject(item)}
											title="View Details">
											<FaSearchPlus />
										</button>
									</div>
								</div>
							</div>
							<div className="portfolio-info">
								<h3>{item.title}</h3>
								<p className="portfolio-category">{item.category}</p>
								<p className="portfolio-date">{item.date}</p>
							</div>
						</div>
					))}
				</div>

				{/* Project Modal */}
				{selectedProject && (
					<div className="portfolio-modal">
						<div className="modal-content">
							<button
								className="close-btn"
								onClick={() => setSelectedProject(null)}>
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
								<div className="project-meta">
									<span className="project-category">
										{selectedProject.category}
									</span>
									<span className="project-date">{selectedProject.date}</span>
								</div>
								<div className="project-description">
									<h4>Project Overview</h4>
									<p>{selectedProject.description}</p>

									{selectedProject.features && (
										<>
											<h4>Key Features</h4>
											<ul className="feature-list">
												{selectedProject.features.map((feature, index) => (
													<li key={index}>{feature}</li>
												))}
											</ul>
										</>
									)}

									{selectedProject.challenges && (
										<>
											<h4>Challenges & Solutions</h4>
											<p>{selectedProject.challenges}</p>
										</>
									)}
								</div>
								<div className="modal-tags">
									<h4>Technologies Used</h4>
									<div className="tags-container">
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
											<FiExternalLink /> Live Demo
										</a>
									)}
									{selectedProject.githubUrl && (
										<a
											href={selectedProject.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="modal-link code-link">
											<FiGithub /> View Code
										</a>
									)}
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
