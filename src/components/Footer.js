/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WeiboShareButton,
  WeiboIcon,
  LinkedinShareButton,
  LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>605 Pavonia Ave, Jersey City, NJ 07306</p>
            </div>
            <div className="d-flex">
              <a href="tel:315-679-9661">+1(315)679-9661</a>
            </div>
            <div className="d-flex">
              <p>lyuchenyia@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/chenyi.lyu.1"}
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://twitter.com/?lang=en"}
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <WeiboShareButton
                url={"https://weibo.com/6657896469/profile?topnav=1&wvr=6"}
              >
                <WeiboIcon className="mx-3" size={36} />
              </WeiboShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/chenyi-lyu-0965a51b4/"}
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;HeiYanQuan | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
