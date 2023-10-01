import * as React from "react";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";
import ApplyNowModal from "../../../pages/fellowship/Components/ApplyNowModal";

const Newsletter = () => {
  return (
    <section style={{ backgroundColor: `#555`}}>
      <Title className="text-center text-uppercase text-white py-5">Sign up for Our Newsletter</Title>
      <div className="py-5">
        
        <BrandButton className="d-block mx-auto mb-5">
          <ApplyNowModal title="Sign up" link="https://forms.zohopublic.com/virtualoffice9155/form/OnlineNewsletterSignup/formperma/63TqTON16miWuaZIxR3_tTM4HEyMqE9N_KJOPjJPEUA?gclid=undefined"/>
        </BrandButton>
      </div>
    </section>
  )
}

export default Newsletter;