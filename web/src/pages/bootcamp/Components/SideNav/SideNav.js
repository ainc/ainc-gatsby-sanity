import React, {useEffect} from 'react'
import * as styles from "../sideNav.module.scss"

function SideNav() {
    useEffect(() => {
        const handleScroll = () => {
            const bootcampSection = document.getElementById('two-buttons');
            const sideNav = document.querySelector(`.${styles.navContainer}`);
            
            // Get the position of the bootcamp section relative to the viewport
            const bootcampSectionPosition = bootcampSection.getBoundingClientRect().top;

            // If the bootcamp section is in the viewport
            if (bootcampSectionPosition < window.innerHeight) {
                // Show the side nav
                sideNav.classList.add(styles.show);
            } else {
                // Hide the side nav
                sideNav.classList.remove(styles.show);
            }
        };

        // Attach scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={styles.navContainer}>
            <nav aria-label="side-navigation">
                <ul className="nav flex-column">
                <li className="nav-item">
                      <a href="#bootcamp-upcoming-dates" className="nav-link text-uppercase text-body text--micro">Program Dates</a>
                    </li>
                    <li className="nav-item">
                      <a href="#testimonials" className="nav-link text-uppercase text-body text--micro">Hear From Our Alumni</a>
                    </li>
                    <li className="nav-item">  
                        <a href="#why-awesome-inc-header" className="nav-link text-uppercase text-body text--micro">Why Awesome Inc?</a>
                    </li>
                    <li className="nav-item">
                        <a href="#job-guarantee" className="nav-link text-uppercase text-body text--micro">Job Guarantee</a>
                    </li>
                    <li className="nav-item">
                        <a href="#employers" className="nav-link text-uppercase text-body text--micro">Hiring Partners</a>
                    </li>
                    <li className="nav-item">
                        <a href="#languages" className="nav-link text-uppercase text-body text--micro">Our Tech Stack</a>
                    </li>
                    <li className="nav-item">
                        <a href="#timeline" className="nav-link text-uppercase text-body text--micro">Application Timeline</a>
                    </li>
                    <li className="nav-item">
                        <a href="#cost" className="nav-link text-uppercase text-body text--micro">The Cost</a>
                    </li>
                    <li className="nav-item">
                        <a href="#still-unsure" className="nav-link text-uppercase text-body text--micro">FAQs</a>
                    </li>
                    <li className="nav-item">
                         <a href="#header" className="nav-link text-uppercase fw-bold text-body text--micro">Apply Now</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav
