import React, { Component } from 'react'
import Aside from '../components/aside'
import CustomerTable from '../components/customerTable'
import Footer from '../components/footer'
import Header from '../components/header'
import { customers } from '../data'
class Home extends Component {
  state = {
    customers: [],
  }
  componentDidMount() {
    this.setState({
      customers,
    })
  }
  handelDelete = (custom) => {
    const newCustomers = this.state.customers.filter(
      (c) => c._id !== custom._id,
    )
    this.setState({
      customers: newCustomers,
    })
  }

  render() {
    return (
      <div
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin5"
        data-sidebartype="full"
        data-sidebar-position="absolute"
        data-header-position="absolute"
        data-boxed-layout="full"
      >
        <Header />
        <Aside />
        <div className="page-wrapper">
          <div className="page-breadcrumb bg-white">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title">CUSTOMERS</h4>
              </div>
              <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                <div className="d-md-flex">
                  <ol className="breadcrumb ms-auto"></ol>
                  <a
                    href="#2"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      backgroundColor: 'blue',
                      fontWeight: '500',
                      fontSize: '16px',
                    }}
                    className="btn   d-none d-md-block pull-right ms-3 hidden-xs hidden-sm waves-effect waves-light text-white"
                  >
                    Add New Customer
                  </a>
                </div>
              </div>
            </div>
          </div>

          <CustomerTable onDelete={this.handelDelete} customers={customers} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default Home
