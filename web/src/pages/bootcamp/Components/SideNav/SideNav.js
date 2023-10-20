import React from 'react'
import * as styles from "../sideNav.module.scss"

function SideNav() {
    return (
        <div class={styles.navContainer}>
            <nav aria-label="side-navigation">
                <ul class="nav flex-column">
                <li class="nav-item">
                      <a href="#bootcamp-upcoming-dates" class="nav-link text-uppercase text-body text--micro">Program Dates</a>
                    </li>
                    <li class="nav-item">
                      <a href="#testimonials" class="nav-link text-uppercase text-body text--micro">Hear From Our Alumni</a>
                    </li>
                    <li class="nav-item">  
                        <a href="#why-awesome-inc-header" class="nav-link text-uppercase text-body text--micro">Why Awesome Inc?</a>
                    </li>
                    <li class="nav-item">
                        <a href="#job-guarantee" class="nav-link text-uppercase text-body text--micro">Job Guarantee</a>
                    </li>
                    <li class="nav-item">
                        <a href="#employers" class="nav-link text-uppercase text-body text--micro">Hiring Partners</a>
                    </li>
                    <li class="nav-item">
                        <a href="#languages" class="nav-link text-uppercase text-body text--micro">Our Tech Stack</a>
                    </li>
                    <li class="nav-item">
                        <a href="#timeline" class="nav-link text-uppercase text-body text--micro">Application Timeline</a>
                    </li>
                    <li class="nav-item">
                        <a href="#cost" class="nav-link text-uppercase text-body text--micro">The Cost</a>
                    </li>
                    <li class="nav-item">
                        <a href="#still-unsure" class="nav-link text-uppercase text-body text--micro">FAQs</a>
                    </li>
                    <li class="nav-item">
                         <a href="" class="nav-link text-uppercase fw-bold text-body text--micro">Apply Now</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav
