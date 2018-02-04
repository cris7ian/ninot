import React from 'react'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h4>Location</h4>
          Mercat del Ninot,<br/>
          Carrer de Casanova, 133,<br/>
          08036 Barcelona
        </div>
        <div className="col-md-4">
          <h4>Bookings</h4>
          +34 932 77 68 84 <br/>
          restaurant@ninot.com <br/>
          www.ninot.com
        </div>
        <div className="col-md-4">
          <h4>Timetables</h4>
          Kitchen: <br/>
          Lunes a Domingo 12:00-23:30 <br/>
          Terrace: <br/>
          Lunes a Domingo 11:00 - 03:30
        </div>
      </div>
    </div>
  </footer>
)

export default Footer