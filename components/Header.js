import Link from "next/link"


export default function Header() {
    return (
      <div>
        {/* header area start */}
        <header>
          <div
            id="header-sticky"
            className="header__area header__border-bottom header__padding grey-bg-9"
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logoo.png" alt="logo" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                  <div className="main-menu main-menu-4 pl-20">
                    <nav id="mobile-menu">
                      <ul>
                        <li className="has-dropdown">
                          <a href="index.html">Home</a>
                          <ul className="submenu">
                            <li>
                              <a href="index.html">Home 1</a>
                            </li>
                            <li>
                              <a href="index-2.html">Home 2</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home 3</a>
                            </li>
                            <li>
                              <a href="index-4.html">Home 4</a>
                            </li>
                            <li>
                              <a href="index-5.html">Home 5</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li className="has-dropdown">
                          <a href="services.html">Services</a>
                          <ul className="submenu">
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="services-details.html">
                                Services Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="blog.html">Blog</a>
                          <ul className="submenu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-standard.html">Blog Standard</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <a href="about.html">Pages</a>
                          <ul className="submenu">
                            <li>
                              <a href="faq.html">Faq</a>
                            </li>
                            <li>
                              <a href="portfolio.html">Portfolio</a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Portfolio Details
                              </a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                            <li>
                              <a href="error.html">Error 404</a>
                            </li>
                            <li>
                              <a href="sign-up.html">Sign Up</a>
                            </li>
                            <li>
                              <a href="sign-in.html">Sign In</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-6">
                  <div className="header__right text-end d-flex align-items-center justify-content-end">
                    <div className="header__right-btn d-none d-md-flex d-xl-block align-items-center">
                      <a href="sign-in.html" className="w-btn-header">
                        login
                      </a>
                      <a
                        href="sign-up.html"
                        className="w-btn-round w-btn-round-header ml-30"
                      >
                        Sign Up
                      </a>
                    </div>
                    <div className="sidebar__menu d-lg-none">
                      <div
                        className="sidebar-toggle-btn sidebar-toggle-btn-2"
                        id="sidebar-toggle"
                      >
                        <span className="line" />
                        <span className="line" />
                        <span className="line" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* sidebar area start */}
        <div className="sidebar__area">
          <div className="sidebar__wrapper">
            <div className="sidebar__close">
              <button className="sidebar__close-btn" id="sidebar__close-btn">
                <span>
                  <i className="fal fa-times" />
                </span>
                <span>close</span>
              </button>
            </div>
            <div className="sidebar__content">
              <div className="logo mb-40">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="mobile-menu mobile-menu-5" />
              <div className="sidebar__info mt-350">
                <a
                  href="#"
                  className="w-btn w-btn-11 w-btn-13 d-block mb-15 mt-15"
                >
                  login
                </a>
                <a href="#" className="w-btn w-btn-11 d-block">
                  sign up
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* sidebar area end */}
        <div className="body-overlay" />
        {/* sidebar area end */}
        {/* search area start */}
        <div className="search-wrapper p-relative transition-3">
          <div className="search-form transition-3">
            <form action="#">
              <input type="text" placeholder="Enter Your Keyword" />
              <button type="submit" className="search-btn">
                <i className="far fa-search" />
              </button>
            </form>
            <a href="javascript:void(0);" className="search-close">
              <i className="far fa-times" />
            </a>
          </div>
        </div>
        <div className="body-overlay" />
        {/* search area end */}
      </div>
    );
}
