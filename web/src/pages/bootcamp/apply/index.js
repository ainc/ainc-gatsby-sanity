import React from "react";
import { graphql } from "gatsby";
import Layout from "../../../components/Layout/Layout";
import { Container, Col, Row, Image } from "react-bootstrap";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import * as styles from '../bootcamp.module.scss';


export const query = graphql`
query ApplyQuery {
    sanityBootcamp {
      cohort
      abbreviation
      finalApplication(formatString: "")
    }
  }`

const BootcampApplyPage = ({data}) => {
    const applicationDeadlineDate= new Date(data.sanityBootcamp.finalApplication).toLocaleDateString('en-us', {weekday: "long", month:"long", day: 'numeric'})
    return (
        <Layout>
            <Title className='text-center mt-3 mb-3'>WEB DEVELOPER BOOTCAMP APPLICATION</Title>
            <div style={{display: 'flex', justifyContent: 'center',}}>
                <Subtitle className='px-lg-5 py-5' style={{textAlign: 'left', width: '55%', fontSize: '1.25rem'}}> HOME / LEARN / ADULTS / BOOTCAMP / <span style={{color: '#a21b22'}}>APPLY</span></Subtitle>
            </div>
            <form action="https://forms.zohopublic.com/virtualoffice9155/form/BootcampApplication/formperma/H7RiVteQOsrAh4ytlS0k9R-UO5McXKE5_FvNKrYe6JU/htmlRecords/submit" name="form" id="form" method="POST" acceptCharset="UTF-8" encType="multipart/form-data" siq_id="autopick_1809">

	        {/*<!-- Do not remove this code. -->*/}
            <input type="hidden" name="zf_referrer_name" defaultValue="" />{/*<!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->*/}
            <input type="hidden" name="zf_redirect_url" defaultValue="" />{/*<!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->*/}
            <input type="hidden" name="zc_gad" defaultValue="undefined" />{/*<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->*/}
          
            {/*<!-- Do not remove this code. -->*/}
            <legend className='' style={{borderBottom: '1px solid #e5e5e5', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{textAlign: 'left', width: '50%', fontSize: '1.25rem'}}>
                Fill out this form to start your application process
            </div>
            <div class="button__info-blurb" style={{textAlign: 'left', width: '50%', fontSize: '1rem'}}>
                <p className='text-left' style={{fontSize: '1rem'}}>Pay nothing until you land a job! <a href="#cost" className={styles.specialLink}>See how here</a></p>
            </div>
            <br />
            <small style={{textAlign: 'left', width: '50%', fontSize: '1rem'}}>Application Deadline for cohort {data.sanityBootcamp.cohort} ({data.sanityBootcamp.abbreviation}): <b>{applicationDeadlineDate}</b></small>
        
            </legend>

            <div className="form-group mt-3 mb-3" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
    	        <label style={{textAlign: 'left', width: '49%'}} htmlFor="First Name">First Name</label>
                <input type="text" fieldtype="7" maxLength="255" name="Name_First" placeholder="First Name" class="form-control input-lg w-50" required="" />
            </div>
            <div class="form-group mt-3 mb-3" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
    	        <label htmlFor="Last Name" style={{textAlign: 'left', width: '49%'}}>Last Name</label>
                <input type="text" fieldtype="7" maxLength="255" name="Name_Last" placeholder="Last Name" class="form-control input-lg w-50" required="" />
            </div>

            <div class="form-group mt-3 mb-3" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <label htmlFor="Email" style={{textAlign: 'left', width: '49%'}}>Email</label>
                <input type="email" fieldtype="9" maxLength="100" name="Email" placeholder="Email Address" class="form-control input-lg w-50" required="" />
            </div>

            <div class="form-group mb-3 mt-3" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
    	        <label htmlFor="Phone" style={{textAlign: 'left', width: '49%'}}>Phone</label>
                <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneformat="1" iscountrycodeenabled="false" maxLength="20" defaultValue="" fieldtype="11" id="international_PhoneNumber_countrycode" class="form-control input-lg w-50" />
            </div>

            <div class="form-group mt-3 mb-3" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
    	        <label htmlFor="Lead Source" style={{textAlign: 'left', width: '49%'}}>How did you find out about the Bootcamp?</label>
		        <select class="form-control input-lg w-50" name="Radio" required="">
                    <option defaultValue="-Select-">-Select-</option>
			        <option defaultValue="Advertisement">Advertisement</option>
			        <option defaultValue="News Article">News Article</option>
			        <option defaultValue="Signage / Building">Signage / Building</option>
			        <option defaultValue="Google Search">Google Search</option>
                    <option defaultValue="Referral / Word of Mouth">Referral / Word of Mouth</option>
                    <option defaultValue="Event">Event</option>
                    <option defaultValue="Facebook">Facebook</option>
                    <option defaultValue="Other">Other</option>
		        </select>
            </div>

            <div class="form-group mb-3 mt-3" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
    	        <label htmlFor="LEADCF26" style={{textAlign: 'left', width: '49%'}}>If referred, who told you about the Bootcamp?</label>
                <input type="text" maxLength="255" name="SingleLine1" defaultValue="" fieldtype="1" placeholder="Referred by..." class="form-control input-lg w-50" />
            </div>
            <div className='mt-3' style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <BrandButton type='submit'>Submit</BrandButton>
            </div>
	        </form>
        <section className = {`${styles.cost} py-5`} id="cost">
            <Container> 
                <Row>
                    <Col>
                    <Row className="mt-2 mb-5">
                        <Title style={{color:"#ED3742"}} className="text--huge text-center mt-4 ">The Cost</Title>
                </Row>
                    <Row>
                        <Col className={`${styles.costCol} text-center`}>
                        <Row>
                            <div className="text-center">
                            <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/cost.png').default} alt="Piggy Bank" />
                            </div>
                        </Row>
                        <Row>
                            <Title className="text-center py-4 fs-3 text--medium">Income Share Agreement</Title>
                        </Row>
                        <Row className="mx-5">
                            <p  style={{fontSize:"0.75rem"}} className="text-justify">
                            Fund your future with an Income Share Agreement. We're 
                            partnered with industry-leading ISA provider Meratas to 
                            allow students to enroll in our full-time program with no 
                            up front tuition costs. ISA recipients only pay when they've 
                            landed a job making $40,000/year or more. Want to know 
                            more? Schedule a call today!
                            </p>
                    </Row>
                        </Col>
                        <Col>
                        <Row className="me-5">
                            <div className="text-center ms-3">
                            <img style={{maxWidth: "100px"}} src={require('/src/images/bootcamp/Money_in_Hand.svg').default} alt="Moeny In Hand" />
                            </div>
                        </Row>
                        <Row className="me-5">
                            <Title className="text-center py-5 ms-3 text--medium">Up-Front Payment</Title>
                        </Row>
                        <Row className="mx-5">
                            <p style={{fontSize:"0.75rem"}} className="text-justify ">
                            Students who choose to pay tuition up front are offered a discounted tuition rate of $13,500.
                            </p>
                        </Row>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
      </section>
        </Layout>
    );
};

export default BootcampApplyPage;