import { useState } from "react";
import { portfolioList } from "../data/DataPortfolio";
import "../styles/Portfolio.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { FaSearchPlus } from "react-icons/fa";

function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("All");
	const [selectedProject, setSelectedProject] = useState(null);

	// Add category to your DataPortfolio items if not already present
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
					<p className="section-subtitle">
						A collection of my recent design and development projects
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
									<div className="portfolio-links">
										{item.demoUrl && (
											<a
												href={item.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="portfolio-link">
												<FiExternalLink />
											</a>
										)}
										{item.githubUrl && (
											<a
												href={item.githubUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="portfolio-link">
												<FiGithub />
											</a>
										)}
										<button
											className="portfolio-link view-btn"
											onClick={() => setSelectedProject(item)}>
											<FaSearchPlus />
										</button>
									</div>
								</div>
							</div>
							<div className="portfolio-info">
								<h3>{item.title}</h3>
								<p>{item.category}</p>
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
							<img src={selectedProject.image} alt={selectedProject.title} />
							<div className="modal-info">
								<h3>{selectedProject.title}</h3>
								<p>{selectedProject.description}</p>
								<div className="modal-links">
									{selectedProject.demoUrl && (
										<a
											href={selectedProject.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="modal-link">
											<FiExternalLink /> Live Demo
										</a>
									)}
									{selectedProject.githubUrl && (
										<a
											href={selectedProject.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="modal-link">
											<FiGithub /> View Code
										</a>
									)}
								</div>
								<div className="modal-tags">
									{selectedProject.tags?.map((tag) => (
										<span key={tag} className="tag">
											{tag}
										</span>
									))}
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