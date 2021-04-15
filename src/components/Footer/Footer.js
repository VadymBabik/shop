import React from "react";

export const Footer = () => {
  return (
    <footer className="page-footer blue-grey darken-3">
      <div className="container">
        <div className="row">
          <div className="col l5 s12 hide-on-small-only">
            <h5 className="white-text">PhoneShop</h5>
            <p className="grey-text text-lighten-4">Electronics store</p>
          </div>
          <div className="col l4 s12 hide-on-small-only">
            <h5 className="white-text">New phone Apple</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  iPhone 12 Pro Max
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  iPhone 12 Pro
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  iPhone 12
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  iPhone 12 Mini
                </a>
              </li>
            </ul>
          </div>
          <div className="col l3 s12">
            <h5 className="white-text">For clients</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Payment
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Delivery
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Public offer
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="/">
                  Guarantee umovi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright hide-on-small-only">
        <div className="container center">© 2021 PhoneShop project</div>
      </div>
    </footer>
  );
};
