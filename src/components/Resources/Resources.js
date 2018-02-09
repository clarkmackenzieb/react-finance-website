import React, { Component } from "react";

import "./Resources.css";
const moneyBag = require("../../img/money-bag-budget.png");

export default () => {
  return (
    <div className="resources-main-container">
      <h1 className="vt-font resources-main-header">Resources</h1>

      <h3 className="vt-font resources-sub-header">$&nbsp; Mint</h3>

      <p className="pt-sans-font resources-text-container">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The best way to start handling your
        finances is to start tracking them! Mint provides a cumulative view of
        your money with support for budgetting, paying bills, and checking your
        credit score! Check out it out by clicking{" "}
        <a className="resource-link" href="https://www.mint.com/">
          here!
        </a>
      </p>

      <h3 className="vt-font resources-sub-header">$&nbsp;Forbes</h3>

      <p className="pt-sans-font resources-text-container">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forbes is a reliable website to find
        finance-related news. While it's not necessary to follow the exact rise
        and fall of stocks, being informed about the state of the economy can
        help you manage your manage. Check it out by clicking{" "}
        <a className="resource-link" href="https://www.forbes.com/">
          here!
        </a>
      </p>

      <h3 className="vt-font resources-sub-header">
        $&nbsp; Personal Finance Community
      </h3>
      <p className="pt-sans-font resources-text-container">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;While Reddit may not be for
        everyone, the Personal Finance subreddit provides many resources for
        getting started managing your money. This is the perfect place to ask
        questions! Check it out by clicking{" "}
        <a
          className="resource-link"
          href="https://www.reddit.com/r/personalfinance/"
        >
          here!
        </a>
      </p>
      <div className="resources-img-container">
        <img
          className="money-bag-image"
          src={moneyBag}
          alt="a large sum of money"
        />
      </div>
    </div>
  );
};
