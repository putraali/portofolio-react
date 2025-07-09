import { Component } from "react";
import {
	FaEnvelope,
	FaMapMarkerAlt,
	FaLinkedin,
	FaInstagram,
	FaWhatsapp,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Contact.css";

export default class Contact extends Component {
	render() {
		const phoneNumber = "+628966250177"; // Remove spaces and special characters for links
		const emailAddress = "putraaliperdana@gmail.com";

		return (
			<section id="contact" className="contact-section py-5">
				<div className="container">
					<div className="section-header text-center mb-5">
						<h2 className="display-4 fw-bold">Get In Touch</h2>
						<div className="title-underline mx-auto"></div>
						<p className="lead mt-3">
							Have a project in mind or want to discuss opportunities?
						</p>
					</div>

					<div className="row g-4">
						{/* Contact Information */}
						<div className="col-lg-5">
							<div className="contact-info p-4 p-lg-5 h-100">
								<h3 className="h4 mb-4">Contact Information</h3>

								{/* Phone - Click to WhatsApp */}
								<a
									href={`https://wa.me/${phoneNumber}`}
									target="_blank"
									rel="noopener noreferrer"
									className="contact-link">
									<div className="contact-item d-flex mb-4">
										<div className="contact-icon me-3">
											<FaWhatsapp className="text-success fs-4" />
										</div>
										<div>
											<h4 className="h5 mb-1">Phone/WhatsApp</h4>
											<p className="mb-0">+62 896-6825-01777</p>
										</div>
									</div>
								</a>

								{/* Email - Click to Mail */}
								<a href={`mailto:${emailAddress}`} className="contact-link">
									<div className="contact-item d-flex mb-4">
										<div className="contact-icon me-3">
											<FaEnvelope className="text-primary fs-4" />
										</div>
										<div>
											<h4 className="h5 mb-1">Email</h4>
											<p className="mb-0">putraaliperdana@gmail.com</p>
										</div>
									</div>
								</a>

								{/* Location - Click to Google Maps */}
								<a
									href="https://maps.google.com/?q=Ciamis,Indonesia"
									target="_blank"
									rel="noopener noreferrer"
									className="contact-link">
									<div className="contact-item d-flex mb-4">
										<div className="contact-icon me-3">
											<FaMapMarkerAlt className="text-danger fs-4" />
										</div>
										<div>
											<h4 className="h5 mb-1">Location</h4>
											<p className="mb-0">Ciamis, Indonesia</p>
										</div>
									</div>
								</a>

								<div className="social-links mt-5">
									<h4 className="h5 mb-3">Follow Me</h4>
									<div className="d-flex gap-3">
										<a
											href="https://www.linkedin.com/in/putra-ali-perdana-37166330a/"
											target="_blank"
											rel="noopener noreferrer"
											className="social-link">
											<FaLinkedin className="fs-4" />
										</a>
										<a
											href="https://www.instagram.com/putraaliperdana_22/"
											target="_blank"
											rel="noopener noreferrer"
											className="social-link">
											<FaInstagram className="fs-4" />
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form remains the same */}
						<div className="col-lg-7">
							<div className="contact-form p-4 p-lg-5">
								<h3 className="h4 mb-4">Send Me a Message</h3>
								<form>
									<div className="row g-3">
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="name" className="form-label">
													Name
												</label>
												<input
													type="text"
													className="form-control"
													id="name"
													placeholder="Your Name"
													required
												/>
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label htmlFor="email" className="form-label">
													Email
												</label>
												<input
													type="email"
													className="form-control"
													id="email"
													placeholder="Your Email"
													required
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group">
												<label htmlFor="subject" className="form-label">
													Subject
												</label>
												<input
													type="text"
													className="form-control"
													id="subject"
													placeholder="Subject"
													required
												/>
											</div>
										</div>
										<div className="col-12">
											<div className="form-group">
												<label htmlFor="message" className="form-label">
													Message
												</label>
												<textarea
													className="form-control"
													id="message"
													rows="5"
													placeholder="Your Message"
													required></textarea>
											</div>
										</div>
										<div className="col-12">
											<button
												type="submit"
												className="btn btn-primary btn-lg px-4">
												Send Message
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
