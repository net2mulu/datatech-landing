import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
     <div>
        {/* services area start */}
        <section className="services__area pt-110 pb-45">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 offset-xl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                <div className="section__title-wrapper section__title-wrapper-4 text-center mb-65 wow fadeInUp" data-wow-delay=".3s">
                  <h2 className="section__title section__title-4 section__title-4-p-2">Marketing Strategy Service.</h2>
                  <p>Get the word out and sell more with sleek email messages that.</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="services__item-4 white-bg mb-30">
                  <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                    <img src="assets/img/services/home-4/services-1.png" alt="" />
                  </div>
                  <div className="services__content-4">
                    <h3 className="services__title-4"><a href="services-details.html">Finish routine tasks automatically</a></h3>
                    <p>I smashing, hanky panky chap plastered show off show off pick your nose plastered.</p>
                    <a href="services-details.html" className="link-btn">Chat Platfrom <i className="arrow_right" /> </a>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="services__item-4 white-bg mb-30">
                  <div className="services__thumb-4 text-center d-flex align-items-end justify-content-center">
                    <img src="assets/img/services/home-4/services-2.png" alt="" />
                  </div>
                  <div className="services__content-4">
                    <h3 className="services__title-4"><a href="services-details.html">Start workflows from any app</a></h3>
                    <p>I smashing, hanky panky chap plastered show off show off pick your nose plastered.</p>
                    <a href="services-details.html" className="link-btn">Chat Platfrom <i className="arrow_right" /> </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* services area end */}
        {/* about area start */}
        <section className="about__area pb-45 pt-45 p-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-9 order-last order-lg-first">
                <div className="about__wrapper about__wrapper-2 mb-20">
                  <div className="section__title-wrapper mb-25 wow fadeInUp" data-wow-delay=".3s">
                    <h2 className="section__title">Awesome Prototyping Tool for UI/UX.</h2>
                    <p>Starkers pardon you knees up is Elizabeth geeza Why, quain standard  guvnor gosh cras brilliant.</p>
                  </div>
                  <ul className="wow fadeInUp" data-wow-delay=".5s">
                    <li>Intergate With Popular Softwares item</li>
                    <li>Instantly Create Your Crowdfunding Platform</li>
                  </ul>
                  <a href="contact.html" className="w-btn w-btn-3 w-btn-1">Get Started</a>
                </div>
              </div>
              <div className="col-xxl-6 offset-xxl-1 col-xl-6 col-lg-6 wow fadeInRight" data-wow-delay=".7s">
                <div className="about__thumb-wrapper-2 ml-40 p-relative m-img">
                  <img src="assets/img/about/about-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about area end */}
        {/* faq area start */}
        <section className="faq__area pt-75 pb-120">
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                <div className="faq__wrapper wow fadeInUp" data-wow-delay=".3s">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          What to do if you can’t access ?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Looking to start an online store and you're not sure where to begin? I'll guide will help you to navigate Would you like to boost your Twitter profile.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          How to start an online store in 2021 ?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Looking to start an online store and you're not sure where to begin? I'll guide will help you to navigate Would you like to boost your Twitter profile.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item border-none">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed pb-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          How to change font size in wordPress ?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <p>Looking to start an online store and you're not sure where to begin? I'll guide will help you to navigate Would you like to boost your Twitter profile.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 offset-xxl-1 col-xl-5 offset-xl-1 col-lg-6 col-md-8">
                <div className="faq__content">
                  <div className="section__title-wrapper section__title-wrapper-2 mb-35 wow fadeInUp" data-wow-delay=".3s">
                    <h2 className="section__title section__title-2">Loved and trusted by over 40k+ users!</h2>
                    <p>Over the last few years, podcasts have become a huge deal. They’ve taken on a growing role.</p>
                  </div>
                  <div className="faq__counter wow fadeInUp" data-wow-delay=".5s">
                    <ul>
                      <li>
                        <h3 className="pink"><span className="counter">876</span></h3>
                        <p>Happy Clients</p>
                      </li>
                      <li>
                        <h3 className="blue"><span className="counter">156</span></h3>
                        <p>Projects</p>
                      </li>
                      <li>
                        <h3 className="yellow"><span className="counter">430</span></h3>
                        <p>Trusted Users</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* faq area end */}
        {/* promotion area start */}
        <section className="promotion__area promotion__bg pt-125 pb-125 p-relative">
          <div className="promotion__shape">
            <img className="promotion-dot" src="assets/img/icon/promotion/pro-dot.png" alt="" />
            <img className="promotion-plus" src="assets/img/icon/promotion/pro-plus.png" alt="" />
            <img className="promotion-triangle" src="assets/img/icon/promotion/pro-triangle.png" alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="promotion__content wow fadeInUp" data-wow-delay=".3s">
                  <h3 className="promotion__title">Product goals? <br /> Let's make them happen.</h3>
                  <p>They’ve taken on a growing role Over the last few year.</p>
                  <a href="about.html" className="w-btn w-btn-8">read more</a>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <div className="promotion__content pl-70 promotion__right wow fadeInUp" data-wow-delay=".5s">
                  <h3 className="promotion__title">Looking for enterprise <br /> solution.</h3>
                  <p>They’ve taken on a growing role Over the last few year.</p>
                  <a href="about.html" className="w-btn w-btn-8">read more</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* promotion area end */}
      </div>
    </Layout>
  );
}
