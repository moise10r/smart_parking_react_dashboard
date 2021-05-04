import React, { Component } from 'react'

class Header extends Component {
  state = {}
  render() {
    return (
      <header className="topbar" data-navbarbg="skin5">
        <nav className="navbar top-navbar navbar-expand-md navbar-dark">
          {' '}
          <div className="navbar-header" data-logobg="skin6">
            <a className="navbar-brand" href="#3">
              <b className="logo-icon">
                <img src="assets/plugins/images/logo-icon.png" alt="homepage" />
              </b>
              <span className="logo-text">
                <img src="assets/plugins/images/logo-text.png" alt="homepage" />
              </span>
            </a>
            <a
              className="nav-toggler waves-effect waves-light text-dark d-block d-md-none"
              href="#2"
            >
              <i className="ti-menu ti-close"></i>
            </a>
          </div>
          <div
            className="navbar-collapse collapse"
            id="navbarSupportedContent"
            data-navbarbg="skin5"
          >
            <ul className="navbar-nav d-none d-md-block d-lg-none">
              <li className="nav-item">
                <a
                  className="nav-toggler nav-link waves-effect waves-light text-white"
                  href="#3"
                >
                  <i className="ti-menu ti-close"></i>
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className=" in">
                <form
                  role="search"
                  className="app-search d-none d-md-block me-3"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control mt-0"
                  />
                  <a href="#3" className="active">
                    <i className="fa fa-search"></i>
                  </a>
                </form>
              </li>
              <li>
                <a className="profile-pic" href="#2">
                  <img
                    src="assets/plugins/images/users/d3.jpg"
                    alt="user-img"
                    style={{
                      objectFit: 'cover',
                      width: '36px',
                      height: '36px',
                    }}
                    className="img-circle"
                  />
                  <span className="text-white font-medium">Moise</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
