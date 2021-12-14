import Link from "next/link"

export default function Footer() {
    return (
      <div>
        <footer className="footer__area footer-bg-3 pt-120 p-relative fix">
          <div className="footer__top pb-65">
            <div className="container">
              <div className="row">
                <div
                  className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-title mb-25">
                      <div className="footer__logo">
                        <a href="#">
                          <img src="assets/img/logo/logo-2.png" alt="logo" />
                        </a>
                      </div>
                    </div>
                    <div className="footer__widget-content footer__widget-content-3">
                      <p>Ever since we started using we’ve , and more.</p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="footer__widget mb-50 footer__pl-70">
                    <div className="footer__widget-title footer__widget-title-3 mb-25">
                      <h3>Overview</h3>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__link footer__link-4">
                        <ul>
                          <li>
                            <a href="#">Terms</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Cookies</a>
                          </li>
                          <li>
                            <a href="#">Integrations</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-3 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay=".9s"
                >
                  <div className="footer__widget mb-50 footer__pl-90">
                    <div className="footer__widget-title footer__widget-title-3 mb-25">
                      <h3>Customer</h3>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__link footer__link-4">
                        <ul>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">Product</a>
                          </li>
                          <li>
                            <a href="#">Pricing</a>
                          </li>
                          <li>
                            <a href="#">Integrations</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay="1.2s"
                >
                  <div className="footer__widget mb-50">
                    <div className="footer__widget-title footer__widget-title-3 mb-25">
                      <h3>Product</h3>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__link footer__link-4">
                        <ul>
                          <li>
                            <a href="#">Getting Started</a>
                          </li>
                          <li>
                            <a href="#">Style Guide</a>
                          </li>
                          <li>
                            <a href="#">Licences</a>
                          </li>
                          <li>
                            <a href="#">Changelog</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 wow fadeInUp"
                  data-wow-delay="1.5s"
                >
                  <div className="footer__widget mb-50 float-md-end fix">
                    <div className="footer__widget-title footer__widget-title-3 mb-25">
                      <h3>Follow Us</h3>
                    </div>
                    <div className="footer__widget-content">
                      <div className="footer__social footer__social-4">
                        <ul>
                          <li>
                            <a href="#">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fab fa-pinterest-p" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__copyright footer__copyright-2">
                <div className="row">
                  <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".3s">
                    <div className="footer__copyright-wrapper footer__copyright-wrapper-3 text-center">
                      <p>
                        Copyright © 2021 All Rights Reserved{" "}
                        <a href="https://datatechet.com">Data-Tech</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <script src="assets/js/vendor/jquery-3.5.1.min.js"></script>
        <script src="assets/js/vendor/waypoints.min.js"></script>
        <script src="assets/js/bootstrap.bundle.min.js"></script>
        <script src="assets/js/jquery.meanmenu.js"></script>
        <script src="assets/js/owl.carousel.min.js"></script>
        <script src="assets/js/jquery.fancybox.min.js"></script>
        <script src="assets/js/isotope.pkgd.min.js"></script>
        <script src="assets/js/parallax.min.js"></script>
        <script src="assets/js/jquery.counterup.min.js"></script>
        <script src="assets/js/ajax-form.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/imagesloaded.pkgd.min.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    );
}
