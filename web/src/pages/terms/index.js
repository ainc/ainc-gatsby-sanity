import * as React from 'react';
import Layout from '../../components/Layout/Layout';
import { Container, Row, Col, CarouselItem } from 'react-bootstrap';
import SEO from '../../components/seo';
import Title from '../../components/UI/Title/Title';
import Subtitle from '../../components/UI/Subtitle/Subtitle';
import "./terms.scss";

const TermsPage = ({ data }) => {

  return (
    <Layout>
      <SEO/>
    <Container>
        <section className="col-sm-offset-2">
            <Title className="my-4">Terms of Service</Title>
            <p className="par">These Awesome Inc Terms of Use (“Terms”) govern the use of Awesome Ventures, LLC’s (“Awesome Inc”) 
            Awesome Inc website, located at http://www.awesomeinc.org, information, text, curricula, apps and software.<br/>
            PLEASE READ THESE TERMS CAREFULLY BEFORE ACCESSING OR USING THE SERVICES. THESE TERMS CONTAIN IMPORTANT INFORMATION 
            AND LIMITATIONS REGARDING YOUR LEGAL RIGHTS, INCLUDING, WITHOUT LIMITATION, A MANDATORY ARBITRATION CLAUSE AND A WAIVER 
            OF CLAIMS, INCLUDING CLASS ACTION CLAIMS. BY ACCESSING AND USING THE SERVICES, YOU REPRESENT THAT YOU HAVE READ, 
            UNDERSTOOD, ACCEPT AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT UNDERSTAND THESE TERMS, DO NOT AGREE TO BE 
            BOUND BY THESE TERMS, OR ARE NOT LEGALLY QUALIFIED TO ENTER INTO CONTRACTS, YOU MUST NOT USE THE SERVICES AND MUST LEAVE THE WEBSITE.<br/>
            These Terms are subject to change. If you continue to access and use the Services after these Terms change, you agree to be bound by such 
            changes. Awesome Inc will take reasonable steps to notify Users (defined below) of any changes to these Terms. However, Users are responsible 
            for regularly reviewing the Terms. Please check these Terms for changes periodically.<br/>
            Please note that certain Services will have additional terms and conditions (e.g., pricing and payment terms) that apply solely to those 
            particular Services (“Supplemental Terms”). These Supplemental Terms, which are disclosed on the product page for the applicable Service 
            (and/or at the point of sale and on the electronic credit card authorization form), are hereby expressly incorporated into these Terms and, 
            in the event of a conflict, prevail over these Terms. You must also agree to such Supplemental Terms before you will be permitted to access and use such Services.<br/>
            Certain Services are provided for a fee or other charge. If you elect to use paid Services, you agree to the pricing and payment terms and any other Supplemental 
            Terms associated with those paid Services. Awesome Inc may also add new Services for additional fees and charges, or amend fees and charges for existing Services. 
            Always carefully review terms and conditions set forth in these Terms and on the relevant product page, at the point of sale, and on any electronic credit card 
            authorization form prior to signing up for any Services.<br/>
            You must be of legal age to form a binding contract to accept these Terms. A parent or a legal guardian must accept these Terms on behalf of a minor (anyone under 18 years of age).
            These Terms apply to all Users of the Services. For purposes of these Terms, “Users” include anyone who browses the Services, registers with GitHub for an ID and password to use 
            and access the Services, and anyone who visits, accesses and/or uses the Services through any means.</p>
            <Subtitle>Privacy</Subtitle>
            <p className="par">Your privacy is important to Awesome Inc. By accessing and using the Services, you agree to the collection, use, storage, and disclosure of your personal 
              information as set forth in our Privacy Policy. The Privacy Policy explains how we treat your personal data and is incorporated into these Terms by reference. 
              Please read the Privacy Policy carefully.</p>
            <Subtitle>Your Account</Subtitle>
            <p className="par">In order to use Awesome Inc, you must have a free GitHub account. GitHub is not affiliated with Awesome Inc and has its own Terms of Service and Privacy Policy. 
            You are required to read the GitHub Terms of Service and Privacy Policy prior to creating an account on their platform. By connecting to Awesome Inc with your GitHub credentials, 
            you give Awesome Inc permission to access and use your information from GitHub, as permitted by GitHub. You are solely responsible for the security of your GitHub account and for 
            keeping your login credentials and password safe. You understand and agree that all information provided by you must be accurate, current and complete and that you will maintain 
            and update your information as needed. You are solely responsible for the activity that occurs on your account and for monitoring your account for any breach of security or 
            unauthorized use. You must notify Awesome Inc immediately of any breach of security or unauthorized use of your account.<br/>
            Certain aspects of the Services may allow you to store data, such as your projects, research, notes, homework, code, images, etc., on Awesome Inc’s servers. You acknowledge 
            and agree that your storage of any data on Awesome Inc’s servers is at your sole risk. You acknowledge that you do not own the account you use to access the Services and 
            that you do not possess any rights of access or rights to data stored by you or on your behalf by Awesome Inc on its servers. We encourage you to back up any data you 
            deem valuable outside the Awesome Inc servers. All data on Awesome Inc’s servers are subject to deletion, alteration or transfer.<br/>
            NOTWITHSTANDING ANY VALUE ATTRIBUTED TO SUCH DATA BY YOU OR ANY THIRD PARTY, YOU UNDERSTAND AND AGREE THAT ANY DATA, ACCOUNT HISTORY AND ACCOUNT CONTENT RESIDING ON 
            AWESOME INC’S SERVERS, MAY BE DELETED, ALTERED, MOVED OR TRANSFERRED AT ANY TIME FOR ANY REASON IN AWESOME INC’S SOLE DISCRETION, WITH OR WITHOUT NOTICE. AWESOME INC 
            DOES NOT PROVIDE OR GUARANTEE, AND EXPRESSLY DISCLAIMS, ANY VALUE, CASH OR OTHERWISE, ATTRIBUTED TO ANY DATA RESIDING ON AWESOME INC’S SERVERS.</p>
            <h2>User Conduct Policy</h2>
            <p className="par">Awesome Inc respects free speech and expression. However, we want to make sure that all of our Users feel safe and comfortable while using our 
            Services. While we do not routinely screen or monitor User content, we reserve the right to do so. We may remove or edit inappropriate content or activity, or suspend, 
            disable, or terminate a User’s access to all or part of the Services.<br/>
            As a condition of accessing the Services, you agree that you will review and abide by the Awesome Inc Code of Conduct, available here, which is hereby expressly incorporated 
            into these Terms. Additionally, you agree that you will not, directly or indirectly: (a) intimidate, threaten, or harass any other Users; (b) reproduce, duplicate, copy, sell, 
            resell or exploit for any commercial purposes any portion of the Services other than as expressly allowed under these Terms; (c) use Awesome Inc’s name, trademarks, service marks, 
            or other materials in connection with, or to transmit, any unsolicited communications or emails; (d) use any high volume, automated, or electronic means to access the Services 
            (including without limitation robots, spiders or scripts); (e) frame the Services, place pop-up windows over its pages, or otherwise affect the display of its pages; (f) falsely 
            state, impersonate, or otherwise misrepresent your identity, including but not limited to the use of a pseudonym or misrepresenting your affiliations with a person or entity, 
            past or present; (g) force headers or otherwise manipulate identifiers in order to disguise the origin of any communication transmitted through the Services; and/or (h) interfere 
            with or disrupt the Services or servers or networks connected to the Services, or disobey any requirements, procedures, policies or regulations of networks connected to the Services.<br/>
            In addition, you agree that you will not, directly or indirectly, post, upload, or transmit to or otherwise make available through the Services any content, communications, or other information 
            (collectively, “Unauthorized Content”) that: (a) is obscene, fraudulent, pornographic, indecent, or libelous or that defames, abuses, threatens, harasses, or discriminates against others; 
            (b) contains any viruses, Trojan horses, worms, time bombs, cancelbots, or other disabling devices or other harmful components intended to or that may damage, detrimentally interfere with, 
            surreptitiously intercept, or expropriate any system, data, or personal information; (c) you do not have the right to disclose or make available under applicable law or under contractual or 
            fiduciary relationships (such as insider information, or proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements); (d) 
            consists of any high volume, automated, or electronic means to access the Services (including without limitation robots, spiders or scripts); (e) infringes the copyright, patent, trademark, 
            trade secret, right of publicity, or other intellectual property or proprietary right of any third party; (f) violates the rights of other Users of the Services; and/or (g) 
            violates any applicable local, state, national or international law, code, regulation or rule, or otherwise advocates or encourages any illegal activity.<br/>
            You also agree that you will not cheat on any assignments, quizzes or exams, or share solutions to any such assignments, quizzes or exams with other Users. You further agree 
            that you will notify Awesome Inc immediately if you become aware of any other User cheating or otherwise breaching or violating these Terms.</p>
            <h2>Awesome Inc’s Intellectual Property Rights</h2>
            <p className="par">All Services (and related materials) are owned and operated by Awesome Inc. Awesome Inc reserves the right at any time and from time to time to modify, discontinue, temporarily or permanently, 
              the Services, or any part of portion thereof, with or without notice to you. Subject to any applicable refund policy, you agree that Awesome Inc shall not be liable to you or to any third party 
              for any modification, suspension or discontinuance of the Services, or any portion thereof. Nothing in these Terms shall be construed to obligate Awesome Inc to maintain and support the Services, 
              or any part or portion thereof.<br/>
              All content or other materials that constitute, or are available through, the Services, including but not limited to on-line lectures, speeches, video lessons, quizzes, presentation materials, work 
              assignments, programming assignments, programs, code, other images, text, layouts, arrangements, displays, illustrations, documents, materials, audio and video clips, HTML and files (collectively, the “Content”), 
              are the property of Awesome Inc and/or its affiliates or licensors and are protected by copyright, patent and/or other proprietary intellectual property rights under United States and foreign law. Use of Awesome Inc’s 
              Content for any purpose not expressly permitted by these Terms is strictly prohibited.<br/>
              Awesome Inc logos, trademarks and service marks which may appear on the Services (“Marks”), are the property of Awesome Inc and are protected under United States and foreign laws. All other trademarks, service marks 
              and logos used through the Services, with or without attribution, are the trademarks, service marks or logos of their respective owners. In addition, elements of the Services are protected by trade dress and other 
              federal and state intellectual property laws and may not be copied, reproduced, downloaded or distributed in any way in whole or in part without the express written consent of Awesome Inc.<br/>
              Except as otherwise expressly permitted in these Terms, you may not copy, sell, display, reproduce, publish, modify, create derivative works from, transfer, distribute or otherwise commercially exploit in any manner 
              the Services, Awesome Inc website, or any Content. You may not reverse-engineer, decompile, disassemble or otherwise access the source code for any software that may be used to operate the Services. From time to time, 
              Awesome Inc may include software, code, instructions, or other such information in the Content or materials for the Services; any such information is provided on an “as-is” basis for instructional purposes only and is 
              subject to the Disclaimer of Warranties and Limitation of Liability sections below and other terms herein. Any use of such information for commercial purposes is strictly prohibited. Awesome Inc and/or its affiliates 
              and licensors reserve all rights not expressly granted herein to the Services, Awesome Inc website, any Content, and Marks.<br/>
              You may choose to submit comments, feedback or ideas (“Feedback”) about the Services, including without limitation about how to improve the Services. By submitting any Feedback, you agree that your disclosure is 
              gratuitous, unsolicited and without restrictions and will not place Awesome Inc under any fiduciary or other obligations, and that Awesome Inc is free to use the Feedback without any compensation to you, and/or to disclose 
              Feedback on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your Feedback, Awesome Inc does not waive any rights to use similar or related Feedback previously known to Awesome Inc, 
              or developed by its employees, or obtained from sources other than you.</p>
            <Subtitle>License to Use the Services</Subtitle>
            <p className="par">Subject to your compliance with these Terms, Awesome Inc hereby grants you a freely revocable, worldwide, non-exclusive, non-transferable, non-sublicensable limited right and license (a) to access, use and 
            display the Services, including the Educational Content (defined in the section below), at your location solely for your personal, noncommercial use and as permitted hereunder, and (b) to download the Educational Content so that you 
            may exercise the rights granted to you under the section entitled “Creative Commons License” below. You must abide by all copyright notices or restrictions contained on the Services or the Educational Content. You may not delete any 
            attributions or legal or proprietary notices on the Services or the Educational Content.</p>
            <Subtitle>Creative Commons License</Subtitle>
            <p className="par">Awesome Inc hereby grants you a license in and to the Educational Content under the terms of the Creative Commons Attribution-NonCommercial-ShareAlike License (http://creativecommons.org/licenses/by-nc-sa/4.0/) (the “CC License”). 
              As used herein, “Educational Content” means the educational materials made available to you through the Awesome Inc website, including on-line lectures, speeches, video lessons, quizzes, presentation materials, homework assignments, 
              programming assignments, code samples, and other educational materials and tools, but, in any event, specifically excluding any proprietary Awesome Inc materials. The Educational Content may only be used for non-commercial purposes and 
              Users may not sell, profit from, or commercialize Awesome Inc Educational Content or works derived from it. You are free to make derivative works, as long as you give Awesome Inc attribution. If you distribute your derivate works, 
              you must license your works under the same terms as the original Awesome Inc CC License.</p>
            <Subtitle>Copyright Policy and Digital Millennium Copyright Act</Subtitle>
            <p className="par">Awesome Inc respects the intellectual property rights of others, and we expect Users of the Services to do the same. Awesome Inc will respond to notices of alleged copyright infringement that comply with applicable law and are properly 
              provided to Awesome Inc. If you believe that your product or other work has been misrepresented or used in a way that constitutes copyright infringement, or your intellectual property rights have been otherwise violated, please provide 
              Awesome Inc with the following information: (a) an electronic or physical signature of the person authorized to act on behalf of the owner of the product, copyright or other intellectual property interest; (b) a description of the product, 
              work or other intellectual property that you claim has been misrepresented or infringed; (c) a description of where the material that you claim is misrepresenting or infringing your product, work or other intellectual property is located 
              on the Services; (d) your address, telephone number, and email address; (e) a statement by you that you have a good faith belief that the disputed use is not authorized by the owner of the product, work, copyright or intellectual property, 
              or its agent, or applicable law; and (f) a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the product, work, copyright or intellectual property owner or authorized to act on such owner’s behalf.<br/>
              Awesome Inc’s Copyright Agent for notices (and counter-notices) of disputes or claims of copyright or other intellectual property infringement can be reached as follows:</p>
            <div className="card mb-4 menlo-font">
            <h6>Awesome Ventures, LLC</h6>
            <h6>Attn: Webmaster</h6>
            <h6>348 E. Main St.</h6>
            <h6>Lexington, KY 40507</h6>
            <h6>Phone: (859) 960-4600</h6>
            <h6>Email: info@awesomeinc.org</h6>
            </div>
            <p className="par">Awesome Inc reserves the right to remove content alleged to be infringing without prior notice, at its sole discretion, and without liability. 
            In appropriate circumstances, Awesome Inc will also terminate a User’s account if the User is determined to be an infringer.</p>
            <Subtitle>User Content-Management; License Grant; Representations and Warranties</Subtitle>
            <p className="par">Awesome Inc may now, or in the future, permit and provide you with the ability to upload files, User posts and discussions, profile pages, and other content and media for social 
            interaction, or certain information, text, graphics, notes, questions, comments, images, videos or other communications and materials (collectively, “User Content”). Whether or not such User Content is 
            published, Awesome Inc does not guarantee any confidentiality with respect to any submissions.<br/>
            Awesome Inc has no obligation to monitor User Content or other materials, but Awesome Inc reserves the right to remove any User Content at any time and for any reason. Awesome Inc also reserves the right to access, 
            read, preserve, and disclose any information as it reasonably believes is necessary to (a) satisfy any applicable law, regulation, legal process or governmental request, (b) enforce these Terms, including investigation 
            of potential violations hereof, (c) detect, prevent, or otherwise address fraud, security or technical issues, (d) respond to User support requests, or (e) protect the rights, property or safety of Awesome Inc, its Users and the public.<br/>
            You are responsible for evaluating all User Content including for accuracy, completeness, reliability and appropriateness, and bear all risk of using such User Content. You are solely responsible for your User Content and the consequences 
            of posting or publishing it. You understand and agree that you may be exposed to User Content that is inaccurate, objectionable, inappropriate, or otherwise unsuited to your purpose. Awesome Inc will not be liable for any damages that may 
            result from the submission or use of any User Content by you or another User. Awesome Inc may, but is not obligated to, monitor or review any Services and User Content where Users communicate solely with other Users, including but not limited 
            to chat rooms, live chats, bulletin boards, or other User forums, and the content of any such communications. You assume the risk of such communications, and Awesome Inc has no liability related to the content or use of any such communications.<br/>
            Awesome Inc does not claim ownership of any User Content you may submit or make available through its Services. Accordingly, subject to the license granted to Awesome Inc in these Terms, a User will be the sole and exclusive owner of any and all rights, title and interest in and to the User Content.<br/>
            With respect to any User Content you submit to Awesome Inc, or that is otherwise made available to Awesome Inc, you hereby grant Awesome Inc an irrevocable, worldwide, perpetual, royalty-free and non-exclusive license to use, distribute, reproduce, 
            publish, modify, translate, adapt, publicly perform, publicly display and make derivative works of all such User Content through the Services or otherwise exploit the User Content and your name, personal information, voice, and/or likeness as contained 
            in your User Content, in whole or in part, with the right to sublicense such rights (to multiple tiers), for any purpose (including for any commercial purpose) in any media channels (now known or hereafter developed). In addition, by submitting or distributing 
            User Content through the Services, you hereby grant to each User of the Services a non-exclusive royalty-free license to access and use your User Content.<br/>
            You are solely responsible for User Content you post to the Services and the consequences of posting or publishing such User Content. To the extent that you provide any User Content, you represent and warrant that (a) you have all necessary rights, 
            licenses and/or clearances to provide such User Content and permit Awesome Inc to use such User Content as provided above, (b) such User Content is accurate and reasonably complete, (c) as between you and Awesome Inc, you shall be responsible for 
            the payment of any third party fees related to the provision and use of such User Content, (d) such User Content does not and will not infringe or misappropriate any third party rights, including any copyright, trademark, patent, trade secret, moral 
            right, privacy right, right of publicity, or any other intellectual property or proprietary right, or constitute a fraudulent statement or misrepresentation or unfair business practices, (e) such User Content does not and will not slander, defame, libel, 
            or invade the right of privacy, publicity, or other property right of any other person, and (f) such User Content does not contain any viruses, adware, spyware, worms, or other malicious code.<br/>
            With respect to any submissions of User Content, you agree to comply with all applicable federal, state, local and foreign treaties, laws, codes, regulations and rules including but not limited to such treaties, laws, codes, regulations and rules 
            regarding online conduct and acceptable content. Among other things, you agree to comply with all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside. Whether you terminate your 
            account, or Awesome Inc removes or deletes your account, the User Content or the third-party links submitted by you may remain on Awesome Inc’s servers, at Awesome Inc’s discretion, and may be used by Awesome Inc or other Users of the Services.</p>
            <Subtitle>Links</Subtitle>
            <p className="par">The Services may contain links to third-party websites or resources, and those links may contain content or offer products and/or services for sale. The third-party links do not create or imply any relationship or partnership between 
            Awesome Inc and the operators of such linked websites. Awesome Inc does not author, edit, control, or monitor these links. You acknowledge and agree that Awesome Inc is not responsible or liable for: (a) the availability or accuracy of such websites or 
            resources; (b) the content, products, or services on or available from such websites or resources; or (c) the protection of the privacy of personal information on such websites or resources. Links to such websites or resources do not imply any endorsement 
            by Awesome Inc of such websites or resources or the content, products, or services available from such websites or resources. Awesome Inc may remove such links at any time for any reason or for no reason. You acknowledge sole responsibility for and assume 
            all risk arising from your use of any such websites or resources. You also understand that these Terms and Awesome Inc’s Privacy Policy do not apply to any third-party websites, and each third-party site has its own terms of use and privacy policy completely independent from Awesome Inc.<br/>
            AWESOME INC WILL NOT BE LIABLE FOR ANY TRANSACTIONS CONDUCTED BY YOU WITH THIRD PARTIES THROUGH THE LINKED SITES OR FOR ANY DAMAGES ARISING FROM THE REPRESENTATIONS OR INFORMATION PROVIDED ON SUCH LINKED SITES.<br/>
            Users may include links to third-party websites in User Content as long as the content of such websites does not violate these Terms. You acknowledge sole responsibility and assume all risk by clicking on such links. 
            Awesome Inc is not responsible for the availability or the content of linked websites, including the advertising, products or other material thereon.<br/>
            You may provide links to the Awesome Inc website on your own website, provided that (a) you do not remove or obscure, by framing or otherwise, the copyright, trademark, or service mark notices or other notices on the site, (b) your site does not engage in activities that are illegal, 
            threatening, harassing, pornographic, or in any way discriminatory or disparaging based on race, religion, national origin, gender, age, disability, or any other category protected by applicable law, and (c) you agree that you will discontinue providing links to the site immediately upon request by us.</p>
            <Subtitle>Services Availability and Limitations</Subtitle>
            <p className="par">You acknowledge and agree that Awesome Inc Services, whether paid or free, are not available at all times, and that certain usage limits may apply. You also acknowledge and agree that Awesome Inc, in its sole discretion, may, permanently or 
            temporarily, limit, suspend, or terminate your access to and use of the Services and/or your user account, with or without prior notice. Awesome Inc may modify or discontinue all or part of the Services at its sole discretion.<br/>
            The Services are controlled and operated from facilities in the United States. Awesome Inc makes no representation that the Services are appropriate or available for Users in other locations. Unless otherwise explicitly stated, all Services are solely directed to individuals, companies, or other entities located in the United States.</p>
            <Subtitle>User Accounts (And Qualifying Tracks) For Paid Services</Subtitle>
            <p className="par">Certain paid Services offered by Awesome Inc through the Awesome Inc platform may require you to create a user account and/or to start a free self-driven qualifying track, in order to receive an invitation to apply to the applicable paid Service.<br/>
            All information in your user account must be accurate, current, and complete, and you must maintain and update your information as needed. You understand and agree that if any information provided by you is inaccurate, not current, or incomplete, Awesome Inc has a right 
            to suspend and/or terminate your user account and your enrollment in the paid Service.<br/>
            You are solely responsible for the security of your account and must keep your login credentials and your password safe. You must monitor all activity on your account, including any breach of security or unauthorized use. Awesome Inc is not liable for any loss that may 
            occur as a result of any such account security breach or unauthorized use. If you become aware of any unauthorized use of your account and/or security breach, you must immediately notify Awesome Inc at info@awesomeincu.com</p>
            <Subtitle>Applications and Admission For Paid Services</Subtitle>
            <p className="par">Certain paid Services offered by Awesome Inc through the Awesome Inc platform may require you to fill out an online application. The application may consist of, among other things: (1) your LinkedIn profile; 
            (2) basic biographical details like phone number and address; (3) your written answer to a long-form question; (4) your video answer to an application question and (5) your program selection.<br/>
            All answers to the questions on any such application must be your original work and must not infringe upon the copyright, trademarks, rights of privacy, or other intellectual property or other rights of any person and must 
            not violate the law. Your application and written and video responses become the exclusive property of Awesome Inc and will not be returned. All parts of the application must be completed in full and submitted together. 
            Incomplete applications and applications that are submitted in piecemeal fashion will not be considered.<br/>
            Where applicable, Awesome Inc will review and respond to each fully submitted application, typically within 48 hours of submission. You will be notified of your admission or rejection to the applicable paid Service via the e-mail 
            address provided by you in your user account. If admitted to the applicable paid Service, you will have the opportunity to enroll, which will require you to provide payment.</p>
            <Subtitle>Disclaimer of Warranties</Subtitle>
            <p className="par">YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT YOUR ACCESS TO AND USE OF THE SERVICES AND ALL CONTENT ARE AT YOUR SOLE RISK AND RESPONSIBILITY. YOU UNDERSTAND AND AGREE THAT THE SERVICES ARE PROVIDED TO YOU ON AN “AS IS” 
            AND “AS AVAILABLE” BASIS WITH NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. 
            YOU ASSUME TOTAL RESPONSIBILITY AND THE ENTIRE RISK FOR YOUR USE OF THE SERVICES AND CONTENT.<br/>
            WITHOUT LIMITING THE FOREGOING, AND TO THE FULLEST EXTENT PERMITTED BY LAW, AWESOME INC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, REPRESENTATIVES, PARTNERS, AND AFFILIATES (COLLECTIVELY, THE “AWESOME INC ENTITIES”) DO NOT WARRANT 
            THAT: (A) THE SERVICES OR CONTENT WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS OR ACHIEVE THE INTENDED PURPOSES, (B) THE SERVICES OR CONTENT WILL NOT EXPERIENCE OUTAGES OR OTHERWISE BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, (C) 
            THE SERVICES OR CONTENT WILL BE ACCURATE, COMPLETE, CURRENT, COMPLETELY SECURE OR RELIABLE, (D) DEFECTS IN OR ON THE SERVICES OR CONTENT WILL BE CORRECTED, (E) THE SERVICES OR CONTENT WILL NOT CAUSE ANY HARM TO YOUR COMPUTER SYSTEM, 
            LOSS OF DATA, OR OTHER HARM THAT RESULTS FROM YOUR ACCESS TO OR USE OF THE SERVICES OR ANY CONTENT, AND THAT (F) THERE WILL BE NO DELETION OF, OR THE FAILURE TO STORE OR TO TRANSMIT, ANY SERVICES OR CONTENT AND OTHER COMMUNICATIONS. 
            YOU ASSUME ALL RISK OF PERSONAL INJURY (INCLUDING DEATH AND DAMAGE TO PERSONAL PROPERTY) AND OTHER DAMAGES SUSTAINED FROM USE OF THE ONLINE COURSES, CONTENT AND OTHER SERVICES.<br/>
            AWESOME INC DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH AWESOME INC SERVICES OR ANY HYPERLINKED WEBSITE OR SERVICE, AND AWESOME INC WILL 
            NOT BE A PARTY TO OR IN ANY WAY MONITOR ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.<br/>
            NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM ANY OF THE AWESOME INC ENTITIES OR THROUGH ITS SERVICES, WILL CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.</p>
            <Subtitle>Limitation of Liability</Subtitle>
            <p className="par">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES SHALL ANY OF THE AWESOME INC ENTITIES BE LIABLE TO THE USER OR ANY THIRD PARTY WITH RESPECT TO THE SERVICES AND/OR ANY OTHER SUBJECT MATTER 
            ADDRESSED BY THESE TERMS OF USE (INCLUDING ANY SUPPLEMENTAL TERMS) (INCLUDING, WITHOUT LIMITATION, ANY BREACH OF SECURITY OR DATA LOSS) UNDER ANY CONTRACT, NEGLIGENCE, STRICT LIABILITY OR OTHER THEORY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
            CONSEQUENTIAL OR PUNITIVE DAMAGES OR LOST PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, LOSS OR INACCURACY OF DATA OR DOCUMENTS OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, EVEN IF ADVISED OF THE 
            POSSIBILITY OF SUCH DAMAGES OR WHETHER ANY REMEDY SET FORTH HEREIN FAILS OF ITS ESSENTIAL PURPOSE OR OTHERWISE.<br/>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE AWESOME INC ENTITIES ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY: (A) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT; (B) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, 
            RESULTING FROM YOUR ACCESS TO OR USE OF OUR SERVICES; (C) UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (D) INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES; (E) 
            BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY; (F) ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, 
            TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE SERVICES; AND/OR (G) USER CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY.<br/>
            AWESOME INC’S (AND THE OTHER AWESOME INC ENTITIES’) TOTAL CUMULATIVE LIABILITY ARISING OUT OF OR RELATING TO THE SERVICES AND/OR THESE TERMS OF USE (INCLUDING ANY SUPPLEMENTAL TERMS) WILL NOT EXCEED THE GREATER OF ONE HUNDRED U.S. DOLLARS ($100) 
            OR THE AMOUNT OF FEES RECEIVED BY AWESOME INC FROM THE COMPLAINING USER FOR THE USE OF THE SERVICES. THE EXISTENCE OF MULTIPLE CLAIMS SHALL NOT EXPAND OR INCREASE THE FOREGOING LIMITATION. THE PARTIES ACKNOWLEDGE THAT THIS CLAUSE REFLECTS 
            THE AGREED UPON REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN THE PARTIES AND THAT AWESOME INC WOULD NOT ENTER INTO THESE TERMS OF USE OR MAKE THE SERVICES OR CONTENT AVAILABLE TO USER WITHOUT THESE LIMITATIONS ON LIABILITY.</p>
            <Subtitle>Indemnification</Subtitle>
            <p className="par">You agree to indemnify, defend and hold harmless Awesome Inc (and the other Awesome Inc Entities) from any and all claims, causes of action, liabilities, damages, losses and expenses, including reasonable attorneys’ fees 
            and costs, made or incurred by any third party relating to or arising out of (a) your use or attempted use of the Services in violation of these Terms (including any applicable Supplemental Terms), (b) your use or attempted use of any code, 
            program, data, information or any other Content provided through the Services in a manner inconsistent with these Terms (including any applicable Supplemental Terms), (c) your violation of any laws, rules, or regulations, or rights of any third party, 
            (d) information that you post or otherwise make available on the Services, including without limitation any claim of infringement of intellectual property or other proprietary rights, and/or (e) any breach by you of the representations, warranties, 
            and covenants made in these Terms (including any applicable Supplemental Terms).</p>
            <Subtitle>Termination of Rights</Subtitle>
            <p className="par">You agree that Awesome Inc, in its sole discretion, may deactivate your account or otherwise terminate your use of the Services for any reason, including, without limitation, if Awesome Inc believes that you have: (a) breached 
            these Terms (including any applicable Supplemental Terms); (b) infringed the intellectual property rights of a third party; (c) posted, uploaded or transmitted Unauthorized Content to the Services; and/or (d) violated or acted inconsistently with the 
            letter or spirit of these Terms (including any applicable Supplemental Terms). You agree that any deactivation or termination of your access to the Services may be effected without prior notice to you and that Awesome Inc shall not be liable to 
            you nor any third party for any termination of your account. You also acknowledge that Awesome Inc may retain and store your information on Awesome Inc’s systems notwithstanding any termination of your account. You further acknowledge that Awesome 
            Inc’s rights to deactivate or terminate your use of the Services are not Awesome Inc’s sole remedy and that Awesome Inc may also seek other further relief under law or equity.</p>
            <Subtitle>Governing Law</Subtitle>
            <p className="par">These Terms (including any applicable Supplemental Terms) and the interpretation of these Terms (including any applicable Supplemental Terms) shall be governed by and construed in accordance with the laws of the State of Kentucky, 
            County of Fayette, without regard to its conflict of laws rules. Should any part of these Terms (including any applicable Supplemental Terms) be found invalid or not enforceable by a court of law, then the remaining portions shall continue to be 
            valid and in force, to the extent permitted by law.</p>
            <Subtitle>Agreement to Arbitrate:</Subtitle>
            <p className="par">READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES THE PARTIES TO ARBITRATE THEIR DISPUTES AND LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM AWESOME INC. THIS SECTION WAIVES YOUR RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS OR COLLECTIVE ACTION.<br/>
            Awesome Inc and you (collectively the “Parties”) waive all rights to trial before a jury in any action or proceeding arising out of or relating to these Terms (including any applicable Supplemental Terms), the Services, or otherwise arising between the Parties, including, without 
            limitation, any User’s statutorily created or protected rights. With the exception of any action or proceeding brought by Awesome Inc (or by any of the other Awesome Inc Entities) in which injunctive relief is sought, any controversy or claim arising out of or relating to these 
            Terms (including any applicable Supplemental Terms) and/or the Services shall be settled exclusively by binding arbitration in accordance with the commercial arbitration rules of the American Arbitration Association, and judgment upon the award rendered by the arbitrator(s) 
            may be entered in any court of competent jurisdiction. Any such controversy or claim shall be arbitrated on an individual basis, and shall not be consolidated in any arbitration with any claim or controversy of any other party. This waiver applies to class arbitration and 
            the arbitrator(s) may not consolidate more than one person’s claim. With the exception of any claim by Awesome Inc (or by any of the other Awesome Inc Entities) for indemnification, under no circumstances is an arbitrator authorized to issue an award for, and the Parties 
            hereby waive all rights to claim, punitive damages, liquidated damages, incidental or consequential damages, or attorneys’ fees. The arbitration shall be conducted in the State of Kentucky, County of Fayette, unless the Parties agree otherwise. You hereby acknowledge that 
            you understand the terms of the arbitration clause, and agree to comply with all of its terms and provisions.</p>
            <Subtitle>Assignment</Subtitle>
            <p className="par">Awesome Inc may freely transfer or assign any portion of its rights or delegate its obligations under these Terms (including any applicable Supplemental Terms). You shall not transfer or assign, by operation of law or otherwise, any portion of your 
            rights or delegate your obligations under these Terms (including any applicable Supplemental Terms) without the prior written consent of Awesome Inc. Any attempted transfer or assignment in violation hereof will be null and void.</p>
            <Subtitle>Entire Agreement/<br/>Severability</Subtitle>
            <p className="par">These Terms (including any applicable Supplemental Terms) are the entire and exclusive agreement between Awesome Inc and you regarding the Services, and supersede and replace any prior agreements between Awesome Inc and you regarding the Services. 
            No other person or company, with the exception of the Awesome Inc Entities, will be third party beneficiaries to the Terms (including any applicable Supplemental Terms). If any provision of these Terms (including any applicable Supplemental Terms) is found to be unlawful, 
            void, or for any reason unenforceable, then that provision shall be deemed severable from the other provisions, and shall not affect the validity and enforceability of any remaining provisions.</p>
            <Subtitle>No Waiver</Subtitle>
            <p className="par">Any delay or failure on the part of Awesome Inc to enforce any rights under these Terms (including any applicable Supplemental Terms) to which it may be entitled shall not, in any event, be construed as a waiver of the right and privilege to do so at any subsequent time.</p>
            <Subtitle>Notifications and Changes to the Terms</Subtitle>
            <p className="par">These Terms (including any applicable Supplemental Terms, such as those relating to payment) are subject to change. If you continue to access and use the Services after these Terms (including any Supplemental Terms) change, you agree to be bound by such changes. Any changes 
            will be effective immediately upon posting. Please check these Terms (including any Supplemental Terms) for changes periodically. Awesome Inc may provide notifications, including changes to these Terms (including any Supplemental Terms), to you via email notice, written or hard copy notice, 
            or through posting of such notice on the Awesome Inc website, as determined by Awesome Inc in its sole discretion. Awesome Inc is not responsible for any automatic filtering you or your network provider may apply to email notifications sent to your email address. You are solely responsible 
            for maintaining your account, including you email address, accurate, current and complete.<br/>
            Please contact us at info@awesomeinc.org with any questions regarding these Terms (including any Supplemental Terms).<br/>
            These Terms were last updated on Sept 22, 2019.</p>
        </section>
    </Container>
    </Layout>

  )
}
export default TermsPage;