import "./about.css";
import webdev from "../../img/webdev.jpg";
import pythoncert from "../../img/pythoncert.png";

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
						It is a long established fact that a reader will be distracted by
						the readable content.
					</p>
					<p className="about_context">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
					</p>
                    <div className="about_pythoncert">
                        <img src={pythoncert} alt="" className="pythoncert_img" />
                        <div className="cert_texts">
                            <h4 className="cert_title">Introduction to Python Programming 2021</h4>
                            <p className="cert_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, accusantium.</p>
                        </div>
                    </div>
                    
				</div>
			</div>
		);
}

export default About