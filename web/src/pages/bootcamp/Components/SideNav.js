import React from 'react'
import * as styles from "./SideNav.module.scss"

function SideNav() {
    return (
        <div class={styles.navContainer}>
            <nav>
                <ul class="nav flex-column">
                    <li class="nav-item">
                      <a href="#testimonials" class="nav-link text-uppercase text-body text--tiny">Hear From Our Alumni</a>
                    </li>
                    <li class="nav-item">  
                        <a href="#why-awesome-inc" class="nav-link text-uppercase text-body text--tiny">Why Awesome Inc?</a>
                    </li>
                    <li class="nav-item">
                        <a href="#job-guarantee" class="nav-link text-uppercase text-body text--tiny">Job Guarantee</a>
                    </li>
                    <li class="nav-item">
                        <a href="#employers" class="nav-link text-uppercase text-body text--tiny">Hiring Partners</a>
                    </li>
                    <li class="nav-item">
                        <a href="#languages" class="nav-link text-uppercase text-body text--tiny">Our Tech Stack</a>
                    </li>
                    <li class="nav-item">
                        <a href="#timeline" class="nav-link text-uppercase text-body text--tiny">Application Timeline</a>
                    </li>
                    <li class="nav-item">
                        <a href="#cost" class="nav-link text-uppercase text-body text--tiny">The Cost</a>
                    </li>
                    <li class="nav-item">
                        <a href="#still-unsure" class="nav-link text-uppercase text-body text--tiny">FAQs</a>
                    </li>
                    <li class="nav-item">
                         <a href="/bootcamp/apply" class="nav-link text-uppercase fw-bold text-body text--tiny">Apply Now</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default SideNav
