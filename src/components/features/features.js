import React from 'react';
import '../../assests/base/main.scss';

const Features = () => {
	return (
		<section className="section-features">
			<div className="row">
				<div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box_icon icon-basic-world" />
						<h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
						<p className="feautre-box_test">
							Reprehed aut voluptas mollitus temporibus est quas officia. Rerum excepturi et rerum aut maiores harum
							sint nobis sunt. Architecto sit nemo sit.
						</p>
					</div>
				</div>

				<div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box_icon icon-basic-compass" />
						<h3 className="heading-tertiary u-margin-bottom-small">Meet Nature</h3>
						<p className="feautre-box_test">
							Reprehed aut voluptas mollitus temporibus est quas officia. Rerum excepturi et rerum aut maiores harum
							sint nobis sunt. Architecto sit nemo sit.
						</p>
					</div>
				</div>

				<div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box_icon icon-basic-map" />
						<h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
						<p className="feautre-box_test">
							Reprehed aut voluptas mollitus temporibus est quas officia. Rerum excepturi et rerum aut maiores harum
							sint nobis sunt. Architecto sit nemo sit.
						</p>
					</div>
				</div>

				<div className="col-1-of-4">
					<div className="feature-box">
						<i className="feature-box_icon icon-basic-heart" />
						<h3 className="heading-tertiary u-margin-bottom-small">Feel your heart</h3>
						<p className="feautre-box_test">
							Reprehed aut voluptas mollitus temporibus est quas officia. Rerum excepturi et rerum aut maiores harum
							sint nobis sunt. Architecto sit nemo sit.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
