import React from 'react'
import PusherLogo from './PusherLogo'

const Layout = ({children}) => (
  <div className='content'>
    {children}
    <footer className='footer'>
      <p>
        Vote counters are updated in realtime using
        <a href='https://pusher.com/' className='footer__pusher-link'>
          <PusherLogo /> Pusher.com
        </a>. Source code is available <a href=''>here</a>.
      </p>
    </footer>
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default Layout
