import React, { useState } from "react";
import ReactDataGrid from "react-data-grid";

function CheckboxSelectableGrid(props) {
  const columns = props.cols;

  const rows = props.rows;

  const CheckboxSelector = ({ row, onCheckboxChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      onCheckboxChange(row, !isChecked);
    };

    return (
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    );
  };

  const CheckboxSelectorHeader = ({ rows, onCheckboxChange }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      onCheckboxChange(rows, !isChecked);
    };

    return (
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    );
  };

    const [selectedRows, setSelectedRows] = useState([]);

    const handleCheckboxChange = (row, isChecked) => {
      if (isChecked) {
        setSelectedRows([...selectedRows, row]);
      } else {
        setSelectedRows(
          selectedRows.filter((selectedRow) => selectedRow.id !== row.id)
        );
      }
    };

    const handleHeaderCheckboxChange = (rows, isChecked) => {
      if (isChecked) {
        setSelectedRows([...selectedRows, ...rows]);
      } else {
        setSelectedRows(
          selectedRows.filter(
            (selectedRow) => !rows.find((row) => row.id === selectedRow.id)
          )
        );
      }
    };

    return (
      <ReactDataGrid
        columns={[
          {
            key: "selector",
            name: "",
            formatter: CheckboxSelector,
            headerRenderer: CheckboxSelectorHeader,
          },
          ...columns,
        ]}
        rows={rows}
        rowKey="id"
        onSelectedRowsChange={setSelectedRows}
        selectedRows={selectedRows}
        enableCellSelect={false}
      />
    );
}

export default CheckboxSelectableGrid;
