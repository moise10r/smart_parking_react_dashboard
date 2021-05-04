import React, { Component } from 'react'
import Pagination from './common/pagination'
import Table from './common/table'
import { paginate } from '../utils/pagination'

class CustomerTable extends Component {
  state = {
    limit: 4,
    currentPage: 1,
  }
  handleChangePage = (page) => {
    console.log(page)
    this.setState({
      currentPage: page,
    })
  }
  render() {
    const { customers, onDelete } = this.props

    const allCustomers = paginate(
      customers,
      this.state.currentPage,
      this.state.limit,
    )
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
                    fontSize: '18px',
                    backgroundColor: 'blue',
                    borderRadius: '5px',
                    color: '#fff',
                    fontWeight: '700',
                  }}
                  className="btn"
                >
                  {customers.length}
                </span>
              </h3>
              <div className="table-responsive">
                <Table customers={allCustomers} onDelete={onDelete} />
              </div>
              <Pagination
                pageSize={this.state.limit}
                itemsCount={customers.length}
                onChangePage={this.handleChangePage}
                currentPage={this.state.currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CustomerTable
