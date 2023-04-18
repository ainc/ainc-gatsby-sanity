import React from "react";

import { AiFillFacebook, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { Container, Row, Col, Image } from "react-bootstrap";


const SocialMediaIcons = ({text, link}) => {
    console.log(text, link);
    const urlText = encodeURIComponent(text)
    const urlLink = encodeURIComponent(link)
    return (
        <div>
            <a href={`https://twitter.com/intent/tweet?text=${urlText}%0D%0A${urlLink}`} target="_blank" className="d-inline-block ">
                <AiFillTwitterSquare size={35} color="#1C9BF0" className="rounded-5"/>
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${urlLink}`} target="_blank" className="d-inline-block">
                <AiFillFacebook size={35} color="#1877F2" className="rounded-5"/>
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${urlLink}`} target="_blank" className="d-inline-block"> {/* the link for linkedIn wont work unitl the site is hosted*/}
                <AiFillLinkedin size={35} color="#007BB5" className="rounded-5"/>
            </a>
        </div>
    );
};

export default SocialMediaIcons;