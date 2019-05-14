import React from 'react';
import '../../assests/base/main.scss';
//import '../../img/nat-1.jpg' ;
import nat1 from'../../img/nat-1-large.jpg';
import nat2 from'../../img/nat-2-large.jpg';
import nat3 from'../../img/nat-3-large.jpg';

const About = () => {
	return (
		<section className="section-about">

			<div className="u-center-text u-margin-bottom-big">
				<h2 className="heading-secondary">
					Exciting tours for adventrous people.
				</h2>
			</div>

			<div className="row">
				<div className="col-1-of-2">
					<h3 className="heading-tertiary u-margin-bottom-small">
						You're going to fall in love with nature
					</h3>
					<p className="paragraph">
						Doloribus earum itaque inventore repudiandae.Eos dolorum nihil dicta dolor non eaque voluptates delectus est. Voluptates at nam distinctio veritatis.
					</p>

					<h3 className="heading-tertiary u-margin-bottom-small">
						Live adventures like you never had beforeas
					</h3>
					<p className="paragraph">
						Sit et omnis et sit. Quis non voluptatibu inventore est pariatur officia.
					</p>

					<a href="no-script-url" className="btn-text">Learn More &rarr;</a>
				</div>
				<div className="col-1-of-2">
					<div className="composition">
						<img src={nat1} alt="Photo1" className="composition_photo composition_photo--p1"/>
						<img src={nat2} alt="Photo2" className="composition_photo composition_photo--p2"/>
						<img src={nat3} alt="Photo3" className="composition_photo composition_photo--p3"/>
					</div>
					</div>
			</div>

		</section>
	);
};

export default About;

