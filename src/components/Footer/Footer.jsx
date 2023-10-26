import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";
import FtLink from "./Partials/FooterContacts";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <FtLink
          title="Get To Know Us"
          link1="Carrers"
          link2="Blog"
          link3="About Amazon"
          link4="Investor Relations"
          link5="Amazon"
          link6="Amazon Science"
        />

        <FtLink
          title="Make Money With Us"
          link1="Sell product on Amazon"
          link2="Sell Apps on Amazon"
          link3="Become an Affiliate"
          link4="Advertise Your Products"
          link5="Self-Publish with us"
          link6="Host an Amazon Hub"
          link7="See More Make Money With Us"
        />

        <FtLink
          title="Amazon Payment Products"
          link1="Amazon Business Card"
          link2="Shop with Points"
          link3="Reload Your Balance"
          link4="Amazon Currency Converter"
        />

        <FtLink
          title="Let Us Help You"
          link1="Amazon and COVID-19"
          link2="Your Account"
          link3="Your Orders"
          link4="Shipping Rates & Policies"
          link5="Returns & Replacements"
          link6="Manage Your Content and Devices"
          link7="Amazon Assistant"
          link8="Help"
        />
      </div>
      <footer>
        <p>
          @Copyright {new Date().getFullYear()} | Design & Developed By{" "}
          <a
            href="https://fb.me/wasif0ahmed"
            without
            rel="noreferrer"
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
          >
            Wasif Ahmed
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
