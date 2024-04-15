import React from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import BrandButton from '../../../../components/UI/BrandButton/BrandButton';
import * as styles from '../applyform.module.scss';
import Subtitle from '../../../../components/UI/Subtitle/Subtitle';
import { StaticImage } from 'gatsby-plugin-image';

const ApplyForm = () => {
    return(
        <Card className={styles.customCard}>
            <Container>
                <Row >
                    <Col className='d-flex justify-content-left mt-3 text-left'>
                        <Subtitle className='fw-bold'>Change your life today</Subtitle>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-left'>
                        <StaticImage placeholder='blurred' src='../../../../images/bootcamp/Check.jpg' style={{height: '25px'}} className='ml-1'/>
                        <p className='mx-2 mb-0'>100% Job Guarantee or your money back</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-left'>
                        <StaticImage placeholder='blurred' src='../../../../images/bootcamp/Check.jpg' style={{height: '25px'}}/>
                        <p className='mx-2 mb-0'>Access to full-time career coach</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-left'>
                        <StaticImage placeholder='blurred' src='../../../../images/bootcamp/Check.jpg' style={{height: '25px'}}/>
                        <p className='mx-2 mb-0'>Get a job in 3 months on average</p>
                    </Col>
                </Row>
                <form action="https://forms.zohopublic.com/virtualoffice9155/form/BootcampApplication/formperma/H7RiVteQOsrAh4ytlS0k9R-UO5McXKE5_FvNKrYe6JU/htmlRecords/submit" name="form" id="form" method="POST" acceptCharset="UTF-8" encType="multipart/form-data" siq_id="autopick_1809">

                {/*<!-- Do not remove this code. -->*/}
                <input type="hidden" name="zf_referrer_name" defaultValue="" />{/*<!-- To Track referrals , place the referrer name within the " " in the above hidden input field -->*/}
                <input type="hidden" name="zf_redirect_url" defaultValue="" />{/*<!-- To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field -->*/}
                <input type="hidden" name="zc_gad" defaultValue="undefined" />{/*<!-- If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM -->*/}


                <div className="form-group mt-3 mb-3">
                    <input type="text" fieldtype="7" maxLength="255" name="Name_First" placeholder="First Name" className="form-control input-lg w-100" required="" />
                </div>
                <div className="form-group mt-3 mb-3">
                    <input type="text" fieldtype="7" maxLength="255" name="Name_Last" placeholder="Last Name" className="form-control input-lg w-100" required="" />
                </div>

                <div className="form-group mt-3 mb-3">
                    <input type="email" fieldtype="9" maxLength="100" name="Email" placeholder="Email Address" className="form-control input-lg w-100" required="" />
                </div>

                <div className="form-group mb-3 mt-3">
                    <input type="number" compname="PhoneNumber" name="PhoneNumber_countrycode" placeholder='Phone Number' 
                    phoneformat="1" iscountrycodeenabled="false" maxLength="20" defaultValue="" fieldtype="11" id="international_PhoneNumber_countrycode" className="form-control input-lg w-100" />
                </div>

                <div className="form-group mt-3 mb-3">
                    <label htmlFor="Lead Source" className='d-flex justify-content-left mx-1'>How did you hear about us?</label>
                    <select className="form-control input-lg w-100" name="Radio" required="">
                        <option defaultValue="-Select-">Please Select...</option>
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
                <Row className='mt-3 mx-1' style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <BrandButton type='submit'>Apply Now</BrandButton>
                </Row>
                </form>
                <Row className='d-flex justify-content-center align-items-center my-3'>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <StaticImage placeholder='blurred' src='../../../../images/bootcamp/david.jpg' className='rounded-circle' style={{width: '50px'}}/>
                        <StaticImage placeholder='blurred' src='../../../../images/bootcamp/brett.jpg' className='rounded-circle' style={{width: '50px'}}/>
                        <StaticImage placeholder='blurred' src='../../../../images/bootcamp/melo.jpg' className='rounded-circle' style={{width: '50px'}}/>
                    </Col>
                    <Col className='d-flex justify-content-center'>
                        <p className='fw-bold mb-0'>Join 175+ students</p>
                    </Col>
                </Row>
            </Container>
        </Card>
    )
}

export default ApplyForm;