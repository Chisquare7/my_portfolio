import "./about.css";
import webdev from "../../img/webdev.jpg";
import pythoncert from "../../img/pythoncert.png";
import awscert from "../../img/awscert.png";

const About = () => {
	return (
		<div className="about">
			<div className="about_left">
				<div className="about_card big"></div>
				<div className="about_card">
					<img src={webdev} alt="" className="about_image" />
				</div>
			</div>
			<div className="about_right">
				<h1 className="about_title">About Me</h1>
				<p className="about_content">
					I'm a Web Developer with professional experience as a Quality Auditor,
					Machine Learning. I'm passionate about web development and very open
					to learn more.
				</p>
				<p className="about_content">
					With every line of code, I strive to build immersive and beautiful web
					through user-centric design.
				</p>
				<p className="about_content remove_text">
					I enjoy building everything from small business sites to rich
					interactive web applications. If you are a business seeking a web
					presence or an employer looking to hire, you can get in touch with me.
				</p>
				<div className="about_cert">
					<img src={pythoncert} alt="pythoncert" className="cert_img" />
					<div className="cert_texts">
						<h4 className="cert_title">
							Introduction to Python Programming 2021
						</h4>
						<p className="cert_desc">
							Certificate awarded for participating in Basic Python programming
							course.
						</p>
					</div>
				</div>
				<div className="about_cert">
					<img src={awscert} alt="awscert" className="cert_img" />
					<div className="cert_texts">
						<h4 className="cert_title">
							AWS Machine Learning Foundations Course 2021
						</h4>
						<p className="cert_desc">
							Certificate awarded for participating in AWS Machine Learning
							Foundations Course in AWS Machine Learning Scholarship.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
