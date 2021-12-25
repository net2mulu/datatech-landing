export const Hero = () => {
  return (
    <div>
      {/* hero area start */}
      <section className="hero__area hero__height-4 grey-bg-9 p-relative d-flex align-items-center">
        <div className="hero__shape-4">
          
          <img
            className="cross-1"
            src="assets/img/icon/hero/home-4/cross-1.png"
            alt=""
          />
          <img
            className="cross-2"
            src="assets/img/icon/hero/home-4/cross-2.png"
            alt=""
          />
          <img
            className="cross-3"
            src="assets/img/icon/hero/home-4/cross-3.png"
            alt=""
          />
          <img
            className="dot-1"
            src="assets/img/icon/hero/home-4/dot-1.png"
            alt=""
          />
          <img
            className="dot-2"
            src="assets/img/icon/hero/home-4/dot-2.png"
            alt=""
          />
          <img
            className="dot-3"
            src="assets/img/icon/hero/home-4/dot-3.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-7 col-xl-7 col-lg-6">
              <div className="hero__content-4 pr-70">
                <h3 className="hero__title-4 wow fadeInUp" data-wow-delay=".3s">
                  {" "}
                  <span>DATA TECH</span> Cyber Security <br></br>& Software Development
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Get the best cyber security services and a powerfull, secured software products right away.
                </p>
                <div
                  className="hero__features d-sm-flex mb-25 wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="hero__features-item ">
                    <ul>
                      <li>Penetration Testing</li>
                      <li>Network & Network<br></br> Management</li>
                    </ul>
                  </div>
                  <div className="hero__features-item">
                    <ul>
                      <li>Web Development</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </div>
                </div>
                <div className="hero__btn-4">
                  <a
                    href="contact.html"
                    className="w-btn-round mr-25 wow fadeInUp"
                    data-wow-delay=".9s"
                  >
                    Know More
                  </a>
                  <a
                    href="contact.html"
                    className="w-btn-round w-btn-round-2 wow fadeInUp"
                    data-wow-delay="1.2s"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-6">
              <div className="hero__thumb-4-wrapper">
                <div className="hero__thumb-4 p-relative">
                  <img
                    className="girl"
                    src="assets/img/hero/home-4/cyberr.png"
                    alt=""
                  />
                  <img
                    className="flower"
                    src="assets/img/hero/home-4/aapr.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero area end */}
    </div>
  );
};
