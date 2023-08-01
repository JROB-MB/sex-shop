import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us - SexShop"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTÁCTANOS :3</h1>
          <p className="text-justify mt-2">
            Somos los expertos 😋 en todo aquel accesorio que necesites 
          </p>
          <p className="mt-3">
            <BiMailSend /> : helpusingdildo@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 618-814-15-16
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
