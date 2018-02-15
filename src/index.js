import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import $ from 'jquery'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <App />, document.getElementById('root'))
registerServiceWorker()

const header = $('#hero h1, #hero h3')
const range = 200

$(window).on('scroll', function() {
  const scrollTop = $(this).scrollTop(),
    height = header.outerHeight(),
    offset = height + 100,
    calc = 1 - (scrollTop - offset + range) / range

  header.css({ opacity: calc })

  if (calc > '1') {
    header.css({ opacity: 1 })
  } else if (calc < '0') {
    header.css({ opacity: 0 })
  }
})
