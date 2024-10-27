import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { InfoContext } from "../../context/InfoContext";
import "../partial/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faHome, faUsers, faTv, faStore, faGamepad, faTh, faBell } from '@fortawesome/free-solid-svg-icons';

export function Header() {
    const { user } = useContext(InfoContext);

    return (
        <div className="header-container">
            {/* Logo Facebook và thanh tìm kiếm */}
            <div className="logo-search">
                <div className="logo">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="search-bar">
                    <input className="search-input" placeholder="Tìm kiếm trên Facebook" type="text" />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
            </div>

            {/* Các icon điều hướng */}
            <div className="navigation-icons">
                <div className="icon active">
                    <FontAwesomeIcon icon={faHome} />
                    <div className="active-bar"></div>
                </div>
                <FontAwesomeIcon icon={faUsers} className="icon" />
                <FontAwesomeIcon icon={faTv} className="icon" />
                <FontAwesomeIcon icon={faStore} className="icon" />
                <FontAwesomeIcon icon={faGamepad} className="icon" />
            </div>

            {/* Profile và thông báo */}
            <div className="profile-notifications">
                <div className="icon">
                    <FontAwesomeIcon icon={faTh} />
                </div>
                <div className="icon">
                    <FontAwesomeIcon icon={faFacebookMessenger} />
                </div>
                <div className="icon notification">
                    <FontAwesomeIcon icon={faBell} />
                    <div className="notification-count">3</div>
                </div>
                <div className="profile-picture">
                    <img
                        alt="Profile picture of a person"
                        src="https://storage.googleapis.com/a1aa/image/4TmpbeXpksXKRCjyp6eeVeuEWWaptOKGB1GcEv2n0EamPBpOB.jpg"
                    />
                </div>
            </div>
        </div>
    );
}
