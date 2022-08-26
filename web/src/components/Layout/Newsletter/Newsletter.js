import * as React from "react";
import Title from "../../../components/UI/Title/Title";
import Subtitle from "../../../components/UI/Subtitle/Subtitle";
import BrandButton from "../../../components/UI/BrandButton/BrandButton";

const Newsletter = () => {
  return (
    <section style={{ backgroundColor: `#555`}}>
      <Title className="text-center text-uppercase text-white py-5">Sign up for Our Newsletter</Title>
      <div className="py-5">
        <BrandButton className="d-block mx-auto mb-5">Sign Up</BrandButton>
      </div>
    </section>
  )
}

export default Newsletter;