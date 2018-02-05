import React from 'react'

const Contact = () => (
  <div id="book-now" className="blocks">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xl">

          <h3>Book Now</h3>
          <iframe
            title="Reservas"
            src="https://www.covermanager.com/reservation/module_restaurant/ninot-cuina/english"
            frameBorder="0"
            height="550"
            width="100%"
          />
        </div>

        <div className="col-xl">
          <h3>Contact Us</h3>
          <form>
            <br style={{ clear: 'both' }} />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
                    <textarea
                      className="form-control"
                      type="textarea"
                      id="message"
                      placeholder="Message"
                      maxLength="140"
                      rows="7"
                    />
            </div>
            <button
              type="button"
              id="submit"
              name="submit"
              className="btn btn-light pull-right"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default Contact