import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faDownload, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Notification = props => {
	return (
		<Fragment>
			<div>
				<ul className="notification-dropdown onhover-show-div p-0">
					<li>Notification <span className="badge badge-pill badge-primary pull-right">3</span></li>
					<li>
						<div className="media">
							<div className="media-body">
								<h6 className="mt-0">
									<span><FontAwesomeIcon icon={faShoppingBasket} /></span>
									Your order ready for Ship..!
                </h6>
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
							</div>
						</div>
					</li>
					<li>
						<div className="media">
							<div className="media-body">
								<h6 className="mt-0 txt-success">
									<span><FontAwesomeIcon icon={faDownload} /></span>
									Download Complete
								</h6>
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
							</div>
						</div>
					</li>
					<li>
						<div className="media">
							<div className="media-body">
								<h6 className="mt-0 txt-danger">
									<span><FontAwesomeIcon icon={faExclamationCircle} /></span>
									250 MB trash files
								</h6>
								<p className="mb-0">Lorem ipsum dolor sit amet, consectetuer.</p>
							</div>
						</div>
					</li>
					<li className="txt-dark"><a href="#!">Ver tudo</a></li>
				</ul>
			</div>
		</Fragment>
	);
};

export default Notification;