import { useState } from "react";
import "../styles/Navbar.css";
import { FaBars } from "react-icons/fa";

function Navbar() {
	const [statusTampil, setStatusTampil] = useState("");

	function tampilMenu() {
		if (statusTampil == "") {
			setStatusTampil("tampil");
		} else {
			setStatusTampil("");
		}
	}

	return (
		<nav className="navbar-professional">
			<div className="nav-container">
				<div className="nav-logo">
					<a href="#home">PORTOFOLIO</a>
				</div>

				<button className="nav-toggle" onClick={tampilMenu}>
					<FaBars />
				</button>

				<div className={`nav-menu ${statusTampil}`} onClick={tampilMenu}>
					<ul className="nav-list">
						<li className="nav-item">
							<a href="#home" className="nav-link">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a href="#about" className="nav-link">
								About
							</a>
						</li>
						<li className="nav-item">
							<a href="#portfolio" className="nav-link">
								Project
							</a>
						</li>
						<li className="nav-item">
							<a href="#contact" className="nav-link">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
		
	);
}

export default Navbar;
