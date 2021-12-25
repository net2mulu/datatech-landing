import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <section className="error__area pt-105 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-8 offset-md-2">
              <div className="error__wrapper text-center">
                <div className="error__thumb mb-65">
                  <Image src="assets/img/error/error.png" alt="" />
                </div>
                <div className="error__content">
                  <h3>Page not found</h3>
                  <p>
                    The Page You look for is not available. come again soon.
                  </p>
                  <Link href="/">
                    <a className="w-btn w-btn-11">Go Home</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
