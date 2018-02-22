import React from 'react'
import $ from 'jquery'
import {FormattedMessage, injectIntl } from "react-intl"

const Contact = ({lang, intl: { formatMessage }}) => (
  <div id="book-now" className="blocks">
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-xl">

          <h3><FormattedMessage id="book.title1"/></h3>
          <iframe
            id="bookingFrame"
            title="Reservas"
            src={`https://www.covermanager.com/reservation/module_restaurant/ninot-cuina/${lang}`}
            frameBorder="0"
            height="580"
            width="100%"
          />
        </div>

        <div className="col-xl">
          <h3><FormattedMessage id="book.title2"/></h3>
          <form>
            <br style={{ clear: 'both' }} />
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder={formatMessage({id: 'book.name'})}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
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
                      placeholder={formatMessage({id: 'book.message'})}
                      maxLength="140"
                      rows="7"
                    />
            </div>
            <button
              type="button"
              id="submit"
              onClick={() => {
                  $('#sent').hide()
                  window.fetch('https://ninot-mailer.herokuapp.com/', {
                    method: 'post',
                    body: JSON.stringify({
                      name: $('#name').val(),
                      email: $('#email').val(),
                      body: $('#message').val()
                    })
                  })
                  $('#name, #email, #message').val('')
                  $('#sent').show()
                }
              }
              name="submit"
              className="btn btn-light pull-right"
            >
              <FormattedMessage id="book.submit"/>
            </button>
            {' '}
            <i id="sent" className="fas fa-check" style={{'display': 'none'}}/>
          </form>
        </div>
      </div>
    </div>
  </div>
)

export default injectIntl(Contact)
