import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4>Location</h4>
          Mercat del Ninot,<br/>
          Carrer de Casanova, 133,<br/>
          08036 Barcelona <br/>
          <a href="https://www.instagram.com/elninot_cuina/">
            <i className="fab fa-instagram"/>
          </a>

        </div>
        <div className="col-md-4">
          <h4>Bookings</h4>
          +34 932 77 68 84 <br/>
          <a href="mailto:info@ninotcuina.com">info@ninotcuina.com</a><br/>
        </div>
        <div className="col-md-4">
          <h4>Timetables</h4>
          Sunday and Monday: 9:30-16:00, kitchen 12 to 16<br/>
          Tuesday to Saturday: 9:30-00:00, kitchen all day<br/>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer