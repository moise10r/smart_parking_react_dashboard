import React from 'react'
import { data } from '../../data'

const TableBody = () => {
  return (
    <tbody>
      {data.customers.map((custom) => (
        <tr key={custom._id}>
          <td>{custom._id}</td>
          <td>{custom.name}</td>
          <td>{custom.plateNumber}</td>
          <td>{custom.phoneNumber}</td>
          <td>{custom.cardId}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
          <td>
            <button className="btn btn-primary ">Update</button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
