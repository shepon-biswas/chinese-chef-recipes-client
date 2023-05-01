import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="bg-base-200">
      <footer className="footer p-5  text-base-content w-10/12 mx-auto">
        <div>
          <img src="/favicon.png" alt="" />
          <h4 className="text-2xl font-bold">Chinese Chef Recipe</h4>
          <p>
            Exploring Traditional Chinese Cuisine.
          </p>
        </div>
        <div>
          <span className="footer-title">Meet Our Chefs</span>
          <a className="link link-hover">Martin Yan</a>
          <a className="link link-hover">Ken Hom</a>
          <a className="link link-hover">Susanna Foo</a>
          <a className="link link-hover">Cecilia Chiang</a>
        </div>
        <div>
          <span className="footer-title">Recipes</span>
          <a className="link link-hover">Traditional</a>
          <a className="link link-hover">Family</a>
          <a className="link link-hover">Seasonal</a>
          <a className="link link-hover">Occasional</a>
        </div>
        <div>
          <span className="footer-title">Important Links</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Contact Us</a>
        </div>
        
        
      </footer>
      {/* Footer Bottom */}
        <div className="w-10/12 mx-auto p-10 text-center ">
         <div className="my-3 ">
            <h4>Follow Our Social Media</h4>
                <div className="flex justify-center my-3">
                <FaFacebook className="w-12"></FaFacebook>
                <FaTwitter className="w-12"></FaTwitter>
                <FaInstagram className="w-12"></FaInstagram>
                </div>
            
         </div>
         <p className="text-gray-600">Copyright © 2023 - All right reserved</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
