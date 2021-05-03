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
          </nav>
        </div>
      </aside>
    )
  }
}

export default Aside
