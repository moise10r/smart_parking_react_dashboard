import React from 'react'

const TableBody = ({ customers, onDelete }) => {
  return (
    <tbody>
      {customers.map((custom) => (
        <tr key={custom._id}>
          <td>{custom._id}</td>
          <td>{custom.name}</td>
          <td>{custom.plateNumber}</td>
          <td>{custom.phoneNumber}</td>
          <td>{custom.cardId}</td>
          <td>
            <button
              onClick={() => onDelete(custom)}
              style={{
                backgroundColor: 'red',
                borderRadius: '5px',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '500',
              }}
              className="btn"
            >
              Delete
            </button>
          </td>
          <td>
            <button
              style={{
                backgroundColor: 'blue',
                borderRadius: '5px',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '500',
              }}
              className="btn"
            >
              Update
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  )
}

export default TableBody
