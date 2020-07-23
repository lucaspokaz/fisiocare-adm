import React, { Fragment } from 'react';
import man from '../../../assets/images/dashboard/user.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser as farUser, faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock, faCogs, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const UserMenu = () => {
	return (
		<Fragment>
			<li className="onhover-dropdown">
				<div className="media align-items-center">
					<img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={man} alt="header-user" />
					<div className="dotted-animation">
						<span className="animate-circle"></span>
						<span className="main-circle"></span>
					</div>
				</div>
				<ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
					<li><a href="#!"><FontAwesomeIcon icon={farUser} /> Edit Profile </a></li>
					<li><a href="#!"><FontAwesomeIcon icon={farEnvelope} />Inbox</a></li>
					<li><a href="#!"><FontAwesomeIcon icon={faLock} />Lock Screen</a></li>
					<li><a href="#!"><FontAwesomeIcon icon={faCogs} />Settings</a></li>
					<li><a href="#!"><FontAwesomeIcon icon={faSignOutAlt} /> Log out</a></li>
				</ul>
			</li>
		</Fragment>
	);
};


export default UserMenu;