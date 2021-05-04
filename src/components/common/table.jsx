import React from 'react'
import TableBody from './tableBody'
import TableHader from './tableHeader'

const Table = ({ onDelete, customers }) => {
  return (
    <table className="table text-nowrap">
      <TableHader />
      <TableBody onDelete={onDelete} customers={customers} />
    </table>
  )
}

export default Table
