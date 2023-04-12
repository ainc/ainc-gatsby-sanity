import React from "react";

import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from "react-icons/ai";
import { Container, Row, Col, Image } from "react-bootstrap";


const SocialMediaIcons = () => {
    return (
        <div>
            <ul>
                <li>
                    <a href="https://twitter.com/awesomeinclex">
                        <AiFillTwitterSquare />
                    </a>
                </li>
                <li>
                <a href="https://www.facebook.com/awesomeinclex">
                    <AiFillFacebook />
                </a>
                </li>
                <li>
                <a href="https://www.linkedin.com/school/awesome-inc/">
                    <AiFillLinkedin />
                </a>
                </li>
                <li>
                <a href="https://www.instagram.com/awesomeinclex/">
                    <AiFillInstagram />
                </a>
                </li>
                <li>
                <a href="https://www.youtube.com/user/AincTelevision/featured">
                    <AiFillYoutube />
                </a>
                </li>
            </ul>
        </div>
    );
};

export default SocialMediaIcons;