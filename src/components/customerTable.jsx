import React, { Component } from 'react'
import { data } from '../data'
import Table from './common/table'

class CustomerTable extends Component {
  state = {}
  column = [{ path: 'name', label: 'Name' }]
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="white-box">
              <h3 className="box-title">
                <span
                  style={{
                    marginRight: '12px',
                  }}
                >
                  Number of All Customers :
                </span>
                <span
                  style={{
                    fontSize: '16px',
                  }}
                  className={
                    data.customers.length
                      ? 'btn btn-primary'
                      : 'btn btn-secondary'
                  }
                >
                  {data.customers.length}
                </span>
              </h3>

              <div className="table-responsive">
                <Table />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomerTable
