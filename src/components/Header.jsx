import Ali from "../assets/Ali.jpg";
import "../styles/Header.css";

function Header() {
	return (
		<header id="home" className="header-section py-5">
			<div className="container">
				<div className="row align-items-center gx-5">
					{/* Avatar Column - Square Style */}
					<div className="col-lg-4 col-md-5 text-center text-md-start mb-4 mb-md-0">
						<div className="square-avatar-container mx-auto mx-md-0 shadow-lg">
							<img
								src={Ali}
								alt="Putra Ali Perdana"
								className="square-profile-avatar img-fluid"
							/>
							<div className="avatar-overlay"></div>
						</div>
					</div>

					{/* Content Column */}
					<div className="col-lg-8 col-md-7">
						<div className="header-content ps-md-5">
							<h1 className="display-4 fw-bold mb-3 text-gradient">
								Putra Ali Perdana
							</h1>

							<div className="position-relative mb-4">
								<h2 className="h3 text-uppercase text-primary mb-3">
									Web Frontend Development & UI/UX Designer
								</h2>
								<div className="title-underline"></div>
							</div>

							<p className="lead mb-4 text-muted">
								Crafting exceptional digital experiences with innovative design
								solutions that blend aesthetics with functionality.
							</p>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
