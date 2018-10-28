import React, { Component } from "react";

export class Footer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer class="mainfooter" role="contentinfo">
        <div class="footer-middle">
          <div class="container">
            <div id="FooterLists" class="row">
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4 className="footer-headings"> Projects</h4>
                  <ul class="list-unstyled">
                    <li className="ProjectsItem">
                      <a className="footer-links" href="#">
                       MosquitoCast
                      </a>
                    </li>
                    <li className="ProjectsItem">
                      <a className="footer-links" href="#">
                       GitHub
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-3 col-sm-6">
                <div class="footer-pad">
                  <h4 className="footer-headings">About us</h4>
                  <ul class="list-unstyled">
                    <li className="AoutItem">
                      <a className="footer-links" href="#">
                        contact us
                      </a>
                    </li>
                    <li className="AoutItem">
                      <a className="footer-links" href="#">
                        The Team
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="copyRight" class="row">
            <div class="col-md-12 copy">
              <p class="text-center" style={{ margin: 20 + "px" }}>
                &copy; Copyright 2018 - The parasites. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
