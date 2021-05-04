import React from 'react'
import _ from 'lodash'
const Pagination = ({ pageSize, itemsCount, currentPage, onChangePage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize)
  if (pageCount === 1) return null
  const pages = _.range(1, pageCount + 1)
  console.log(pageSize)
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item" style={{}}>
          <a
            className="page-link"
            style={{
              color: 'black',
              padding: '8px',
              cursor: 'pointer',
            }}
            href="#2"
          >
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            style={{ backgroundColor: currentPage === page ? 'blue' : 'red' }}
            className="page-item"
          >
            <a
              href="#3"
              onClick={() => onChangePage(page)}
              className="page-link"
              style={{
                color: 'black',
                paddingTop: '8px',
                paddingBottom: '8px',
                cursor: 'pointer',
              }}
            >
              {page}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a
            style={{
              color: 'black',
              paddingTop: '8px',
              paddingBottom: '8px',
              cursor: 'pointer',
            }}
            className="page-link"
            href="#2"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
