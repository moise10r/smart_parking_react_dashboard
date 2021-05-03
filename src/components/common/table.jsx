import React from 'react'
import TableBody from './tableBody'
import TableHader from './tableHeader'

const Table = () => {
  return (
    <table className="table text-nowrap">
      <TableHader />
      <TableBody />
    </table>
  )
}

export default Table
