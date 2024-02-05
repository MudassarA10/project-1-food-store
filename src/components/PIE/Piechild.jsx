// Import React and the CSS file
import React from "react";
import "../PIE/piechile.css";

const Table = ({ data }) => {
  const handleDetailsClick = (item) => {
    console.log("Details clicked for", item);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Pie Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <img className="img-table" src={item.image} alt={item.name} />
            </td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>${item.price.toFixed(2)}</td>
            <td>
              <button onClick={() => handleDetailsClick(item)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
