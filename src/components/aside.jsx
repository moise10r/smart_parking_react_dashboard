import React, { Component } from 'react'

class Aside extends Component {
  state = {}
  render() {
    return (
      <aside className="left-sidebar" data-sidebarbg="skin6">
        <div className="scroll-sidebar">
          <nav className="sidebar-nav">
            <ul id="sidebarnav">
              <li className="sidebar-item pt-2">
                <a
                  className="sidebar-link waves-effect waves-dark sidebar-link"
                  href="dashboard.html"
                  aria-expanded="false"
                >
                  <i className="far fa-clock" aria-hidden="true"></i>
                  <span className="hide-menu">Dashboard</span>
                </a>
              </li>
            </ul>
            <div
              style={{
                width: '100%',
                height: '520px',
                backgroundColor: '#000',
                opacity: '0.7',
              }}
            >
              <img
                src="assets/plugins/images/users/bg.jpg"
                style={{
                  width: '100%',
                  height: '100%',
                  maxWidth: '100%',
                  objectFit: 'cover',
                }}
                alt=""
              />
            </div>
          </nav>
        </div>
      </aside>
    )
  }
}

export default Aside
