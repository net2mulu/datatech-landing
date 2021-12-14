import Layout from "@/components/Layout";
import { Testimonial } from "@/components/Testimonial";
import  {Hero}  from "@/components/SubComponents/Hero";

export default function Home() {
  return (
    <Layout>
       <main>
         <Hero />
          {/* features area start */}
          <section className="features__area pt-135 pb-120 p-relative">
            <div className="features__shape-2">
              <img className="features-2-dot" src="assets/img/icon/features/home-2/features-dot.png" alt="" />
              <img className="features-2-dot-2" src="assets/img/icon/features/home-2/features-dot-2.png" alt="" />
              <img className="features-2-dot-3" src="assets/img/icon/features/home-2/features-dot-3.png" alt="" />
              <img className="features-2-triangle-1" src="assets/img/icon/features/home-2/features-triangle-1.png" alt="" />
              <img className="features-2-triangle-2" src="assets/img/icon/features/home-2/features-triangle-2.png" alt="" />
              <img className="features-2-triangle-3" src="assets/img/icon/features/home-2/features-triangle-3.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                  <div className="section__title-wrapper section__title-wrapper-4 text-center mb-60 wow fadeInUp" data-wow-delay=".3s">
                    <h2 className="section__title section__title-4">Customers in Real Time Chat With Visitor.</h2>
                    <p>Elizabeth geeza Why, quain standard  guvnor gosh cras brilliant.</p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-3 offset-xxl-1 col-xl-3 col-lg-4 col-md-4">
                  <div className="features__tab">
                    <ul className="nav nav-tabs" id="feaTab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <button className="nav-link pink-bg" id="sync-tab" data-bs-toggle="tab" data-bs-target="#sync" type="button" role="tab" aria-controls="sync" aria-selected="true"> <i className="icon_document_alt" /> Seamless Sync</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link blue-bg active" id="security-tab" data-bs-toggle="tab" data-bs-target="#security" type="button" role="tab" aria-controls="security" aria-selected="false"> <i className="icon_book_alt" /> Super security</button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button className="nav-link yellow-bg" id="multitask-tab" data-bs-toggle="tab" data-bs-target="#multitask" type="button" role="tab" aria-controls="multitask" aria-selected="false"> <i className="icon_flowchart" /> Multitask</button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xxl-7 offset-xxl-1 col-xl-7 offset-xl-1 col-lg-8 col-md-8">
                  <div className="features__tab-content">
                    <div className="tab-content" id="feaTabContent">
                      <div className="tab-pane fade" id="sync" role="tabpanel" aria-labelledby="sync-tab">
                        <div className="features__thumb">
                          <div className="features__thumb-inner">
                            <img className="fea-thumb" src="assets/img/features/home-2/fea-thumb-2.jpg" alt="" />
                            <img className="fea-sm" src="assets/img/features/home-2/fea-sm.jpg" alt="" />
                            <img className="fea-sm-2" src="assets/img/features/home-2/fea-sm-2.jpg" alt="" />
                            <img className="fea-2-shape" src="assets/img/icon/features/home-2/features-shape.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade show active" id="security" role="tabpanel" aria-labelledby="security-tab">
                        <div className="features__thumb">
                          <div className="features__thumb-inner">
                            <img className="fea-thumb" src="assets/img/features/home-2/fea-thumb.jpg" alt="" />
                            <img className="fea-sm" src="assets/img/features/home-2/fea-sm.jpg" alt="" />
                            <img className="fea-sm-2" src="assets/img/features/home-2/fea-sm-2.jpg" alt="" />
                            <img className="fea-2-shape" src="assets/img/icon/features/home-2/features-shape.png" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="multitask" role="tabpanel" aria-labelledby="multitask-tab">
                        <div className="features__thumb">
                          <div className="features__thumb-inner">
                            <img className="fea-thumb" src="assets/img/features/home-2/fea-thumb-3.jpg" alt="" />
                            <img className="fea-sm" src="assets/img/features/home-2/fea-sm.jpg" alt="" />
                            <img className="fea-sm-2" src="assets/img/features/home-2/fea-sm-2.jpg" alt="" />
                            <img className="fea-2-shape" src="assets/img/icon/features/home-2/features-shape.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* features area end */}   
          {/* promotion area start */}
          <section className="promotion__area pt-200 pb-120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xxl-5 offset-xxl-1 col-xl-6 col-lg-7 col-md-10 order-last order-lg-first">
                  <div className="promotion__content-4 mb-90 pr-85">
                    <div className="section__title-wrapper section__title-wrapper-4  mb-30 wow fadeInUp" data-wow-delay=".3s">
                      <h2 className="section__title section__title-4">Send Marketing Email Like a Pro.</h2>
                      <p>Brown bread don't get shirty with me loo James Bond knees up argy-bargy arse bamboozled porkies bender, cheeky chap.</p>
                    </div>
                    <a href="contact.html" className="w-btn-round">Start Free Trial</a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-5">
                  <div className="promotion__thumb-4 p-relative">
                    <img className="promotion-4-big" src="assets/img/promotion/home-4/promotion-big.jpg" alt="" />
                    <img className="promotion-4-sm" src="assets/img/promotion/home-4/promotion-sm.jpg" alt="" />
                    <img className="promotion-4-circle" src="assets/img/promotion/home-4/circle.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* promotion area end */}
          {/* services area start */}
          <section className="services__area pt-90 pb-110">
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
              <div className="row">
                <div className="col-xxl-12 wow fadeInUp" data-wow-delay=".7s">
                  <div className="services__more-4 text-center mt-30">
                    <a href="services.html" className="w-btn-round w-btn-round-border"> view all service</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* services area end */}
          {/* cta area start */}
          <section className="cta__area blue-bg-10 pt-140 pb-130 p-relative fix z-index-1">
            <div className="cta__shape">
              <img className="cta-4-shape" src="assets/img/cta/home-4/cta-shape.png" alt="" />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 offset-xxl-2">
                  <div className="cta__content-4 text-center">
                    <div className="section__title-wrapper section__title-wrapper-4 section__title-white text-center mb-45 wow fadeInUp" data-wow-delay=".3s">
                      <h2 className="section__title section__title-4 wow fadeInUp" data-wow-delay=".3s">Our Free Trial for 14-days Today</h2>
                      <p className="wow fadeInUp" data-wow-delay=".5s">Get the word out and sell more with sleek email messages that.</p>
                    </div>
                    <div className="cta__form mb-25 wow fadeInUp" data-wow-delay=".7s">
                      <form action="#">
                        <input type="email" placeholder="Enter Your Email" />
                        <button type="submit">Start Free Trial</button>
                      </form>
                    </div>
                    <div className="cta__features">
                      <ul>
                        <li>Product support</li>
                        <li>Free trial</li>
                        <li>Connect Customer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* cta area end */}
          {/* <Testimonial /> */}
          {/* support area start */}
          <section className="support__area grey-bg-12 pt-105 pb-90">
            <div className="container">
              <div className="row">
                <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div className="section__title-wrapper section__title-wrapper-4 text-center mb-60 wow fadeInUp" data-wow-delay=".3s">
                    <h2 className="section__title section__title-4 section__title-4-p-2">Keep conversations going across channels</h2>
                    <p>Connect with our support team and ask for our Business &amp; eCommerce Premium plans.</p>
                  </div>
                </div>
              </div>
              <div className="row row-cols row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                <div className="col wow fadeInUp" data-wow-delay=".3s">
                  <div className="support__item white-bg mb-30 transition-3 text-center">
                    <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                      <a href="#">
                        <img src="assets/img/support/stack-1.png" alt="" />
                      </a>
                    </div>
                    <div className="support__content">
                      <h3 className="support__title"><a href="#">Slack</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".5s">
                  <div className="support__item white-bg mb-30 transition-3 text-center">
                    <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                      <a href="#">
                        <img src="assets/img/support/twitter.png" alt="" />
                      </a>
                    </div>
                    <div className="support__content">
                      <h3 className="support__title"><a href="#">Twitter</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".7s">
                  <div className="support__item white-bg mb-30 transition-3 text-center">
                    <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                      <a href="#">
                        <img src="assets/img/support/google-drive.png" alt="" />
                      </a>
                    </div>
                    <div className="support__content">
                      <h3 className="support__title"><a href="#">Drive</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".9s">
                  <div className="support__item white-bg mb-30 transition-3 text-center">
                    <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                      <a href="#">
                        <img src="assets/img/support/behance.png" alt="" />
                      </a>
                    </div>
                    <div className="support__content">
                      <h3 className="support__title"><a href="#">Behance</a></h3>
                    </div>
                  </div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay="1.2s">
                  <div className="support__item white-bg mb-30 transition-3 text-center">
                    <div className="support__icon mb-15 d-flex align-items-end justify-content-center">
                      <a href="#">
                        <img src="assets/img/support/whatsapp.png" alt="" />
                      </a>
                    </div>
                    <div className="support__content">
                      <h3 className="support__title"><a href="#">What’s app</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* support area end */}
        </main>
    </Layout>
    
  );
}
