import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";
import classes from "./CheckboxSelectableGrid.module.css";


function CheckboxSelectableGrid(props) {
  const rows = props.rows;
  const [gridData, setGridData] = useState(rows);

  const handleCheckboxChange = (event, index) => {
    const newData = [...gridData];
    newData[index].selected = event.target.checked;
    setGridData(newData);
  };

  const handleHeaderCheckboxChange = (event) => {
    const newData = [...gridData];

    gridData.map(
      (item, index) => (newData[index].selected = event.target.checked)
    );
    setGridData(newData);
  };

  const handleSubmit = () => {
    props.handleGridSubmit(gridData);
  };

  return (
    <div className={classes.popupbox}>
      <div className={classes.box}>
        <span className={classes.closeicon} onClick={props.handleClose}>x</span>
        <table>
          <thead>
            <tr>
              <th>
                <input
                  id="hdrChkbox"
                  type="checkbox"
                  onChange={(event) => handleHeaderCheckboxChange(event)}
                />
              </th>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {gridData.map((item, index) => (
              <tr key={item.userId}>
                <td>
                  <input
                    type="checkbox"
                    checked={item.selected}
                    onChange={(event) => handleCheckboxChange(event, index)}
                  />
                </td>
                <td>{item.userId}</td>
                <td>{item.name}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={2}>
                <button onClick={handleSubmit}>Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CheckboxSelectableGrid;
