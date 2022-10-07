const Contact = () => {
  return (
    <>
    <section id="home" className="main">
    <section className="container">
      <div className="col-md-9 mb-md-0 mb-5"/>

      <form id="contact-form" name="contact-form" action="mail.php" method="POST">

          <h3 id="contact-me" className="h1-responsive font-weight-bold text-center my-4">Contact me</h3>

          <p id="contact-p" className="text-center w-responsive mx-auto mb-5">Please don't hesitate to contact me directly
            in case you have any questions. I'll come back to you within
            a matter of hours to reply to your inquiries.</p>

          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="name" className="">Your name</label>
                <input type="text" id="name" name="name" className="form-control"/>
              </div>
            </div>

            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="email" className="">Your email</label>
                <input type="text" id="email" name="email" className="form-control"/>

              </div>
            </div>

          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <label htmlFor="subject" className="">Subject</label>
                <input type="text" id="subject" name="subject" className="form-control"/>

              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-12">

              <div className="md-form">
                <label htmlFor="message">Your message</label>
                <textarea type="text" id="message" name="message" rows="2"
                  className="form-control md-textarea"></textarea>
                <br/>
                <br/>
              </div>

            </div>
          </div>

          <div className="row">
            <div className="col-md-12 text-center">
              <ul className="list-unstyled mb-0">
                <li id="contactInfo"><i className="fas fa-map-marker-alt fa-2x"></i>
                  Alameda, CA 94502, USA
                </li>
                <li id="contactInfo"><i className="fas fa-phone mt-4 fa-2x"></i>
                  (001) 510-928-6806
                </li>
                <li id="contactInfo"><i className="fas fa-envelope mt-4 fa-2x"></i>
                  moisedia7@gmail.com
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-md-left">
            <a id="contact-submit" className="btn btn-primary"
              >Send</a>
          </div>
          <div className="status"></div>

      </form>

    </section>
  </section>
  </>
  )
}
export default Contact