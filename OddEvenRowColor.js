//we have a table, now I want to apply red color for odd row and blue color for even row in  React js

import React from 'react';

const TableComponent = () => {
  const data = [
    { name: 'John', id: 100 },
  { name: 'Jack', id: 101 },
  { name: 'Dam', id: 102 },
  { name: 'Porty', id: 103 }
  ];

  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr>
          <th>Emp Name</th>
          <th>Emp Id</th>
          {/* Add more headers as needed */}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? 'blue' : 'red',
              // Add other styles as needed
            }}
          >
            <td>{item.name}</td>
            <td>{item.id}</td>
            {/* Add more cells as needed */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
