import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Arrow from "../../../../assets/Back arrow.svg";
import "./ComparisionTable.css";

const ComparisonTable = ({ table, setShowTable }) => {
  if (!table || !table.row || !table.rowData) {
    return <div className="loading-message">Loading...</div>;
  }

  return (
    <div className="table-container">
    <div className="back-button-cont">
      <button className="back-button" onClick={() => setShowTable(false)}>
        <img src={Arrow} alt="Back" />
      </button>

      <h1 className="Table-main">{table.title}</h1>
      <h2 className="Table-sub">
        A comprehensive feature by feature comparison of the most popular AI
        writing assistants
      </h2>
    </div>

    <div className="cont-table">
      <h2 className="table-head">Comparison Table</h2>
      </div>

      <TableContainer component={Paper} className="comparison-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow align="left"
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {table.row.map((header, index) => (
                <TableCell key={index} align="left" className="th-style">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {table.rowData.map((rows, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="td-style">{rows.Feature}</TableCell>
                <TableCell className="td-style">{rows.Comment}</TableCell>
                <TableCell className="td-style">{rows.Oyster}</TableCell>
                <TableCell className="td-style">{rows.Platform}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ComparisonTable;
